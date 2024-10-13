import { getFormProps, getInputProps, useForm } from '@conform-to/react'
import { getZodConstraint, parseWithZod } from '@conform-to/zod'
import * as E from '@react-email/components'
import {
	json,
	redirect,
	type ActionFunctionArgs,
	type MetaFunction,
} from '@remix-run/node'
import { Link, useFetcher } from '@remix-run/react'
import { HoneypotInputs } from 'remix-utils/honeypot/react'
import { z } from 'zod'
import { StatusButton } from '#app/ui/components/custom/status-button.tsx'
import { GeneralErrorBoundary } from '#app/ui/components/error-boundary.tsx'
import { ErrorList, Field } from '#app/ui/components/forms.tsx'
import { appName } from '#app/utils/constants.ts'
import { prisma } from '#app/utils/db.server.ts'
import { sendEmail } from '#app/utils/email.server.ts'
import { checkHoneypot } from '#app/utils/honeypot.server.ts'
import { EmailSchema } from '#app/utils/user-validation.ts'
import { prepareVerification } from './verify.server.ts'

const ForgotPasswordSchema = z.object({ email: EmailSchema })

export async function action({ request }: ActionFunctionArgs) {
	const formData = await request.formData()
	checkHoneypot(formData)
	const submission = await parseWithZod(formData, {
		schema: ForgotPasswordSchema.superRefine(async (data, ctx) => {
			const user = await prisma.user.findFirst({
				where: { email: data.email },
				select: { id: true },
			})
			if (!user) {
				ctx.addIssue({
					path: ['email'],
					code: z.ZodIssueCode.custom,
					message: 'No user exists with this email',
				})
				return
			}
		}),
		async: true,
	})
	if (submission.status !== 'success') {
		return json(
			{ result: submission.reply() },
			{ status: submission.status === 'error' ? 400 : 200 },
		)
	}
	const { email } = submission.value

	const user = await prisma.user.findFirstOrThrow({
		where: { email },
		select: { email: true },
	})

	const { verifyUrl, redirectTo, otp } = await prepareVerification({
		period: 10 * 60,
		request,
		type: 'reset-password',
		target: email,
	})

	const response = await sendEmail({
		to: user.email,
		subject: `${appName} Password Reset`,
		react: (
			<ForgotPasswordEmail onboardingUrl={verifyUrl.toString()} otp={otp} />
		),
	})

	if (response.status === 'success') {
		return redirect(redirectTo.toString())
	} else {
		return json(
			{ result: submission.reply({ formErrors: [response.error.message] }) },
			{ status: 500 },
		)
	}
}

function ForgotPasswordEmail({
	onboardingUrl,
	otp,
}: {
	onboardingUrl: string
	otp: string
}) {
	return (
		<E.Html lang="en" dir="ltr">
			<E.Container>
				<h1>
					<E.Text>{`${appName} Password Reset`}</E.Text>
				</h1>
				<p>
					<E.Text>
						Here's your verification code: <strong>{otp}</strong>
					</E.Text>
				</p>
				<p>
					<E.Text>Or click the link:</E.Text>
				</p>
				<E.Link href={onboardingUrl}>{onboardingUrl}</E.Link>
			</E.Container>
		</E.Html>
	)
}

export const meta: MetaFunction = () => {
	return [{ title: `Password Recovery for ${appName}` }]
}

export default function ForgotPasswordRoute() {
	const forgotPassword = useFetcher<typeof action>()

	const [form, fields] = useForm({
		id: 'forgot-password-form',
		constraint: getZodConstraint(ForgotPasswordSchema),
		lastResult: forgotPassword.data?.result,
		onValidate({ formData }) {
			return parseWithZod(formData, { schema: ForgotPasswordSchema })
		},
		shouldRevalidate: 'onBlur',
	})

	return (
		<div className="container pb-32 pt-20">
			<div className="flex flex-col justify-center">
				<div className="text-center">
					<h1 className="text-h1">Forgot Password</h1>
					<p className="mt-3 text-body-md text-muted-600">
						No worries, we'll send you reset instructions.
					</p>
				</div>
				<div className="mx-auto mt-16 min-w-full max-w-sm sm:min-w-[368px]">
					<forgotPassword.Form method="POST" {...getFormProps(form)}>
						<HoneypotInputs />
						<div>
							<Field
								labelProps={{ children: 'Email', htmlFor: fields.email.id }}
								inputProps={{
									autoFocus: true,
									...getInputProps(fields.email, { type: 'email' }),
								}}
								errors={fields.email.errors}
							/>
						</div>
						<ErrorList errors={form.errors} id={form.errorId} />

						<div className="mt-6">
							<StatusButton
								className="w-full"
								status={
									forgotPassword.state === 'submitting'
										? 'pending'
										: form.status ?? 'idle'
								}
								type="submit"
								disabled={forgotPassword.state !== 'idle'}
							>
								Recover password
							</StatusButton>
						</div>
					</forgotPassword.Form>
					<Link
						to="/login"
						className="mt-11 text-center text-body-sm font-bold"
					>
						Back to Login
					</Link>
				</div>
			</div>
		</div>
	)
}

export function ErrorBoundary() {
	return <GeneralErrorBoundary />
}
