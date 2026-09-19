# Hyliard Design System

Version: 0.1
Status: Foundation

## Purpose

Hyliard products should evolve from Gerard's established visual language rather than adopting the default visual language of an AI model, framework, component library, or SaaS template.

Core rule:

**PRESERVE → REFINE → EXTEND**

Modernize the product without erasing its history or authorship.

---

## 1. Design principles

### 1.1 Heritage before reinvention
Before redesigning an existing Hyliard interface, inspect the current implementation and identify its established visual decisions.

Preserve their intent when they still serve the product. Improve execution before replacing identity.

### 1.2 Neutral-first
Hyliard does not have a mandatory universal blue, purple, green, or other accent color.

The visual foundation should favor neutral surfaces and strong hierarchy:
- charcoal / near-black
- graphite
- neutral gray surfaces
- soft gray secondary content
- off-white / white primary content

Exact values should be implemented as semantic tokens and may evolve over time.

### 1.3 Accent colors belong to products
Accent colors are selected per product and must have a reason.

An accent can represent:
- product identity
- primary action
- status
- feedback
- data category
- navigation state

Never introduce an accent simply because a framework or AI assistant needs a `primaryColor`.

### 1.4 Professionalize before decorating
Prioritize:
1. information hierarchy
2. layout and alignment
3. typography
4. spacing
5. interaction states
6. accessibility
7. responsive/adaptive behavior
8. visual effects

Decoration must not compensate for weak structure.

### 1.5 Product personality
Hyliard products share design principles, not a universal template.

ContractorHoursPay, Hyliard AI, Portfolio, Project Hub, Homelab and future products may have distinct visual personalities.

---

## 2. Light and dark mode

**Hyliard supports both light and dark appearances when the platform/product supports them.**

Dark mode is part of Hyliard's visual history, but it is not the only valid appearance.

### Rules
- Build interfaces using semantic color roles, never scattered hard-coded light/dark values.
- Light mode and dark mode are equal first-class experiences.
- Do not design one appearance and mechanically invert it for the other.
- Preserve hierarchy, contrast and product identity in both appearances.
- Accent colors may require different values in light and dark mode to preserve contrast.
- Avoid pure `#000000` and `#FFFFFF` as large surfaces unless deliberately required by the product.
- Respect the operating system appearance by default on native applications unless the product explicitly defines another behavior.
- Web products should support `prefers-color-scheme` when appropriate and may provide a user-controlled override.
- Verify text, controls, borders, disabled states, focus indicators, errors, success states and selected states in both appearances.

### Semantic token model

Use roles rather than visual names:

```text
background
surface
surfaceElevated
textPrimary
textSecondary
textMuted
border
borderStrong
accent
accentForeground
success
warning
danger
focus
```

Each product maps these roles independently for light and dark appearance.

Do NOT build product code around names such as `hyliardBlue`, `darkGray2` or `cardPurple` unless the color itself has true semantic meaning.

---

## 3. Typography

Typography should feel technical, readable and deliberate.

- Prefer platform-native typography where it improves native behavior and accessibility.
- A product may define its own display typeface when branding justifies it.
- Maintain a small, intentional type scale.
- Use weight and spacing before adding decorative effects.
- Avoid giant marketing headlines simply because they are fashionable.
- Avoid gradient text as a default branding device.
- Code, identifiers, logs and technical values may use an appropriate monospace face.

---

## 4. Geometry and spacing

- Use a consistent spacing scale rather than arbitrary values.
- Rounded corners are functional decisions, not decoration applied to every container.
- Not every section should become a card.
- Group content through spacing and hierarchy before adding containers.
- Borders should be subtle and purposeful.
- Shadows indicate elevation when elevation actually exists.
- Preserve useful negative space.
- Asymmetry is allowed when it improves composition and authorship.

---

## 5. Components

Components must be reusable without making every product look identical.

### Buttons
- Hierarchy must be obvious: primary, secondary, destructive, tertiary where needed.
- One screen should not contain several competing primary actions.
- Accent usage should reflect action hierarchy.

### Inputs
- Labels should remain visible when necessary for comprehension.
- Error, focus, disabled and success states must be explicit.
- Do not rely solely on color to communicate state.

### Cards
Use a card when the content represents a meaningful grouped object or elevated surface.

Do not wrap every heading, metric, paragraph or navigation option in a card.

### Navigation
Navigation should reflect the information architecture rather than imitate a generic SaaS layout.

### Feedback
Loading, success, warning, error and empty states are part of the design system, not implementation afterthoughts.

---

## 6. Motion

- Motion should communicate relationship, state or hierarchy.
- Prefer restrained transitions.
- Avoid animation solely to make the interface appear premium.
- Respect reduced-motion accessibility preferences.

---

## 7. Accessibility

Accessibility is a design constraint from the beginning.

At minimum:
- sufficient color contrast
- Dynamic Type / scalable text where applicable
- meaningful accessibility labels
- keyboard/focus support on web
- adequate touch targets
- reduced-motion support
- state communication beyond color alone
- light/dark validation

---

## 8. Hyliard visual heritage

Early Hyliard work established several useful characteristics worth evolving:

- dark charcoal and graphite foundations
- restrained surfaces
- white/gray typography
- generous empty space
- relatively restrained corner radii
- functional use of accent colors
- simple navigation
- personal authorship in the footer/branding
- limited decorative effects

These are historical references, not immutable implementation requirements.

The goal is to preserve their character while improving typography, layout, responsiveness, accessibility, interaction quality and consistency.

---

## 9. AI anti-patterns

Never introduce the following by default:

- blue as the automatic primary color
- purple/blue AI gradients
- gradient headings
- decorative glassmorphism
- excessive glow
- excessive blur
- excessive rounded rectangles
- `rounded-xl` everywhere
- "card soup"
- grids of three feature cards without a content reason
- generic centered SaaS hero sections
- unnecessary pills/badges
- decorative icon boxes without information value
- fake dashboards used only as decoration
- generic marketing copy such as "Transform your experience"
- arbitrary futuristic/neon aesthetics for technology products
- changing a product's established identity merely to make it look "modern"

These patterns are not universally forbidden. They require a concrete product/design reason.

---

## 10. Visual identity preservation

AI is an implementation and design-assistance tool, not the owner of the product's visual identity.

Do not replace established visual decisions merely because another pattern appears more modern.

When modernizing an existing Hyliard product:

**PRESERVE → REFINE → EXTEND**

Never default to:

**REPLACE → GENERICIZE → DECORATE**

If an established design decision appears outdated, explain the problem and propose an evolution before replacing it.

Never introduce a visual convention solely because it is common in AI-generated interfaces, SaaS templates, component libraries, or framework defaults.

---

## 11. Product-level design configuration

Each product should define, when needed:

```text
Product name
Purpose
Personality
Accent role
Light appearance tokens
Dark appearance tokens
Typography exceptions
Component exceptions
Motion characteristics
Brand assets
```

The product configuration extends this document; it does not silently override its principles.

---

## 12. Current direction

This is Hyliard Design System v0.1.

It intentionally defines principles before freezing a complete palette or component library. Future revisions should be based on actual Hyliard products and Gerard's established work rather than arbitrary trend selection.
