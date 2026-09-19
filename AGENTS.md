# Hyliard Agent Instructions

These instructions apply to AI coding/design agents working on a Hyliard project.

## Prime directive

Before modifying UI or UX, read `HYLIARD-DESIGN.md` and inspect the existing implementation.

The objective is to improve the product without replacing its visual identity with AI defaults.

**PRESERVE → REFINE → EXTEND**

---

## Before making changes

For any UI/UX task:

1. Inspect the repository and current implementation.
2. Read `HYLIARD-DESIGN.md` completely.
3. Identify existing design tokens, themes, components and assets.
4. Determine whether the product already supports light and dark mode.
5. Identify established product-specific colors and their actual semantic roles.
6. Identify reusable components before creating new ones.
7. Check platform conventions and accessibility requirements.
8. Do not modify files until the requested task and relevant design constraints are understood.

When the task is exploratory or the user has asked for analysis first, report:
- what you understood
- applicable design rules
- affected files/components
- what should be preserved
- what can be refined
- what can be reused
- proposed changes
- any design-system deviation required

---

## Existing products

Do not rebrand an existing product as a side effect of implementing a feature.

Preserve established identity unless the task explicitly requests a redesign.

If an existing decision is weak or outdated:
1. identify the concrete problem
2. preserve the underlying intent where possible
3. propose an evolution
4. avoid replacing it with a generic contemporary pattern

---

## New products

Do not invent a generic AI/SaaS aesthetic.

Start from Hyliard design principles, then define the product's own personality and accent semantics.

There is no universal Hyliard primary blue.

---

## Color and themes

- Use semantic design tokens.
- Treat light and dark mode as first-class when supported by the product/platform.
- Never remove an existing light or dark theme without an explicit requirement.
- Never hard-code a color simply because it looks correct in the currently visible appearance.
- Validate contrast and interaction states in both appearances.
- Accent colors require product or semantic justification.

---

## AI-default guardrails

Do not introduce by default:

- blue primary palettes
- purple/blue gradients
- gradient text
- glassmorphism
- excessive glow/blur
- oversized corner radii everywhere
- card-heavy layouts
- generic SaaS heroes
- automatic three-column feature grids
- decorative pills
- decorative icon containers
- generic AI marketing copy
- futuristic styling merely because the product involves AI or technology

A pattern from this list may be used only when it has a specific product/design rationale.

---

## Implementation quality

Prefer:
- existing components over duplication
- design tokens over literals
- semantic naming over color naming
- native platform behavior where appropriate
- accessible controls
- responsive/adaptive layouts
- small, reviewable changes

Avoid unrelated refactors during a focused visual task.

---

## SwiftUI

When working in SwiftUI:

- prefer semantic/system colors or project theme tokens
- preserve Dynamic Type
- support accessibility labels and appropriate hit targets
- respect system light/dark appearance unless explicitly overridden
- avoid fixed dimensions where adaptive layout is more appropriate
- reuse View components and modifiers deliberately
- do not force a web/SaaS visual language onto a native iOS interface

---

## Web

When working on web UI:

- use CSS variables/design tokens for themes
- support `prefers-color-scheme` where appropriate
- preserve an existing manual theme selector if the product has one
- implement visible keyboard focus states
- use semantic HTML
- test responsive behavior
- avoid framework-default branding leaking into the product

---

## Verification after implementation

After changes:

1. Build/compile the project when tooling is available.
2. Run relevant tests/linting when available.
3. Verify the changed screen in light mode.
4. Verify the changed screen in dark mode.
5. Check primary interaction states.
6. Check narrow/small layouts where applicable.
7. Confirm no unrelated visual identity changes were introduced.
8. Report files changed and validation performed.

Do not claim verification that was not actually performed.

---

## Design-system deviations

If the task genuinely requires breaking a Hyliard design rule, state:

- which rule conflicts
- why the deviation is useful
- whether it should remain product-specific or become a design-system revision

Do not silently redefine Hyliard's visual identity while implementing an unrelated task.
