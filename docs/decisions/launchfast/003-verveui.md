# Integration of VerveUI Components and Migration of shadcn/ui to VerveUI Design System

Date: 2024-07-04

Status: accepted

## Context

In addition to the shadcn/ui components, we identified a need for layout and
typography components that are useful for developers. To address this need, we
integrated the layout and typography components from
[VerveUI](https://verveui.pro/). Even though VerveUI is built on top of
[React Aria](https://react-spectrum.adobe.com/react-aria/components.html), the
layout and typography components do not depend on it, so we avoid installing two
accessibility libraries. Furthermore, to leverage the power of VerveUI's design
system, we migrated all shadcn/ui components to this system.

VerveUI's design system is compatible with the next version of TailwindCSS
(version 4), ensuring future-proofing. Migrating shadcn/ui components to
VerveUI's design system is also a step towards completely transitioning to a
more powerful UI library. VerveUI not only provides a complete set of UI
components but also includes patterns (common UI component groupings), page
sections (common sections made of UI components and patterns), and page
templates (such as login, create account, change password, product search,
product view, etc.), further speeding up development.

## Decision

We have added VerveUI's layout and typography components to LaunchFast.
Additionally, all shadcn/ui components have been migrated to VerveUI's design
system, which is more powerful and flexible.

## Consequences

- **Enhanced Flexibility**: The use of VerveUI's design system allows for
  greater customization and theming flexibility.
- **Powerful Layout and Typography Tools**: VerveUI's components provide
  developers with tools for creating responsive layouts and beautiful
  typography.
- **Consistent Design System**: Migrating shadcn/ui components to VerveUI's
  design system ensures a unified and cohesive design language across all
  components.
- **Future-Proofing**: VerveUI's design system is compatible with TailwindCSS
  version 4, ensuring long-term viability.
- **Accelerated Development**: VerveUI offers not just components, but also
  patterns, page sections, and templates, which greatly speed up the development
  process.

This decision supports our goal of providing a robust and flexible component
library that enables developers to quickly build and customize their
applications. To avoid having two accessibility libraries (Radix UI from shadcn
and React Aria from VerveUI) installed simultaneously, the switch from shadcn/ui
to VerveUI needs to be done in one go.
