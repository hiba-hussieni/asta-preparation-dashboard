# Design — Asta’s Preparation Dashboard

Author: Hiba Hussieni
Design tool: Google Stitch

## 1. Design Goal

Make the training tasks, completion controls, and preparation progress
easy to understand on desktop and mobile.

## 2. Dashboard Sections

1. Product title and a short introduction to Asta's goal.
2. Compact Lucifero threat brief.
3. Preparation-plan completion count, percentage, and progress bar.
4. Exactly three training cards with descriptions, priorities,
   status text, and completion controls.

The interface explains that progress measures plan completion,
not the chance of winning, and resets after refresh.

## 3. Visual Direction

The initial desktop export uses:
- Background: dark charcoal (#0d0e11).
- Cards: charcoal (#121316).
- Primary text: near-white (#fbfbfb).
- Supporting text: light gray (#d1d4db).
- Primary action: crimson (#dc2626).
- Font: Geist with a sans-serif fallback.

The selected design continues the dark charcoal and crimson direction.
Exact implementation colors will be checked for readable contrast.

Use clear headings, consistent card padding, rounded corners,
subtle borders, and generous spacing between sections.

## 4. Responsive Layout

- Desktop: centered dashboard with a limited content width.
- Mobile: vertically stacked sections and training cards.
- Completion controls must remain easy to reach and read.
- The refinement requested full-width mobile buttons at least 44px high.
- The implementation will be checked at approximately 360px wide.

## 5. Deliberate Refinement

The first desktop design included an extra section titled
"UI State Specification Reference" with a disabled example button.

I requested its removal from desktop and mobile because it exposed
design documentation to the user and added a control with no real action.

Completed status and "Undo completion" belong to the existing task cards
when their state changes, rather than a separate demonstration section.

After generation, I checked that the reference section was removed
from both layouts and that the mobile content remained readable.

## 6. Evidence

- Initial desktop: evidence/stitch-before.png
- Refined desktop: evidence/stitch-after-desktop.png
- Refined mobile: evidence/stitch-after-mobile.png

## 7. Design Handoff

The original desktop HTML export was reviewed as manual design context.
MCP connection and the final design handoff will be documented separately
in MCP.md.

## 8. Implementation Checks Still Required

- Keyboard operation and visible focus.
- Text and control contrast.
- Mobile layout without horizontal scrolling.
- Accurate completion and undo behaviour.