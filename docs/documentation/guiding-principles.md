# LaunchFast Principles

## Minimize Setup Friction

Keep the time it takes to get the starter app to production under 1 minute. If a
service is included, defer signup and setup for that service until it's
required.

## Cost-Efficient Exploration

While the target audience for this stack is apps that need scale you have to pay
for, strive to fit within the free tier of any services used during the
exploration phase. This approach allows developers to explore and experiment
without incurring costs, facilitating a risk-free environment to test and
develop their applications before committing to any expenses.

## Comprehensive Inclusivity

The starter app is designed to include a comprehensive set of features that
cater to a wide range of use cases, providing developers with a very solid
starting point. This approach ensures that common features are readily
available, avoiding the need for developers to waste time coding features that
are already included.

## Non-intrusive Design

While the app provides a rich, ready-to-use solution, it is built to be
non-intrusive, meaning that unused features will not interfere with the
developer's experience or the app’s performance. This principle ensures that
developers can take advantage of a broad feature set without experiencing
unnecessary complications or overhead, maintaining a streamlined and efficient
development experience. Think of it like a fully-featured toolbox. You have all
the tools you need, but you only take out the ones you need for the job at hand.
Don't use a feature? Just ignore it. It won't get in your way.

## Optimize For Adaptability

To allow for flexible trade-offs, Launch Fast is designed with adaptability in
mind, so devs can easily switch between third-party services and custom-made
ones as needed. For example, we prefer using direct API calls with fetch
requests over installing third-party libraries that abstract a simple fetch API
call - unless the library provides significant added value. This approach
maximizes flexibility and makes it super simple to swap that API endpoint with
some other service.

## Reasonably Absorb Services

If we can reasonably build, deploy, and maintain services ourselves, we'll do
it. Additionally, if we can reasonably run them within our app instance, we'll
do that too. This saves on cost and reduces complexity.

## Example-Driven Guidance

For less common use cases, we provide example repositories instead of extensive
documentation. This principle ensures that developers have practical, working
examples to refer to, making it easier to understand and implement less frequent
features or configurations. By offering real-world code samples, we help
developers quickly grasp complex scenarios without wading through lengthy
documentation.
