# Removal of Non-Essential Features

Date: 2024-06-14

Status: accepted

## Context

To streamline the LaunchFast stack and make it easier for users to start
building their applications without unnecessary overhead, we decided to remove
features from the Epic Stack that are not essential for most applications. This
decision ensures that users can hit the ground running and focus on building
their core functionality without having to spend time removing or modifying
unnecessary features.

## Decision

We have removed several non-essential features from the Epic Stack to simplify
the initial setup and improve the user experience. The most notable removals
include:

1. **Username and Password Login**: We've replaced the username and password
   login system with an email and password login system. Usernames are often an
   unnecessary indirection that forces users to remember an additional piece of
   information, leading to a poorer user experience. Email-based logins are more
   straightforward and user-friendly.

2. **Notes Feature**: The original stack included a feature where users could
   take private notes in their accounts. While useful in some contexts, this
   feature is not essential for most applications and can be cumbersome to
   remove. By excluding this feature, we reduce the initial complexity and setup
   time for developers.

## Consequences

By removing these features, we achieve the following:

- **Simplified User Experience**: Users no longer need to remember a separate
  username and the login process is more intuitive.
- **Reduced Initial Setup Complexity**: Developers can start building their core
  application functionality without needing to strip out unnecessary features.
- **Focus on Essential Features**: The stack is leaner and more focused,
  allowing developers to add only the features they need.

Future considerations might include re-evaluating other features for their
necessity and impact on user experience and development time. Additionally, we
will ensure that any further enhancements or removals align with our goal of
providing a streamlined, easy-to-use starter template.
