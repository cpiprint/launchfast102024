# Guiding Principles

This document outlines the guiding principles for both the Epic Stack and
LaunchFast. While LaunchFast builds upon the foundation of the Epic Stack/Indie
Stack, it introduces some key differences to better align with its goals.

## Epic Stack Guiding Principles

Decisions about the Epic Stack should be guided by the following principles:

- **Limit Services:** If we can reasonably build, deploy, maintain it ourselves,
  do it. Additionally, if we can reasonably run it within our app instance, do
  it. This saves on cost and reduces complexity.
- **Include Only Most Common Use Cases:** As a project generator, it is expected
  that some code will necessarily be deleted, but implementing support for every
  possible type of feature is literally impossible. _The starter app is not
  docs_, so to demonstrate a feature or give an example, put that in the docs
  instead of in the starter app.
- **Minimize Setup Friction:** Try to keep the amount of time it takes to get an
  app to production as small as possible. If a service is necessary, see if we
  can defer signup for that service until its services are actually required.
  Additionally, while the target audience for this stack is apps that need scale
  you have to pay for, we try to fit within the free tier of any services used
  during the exploration phase.
- **Optimize for Adaptability:** While we feel great about our opinions,
  ever-changing product requirements sometimes necessitate swapping trade-offs.
  So while we try to keep things simple, we want to ensure teams using the Epic
  Stack are able to adapt by switching between third-party services to
  custom-built services and vice-versa.
- **Only One Way:** Avoid providing more than one way to do the same thing. This
  applies to both the pre-configured code and the documentation.
- **Offline Development:** We want to enable offline development as much as
  possible. Naturally, we need to use third-party services for some things (like
  email), but for those, we'll strive to provide a way to mock them out for
  local development.

## LaunchFast Principles

LaunchFast builds on the Epic Stack principles with some key modifications to
enhance usability and flexibility:

- **Minimize Setup Friction:** Keep the time it takes to get the starter app to
  production under 1 minute. If a service is included, defer signup and setup
  for that service until it is required.
- **Cost-Efficient Exploration:** Strive to fit within the free tier of any
  services used during the exploration phase. This allows developers to explore
  and experiment without incurring costs, providing a risk-free environment to
  test and develop their applications before committing to any expenses.
- **Comprehensive Inclusivity:** The starter app includes a comprehensive set of
  features that cater to a wide range of use cases, providing developers with a
  solid starting point. This ensures that common features are readily available,
  avoiding the need for developers to waste time coding features that are
  already included.
- **Non-Intrusive Design:** While the app provides a rich, ready-to-use
  solution, it is built to be non-intrusive, meaning that unused features will
  not interfere with the developer's experience or the app’s performance. This
  ensures a streamlined and efficient development experience. Don't use a
  feature? Just ignore it. It won't get in your way.
- **Optimize For Adaptability:** LaunchFast is designed with adaptability in
  mind, allowing developers to easily switch between third-party services and
  custom-made ones as needed. For example, we prefer using direct API calls with
  fetch requests over installing third-party libraries that abstract a simple
  fetch API call unless the library provides significant added value. This
  maximizes flexibility and ensures the stack can adapt to various needs and
  changes efficiently.
- **Reasonably Absorb Services:** If we can reasonably build, deploy, and
  maintain services ourselves, we'll do it. Additionally, if we can reasonably
  run them within our app instance, we'll do that too. This saves on cost and
  reduces complexity.
- **Example-Driven Guidance:** For less common use cases, we provide example
  repositories instead of documentation. This ensures that developers have
  practical, working examples to refer to, making it easier to understand and
  implement less frequent features or configurations. By offering real-world
  code samples, we help developers quickly grasp complex scenarios without
  wading through lengthy documentation.

## Key Differences Between Epic Stack and LaunchFast Principles

1. **Feature Inclusivity**: While the Epic Stack includes only the most common
   use cases, LaunchFast provides a more comprehensive set of features out of
   the box, catering to a broader range of use cases.
2. **Non-Intrusive Design**: LaunchFast ensures that unused features do not
   interfere with the development experience, promoting a non-intrusive design.

By understanding these guiding principles and their differences, developers can
appreciate the philosophy behind LaunchFast and how it aims to enhance their
development experience beyond what the Epic Stack offers.
