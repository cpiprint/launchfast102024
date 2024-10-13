# Server Timing

![Network tab of Chrome DevTools showing the Timing tab of a specific network call and an arrow pointing to the Server Timing section with the words "This is what server timings do"](https://github.com/epicweb-dev/epic-stack/assets/1500684/e5a28253-8204-43b1-8222-3f287d024ca5)

LaunchFast comes with a built-in server timing utility that allows you to
measure the performance of your application. You can find it in the
`app/utils/timing.server.ts` file. The idea is you can wrap a function in a
`time` call and then use the timings object to generate a `Server-Timing` header
which you can then use to have fine-grained timing metrics for requests made in
your app.

You can
[learn more about the Server Timing header on MDN](https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Server-Timing).
The metrics passed in this header will be visually displayed in
[the DevTools "Timing" tab](https://developer.chrome.com/docs/devtools/network/reference/#timing).

## Usage

Timings require four parts:

1. Setup Timings
2. Time functions
3. Create headers
4. Send headers

Here's how you'd setup timings for a particular route:

```tsx
import {
	combineServerTimings,
	makeTimings,
	time,
} from '#app/utils/timing.server.ts'

export async function loader({ params }: LoaderFunctionArgs) {
	const timings = makeTimings('some loader') // <-- 1. Setup Timings
	// 2. Time one or more functions
	const owner = await time(
		() =>
			prisma.user.findUnique({
				where: {
					email: params.email,
				},
				select: {
					id: true,
					email: true,
					name: true,
					imageId: true,
				},
			}),
		{ timings, type: 'find user' },
	)
	if (!owner) {
		throw new Response('Not found', { status: 404 })
	}
	return json(
		{ owner }, // <-- Add other timed funtion calls here
		{ headers: { 'Server-Timing': timings.toString() } }, // <-- 3. Create headers
	)
}

export const headers: HeadersFunction = ({ loaderHeaders, parentHeaders }) => {
	return {
		'Server-Timing': combineServerTimings(parentHeaders, loaderHeaders), // <-- 4. Send headers
	}
}
```

You can
[learn more about `headers` in the Remix docs](https://remix.run/docs/en/main/route/headers)
(note, LaunchFast has the v2 behavior enabled).
