# Authentication

LaunchFast manages its authentication using web standards and established
libraries and tools.

By default, LaunchFast offers you two mechanisms for authentication:

1. Email and password authentication
2. Provider authentication

## Email and password authentication

When a user wishes to sign up for an account, they are asked for their email
address. LaunchFast will send them an email with a code as well as a link. The
user can then enter the code or click the link to verify their email address
which takes them through the onboarding flow which will allow them to set their
password.

The password is stored using the [bcrypt](https://npm.im/bcrypt) algorithm.

## Provider authentication

LaunchFast ships with a system for third-party authentication allowing you to
easily add SSO (Single Sign On) to your application. LaunchFast ships with
support for GitHub OAuth2 authentication out of the box. But you can easily
remove that and/or add other providers. It's all built using
[`remix-auth`](https://npm.im/remix-auth), so any provider supported there can
be added, including [`web-oidc`](https://npm.im/web-oidc) which handles OpenID
Connect authentication and exports a `remix-auth` compatible auth strategy.

You can check [this example](https://github.com/kentcdodds/epic-oidc) which
shows using OpenID Connect to add Google authentication to LaunchFast. You can
expand beyond this to add any other provider you'd like, and if you need to
support SAML, you may look into
[`@boxyhq/remix-auth-sso`](https://github.com/boxyhq/remix-auth-sso).

### GitHub OAuth App

You will see in `.env.example` the `GITHUB_CLIENT_ID` starts with `MOCK_...`.
This is a precondition for the GitHub server to be mocked (with the help of the
[`MSW`](https://github.com/mswjs/msw) library). See this
[module](../tests/mocks/github.ts) for more details and pay attention to how the
calls to `https://github.com/login/oauth/access_token` are being intercepted.
But once deployed to an environment where `process.env.MOCKS` is not set to
`'true'` (see how this is done when launching the
[dev server](../server/dev-server.js) and checked in the
[entrypoint](../index.js)), or even when developing _locally_ but not setting
`GITHUB_CLIENT_ID` to `MOCK_...`, the requests will reach the GitHub auth
server. This is where you will want to have a GitHub OAuth application properly
set up, otherwise, logging in with GitHub will fail and a corresponding toast
will appear on the screen.

To set up an OAuth application during development, log in to GitHub, go to
`Settings -> Developer settings -> OAuth Apps`, and hit the
`Register a new application` button. Type in `http://localhost:3000` for
"Homepage URL" and `http://localhost:3000/auth/github/callback` for
"Authorization callback URL". As for the `Application name` set it to something
meaningful (because your users will see the app's name), e.g.
`MY_EPIC_APPLICATION_DEVELOPMENT`. Hit the `Register application` button. You
will be redirected to the page with your newly created OAuth app's details. You
will see your app has got `0` users and no client secrets just yet, but the
Client ID has already been assigned to your app. Copy over this value to
`GITHUB_CLIENT_ID` in your _.env_ file. Now hit the `Generate client secret`
button, and copy over the newly generated secret to `GITHUB_CLIENT_SECRET` in
the .env file. Hit the `Update application` button on your GitHub OAuth app
page.

Your `.env` file should resemble this (values have been redacted):

```bash
# some other secrets and env vars
...

GITHUB_CLIENT_ID="72fa***************a"
GITHUB_CLIENT_SECRET="b2c6d323b**************************eae016"
```

Now, run the LaunchFast app in dev mode, go to the login page, and use the
`Login with GitHub` option. You will be redirected to GitHub and prompted to
authorize the "MY_EPIC_APPLICATION_DEVELOPMENT" (or whatever the name of your
OAuth app is) OAuth app to access your GitHub account data. After you give your
consent, you will be redirected to your LaunchFast app running on localhost, and
the onboarding will kick off. You can now refresh your GitHub OAuth app page and
see how the number of registered users increased to `1`.

Something to appreciate here is that you, as the GitHub OAuth app owner (since
you created it in your GitHub account), and you as a user authorizing this
GitHub OAuth app to access your account's data, are _two different_ entities.
The OAuth app could have been registered with an Organisation or another
person's GitHub account.

When you're ready for public release, create a new OAuth app in your GitHub with
the appropriate homepage and redirect URLs.

Also, make sure to register separate additional OAuth apps for each of your
deployed environments (e.g. `staging` and `production`) and specify the
corresponding homepage and redirect URLs in there.

## TOTP and Two-Factor Authentication

Two-factor authentication is built into LaunchFast. It's managed using the
[`@epic-web/totp`](https://npm.im/@epic-web/totp) (Time-based One-Time
Passwords) utility.

You can read more about the decision to use TOTP in
[the TOTP decision document](./decisions/014-totp.md). The secret and other
pertinent information is stored in a `verification` model (check the Prisma
schema). This verification model is used as the basis for all TOTP secrets. This
is used for non-expiring Two-Factor Authentication secrets as well as temporary
TOTP codes which are emailed to verify a user's ownership of an email/account.
So it's used for onboarding, the 'forgot password' feature, and changing email
flows.

When a user has 2FA enabled on their account, they also are required to enter
their 2FA code within 2 hours of performing destructive actions like changing
their email or disabling 2FA. This time is controlled by the
`shouldRequestTwoFA` utility in the `app/routes/_auth+/login.server.ts` full
stack component.
