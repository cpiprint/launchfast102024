import { getFormProps, getInputProps, useForm } from '@conform-to/react'
import { getZodConstraint, parseWithZod } from '@conform-to/zod'
import {
	json,
	redirect,
	type ActionFunctionArgs,
	type LoaderFunctionArgs,
	type MetaFunction,
} from '@remix-run/node'
import { Form, useActionData, useLoaderData } from '@remix-run/react'
import { StatusButton } from '#app/ui/components/custom/status-button.tsx'
import { GeneralErrorBoundary } from '#app/ui/components/error-boundary.tsx'
import { ErrorList, Field } from '#app/ui/components/forms.tsx'
import { requireAnonymous, resetUserPassword } from '#app/utils/auth.server.ts'
import { appName } from '#app/utils/constants.ts'
import { useIsPending } from '#app/utils/misc.tsx'
import { PasswordAndConfirmPasswordSchema } from '#app/utils/user-validation.ts'
import { verifySessionStorage } from '#app/utils/verification.server.ts'

export const resetPasswordEmailSessionKey = 'resetPasswordEmail'

const ResetPasswordSchema = PasswordAndConfirmPasswordSchema

async function requireResetPasswordEmail(request: Request) {
	await requireAnonymous(request)
	const verifySession = await verifySessionStorage.getSession(
		request.headers.get('cookie'),
	)
	const resetPasswordEmail = verifySession.get(resetPasswordEmailSessionKey)
	if (typeof resetPasswordEmail !== 'string' || !resetPasswordEmail) {
		throw redirect('/login')
	}
	return resetPasswordEmail
}

export async function loader({ request }: LoaderFunctionArgs) {
	const resetPasswordEmail = await requireResetPasswordEmail(request)
	return json({ resetPasswordEmail })
}

export async function action({ request }: ActionFunctionArgs) {
	const resetPasswordEmail = await requireResetPasswordEmail(request)
	const formData = await request.formData()
	const submission = parseWithZod(formData, {
		schema: ResetPasswordSchema,
	})
	if (submission.status !== 'success') {
		return json(
			{ result: submission.reply() },
			{ status: submission.status === 'error' ? 400 : 200 },
		)
	}
	const { password } = submission.value

	await resetUserPassword({ email: resetPasswordEmail, password })
	const verifySession = await verifySessionStorage.getSession()
	return redirect('/login', {
		headers: {
			'set-cookie': await verifySessionStorage.destroySession(verifySession),
		},
	})
}

export const meta: MetaFunction = () => {
	return [{ title: `Reset Password | ${appName}` }]
}

export default function ResetPasswordPage() {
	const data = useLoaderData<typeof loader>()
	const actionData = useActionData<typeof action>()
	const isPending = useIsPending()

	const [form, fields] = useForm({
		id: 'reset-password',
		constraint: getZodConstraint(ResetPasswordSchema),
		lastResult: actionData?.result,
		onValidate({ formData }) {
			return parseWithZod(formData, { schema: ResetPasswordSchema })
		},
		shouldRevalidate: 'onBlur',
	})

	return (
		<div className="container flex flex-col justify-center pb-32 pt-20">
			<div className="text-center">
				<h1 className="text-h1">Password Reset</h1>
				<p className="mt-3 text-body-md text-muted-600">
					Hi, {data.resetPasswordEmail}. No worries. It happens all the time.
				</p>
			</div>
			<div className="mx-auto mt-16 min-w-full max-w-sm sm:min-w-[368px]">
				<Form method="POST" {...getFormProps(form)}>
					<Field
						labelProps={{
							htmlFor: fields.password.id,
							children: 'New Password',
						}}
						inputProps={{
							...getInputProps(fields.password, { type: 'password' }),
							autoComplete: 'new-password',
							autoFocus: true,
						}}
						errors={fields.password.errors}
					/>
					<Field
						labelProps={{
							htmlFor: fields.confirmPassword.id,
							children: 'Confirm Password',
						}}
						inputProps={{
							...getInputProps(fields.confirmPassword, { type: 'password' }),
							autoComplete: 'new-password',
						}}
						errors={fields.confirmPassword.errors}
					/>

					<ErrorList errors={form.errors} id={form.errorId} />

					<StatusButton
						className="w-full"
						status={isPending ? 'pending' : form.status ?? 'idle'}
						type="submit"
						disabled={isPending}
					>
						Reset password
					</StatusButton>
				</Form>
			</div>
		</div>
	)
}

export function ErrorBoundary() {
	return <GeneralErrorBoundary />
}
