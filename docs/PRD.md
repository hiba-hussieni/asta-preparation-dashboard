# PRD — Asta’s Preparation Dashboard

Author: Hiba Hussieni
Status: Reviewed — ready for design

## 1. Product Summary

A single-page dashboard that helps Asta follow three predefined
training tasks and track preparation-plan completion.

## 2. Primary User and Problem

Asta is preparing for Lucifero, a powerful opponent who uses gravity magic.
His training notes are scattered, making it difficult to know what to
practise next, what he has completed, and how much of his plan is finished.

## 3. First-Version Goal

Let Asta view his training plan, complete or undo tasks, and immediately
see accurate progress on one dashboard.

## 4. Exactly Three Core Features

1. View three predefined training tasks with descriptions and priorities.
2. Toggle each task between incomplete and completed.
3. See a calculated completed/total count and percentage.

## 5. User Stories

- As Asta, I want to see all training tasks so I know what to practise.
- As Asta, I want to complete or undo a task so the plan reflects my progress.
- As Asta, I want to see my completion percentage so I know how much
  of the plan remains.

## 6. Training Data

| Task | Description | Priority |
| --- | --- | --- |
| Sword control | Practise precise anti-magic sword movements. | High |
| Physical endurance | Complete a focused strength and stamina session. | Medium |
| Team coordination | Review a preparation plan with the Black Bulls. | High |

All tasks start incomplete and remain in the listed order.
These tasks are fictional teaching examples.

## 7. Expected Behaviour

- Each task has its own completion state.
- Activating its control switches only that task's state.
- Completion can be undone at any time.
- Incomplete tasks display status "Incomplete" and a "Mark complete" button.
- Completed tasks display status "Completed" and an "Undo completion" button.
- Each button's accessible name identifies its task.
- Completed count is derived from the current task states.
- Percentage = Math.round((completedCount / 3) * 100).
- All tasks have equal weight; priority does not affect progress.
- Progress measures plan completion, not the probability of winning.
- Refreshing the page resets all tasks to incomplete.
- Display: "Progress resets when you refresh the page."

## 8. Acceptance Criteria

- One dashboard at the root route displays a title, Asta's goal,
  and a brief explanation of Lucifero's threat.
- All three tasks display their exact descriptions and priorities.
- Initial state displays 0 / 3 and 0%.
- Completing one task displays 1 / 3 and 33%.
- Completing two tasks displays 2 / 3 and 67%.
- Completing all tasks displays 3 / 3 and 100%.
- Undoing one of three completed tasks displays 2 / 3 and 67%.
- Undoing every completed task returns progress to 0 / 3 and 0%.
- Repeated toggles always reflect current states without duplicate counting.
- Count remains between 0 and 3; percentage remains between 0% and 100%.
- A visible label identifies progress as preparation-plan completion.
- Each incomplete task shows "Incomplete" and a "Mark complete" button.
- Each completed task shows "Completed" and an "Undo completion" button.
- Each completion button has an accessible name that identifies its task.
- Every completion control works with a keyboard and has visible focus.
- Layout is readable at approximately 360px wide and on desktop,
  without horizontal page scrolling.
- Refreshing returns progress to zero, as explained on the page.
- Every interactive control performs a real, required action.

## 9. Design and Accessibility

- Use English for the interface.
- Include a title and short introduction, a compact threat brief,
  a progress summary, and three training cards.
- Use a readable, story-inspired palette with strong text contrast.
- Use a single-column mobile layout and clear desktop spacing.
- Give completion controls clear labels and comfortable tap targets.
- Communicate task status with text, not color alone.
- Use semantic headings and native buttons for completion controls.
- Label the progress indicator with its current value.
- Keep optional artwork from obscuring text or controls.

## 10. Stack

- Next.js with App Router
- TypeScript
- Tailwind CSS
- React state for task completion

## 11. Assumptions and Limitations

- This is an educational fictional scenario.
- No prior anime knowledge is needed to use the dashboard.
- Task data is predefined and stored in the application.
- Completion is held in memory and resets after refresh.
- Each task contributes equally to progress.
- No user research or product validation has been conducted.

## 12. Out of Scope

- Login and accounts
- Database and server-side persistence
- Saving progress after refresh
- Adding, editing, deleting, or reordering tasks
- Payments and chatbots
- Combat simulation and multiplayer
- Live anime data
- Extra application routes

## 13. Requirement Review

The draft required clear completion controls but did not specify their labels.

After review, the requirement was clarified:
- Use "Mark complete" for incomplete tasks.
- Use "Undo completion" for completed tasks.
- Display explicit status text.
- Include the task name in each button's accessible name.

This makes the action predictable and the requirement testable.
Hiba reviewed and accepted the visible button and status labels.