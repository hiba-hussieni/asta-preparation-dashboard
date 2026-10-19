# POC — Training Progress

Author: Hiba Hussieni

## 1. Question

Can task completion and the progress summary stay consistent
when tasks are completed, undone, and toggled repeatedly?

## 2. Approach

Built a minimal experiment at the root page using:
- Three predefined training task labels.
- A labelled checkbox for each task.
- A completed/total count.
- A calculated completion percentage.
- Plain styling without the final dashboard design.

Files:
- app/TrainingPoc.tsx: interactive Client Component.
- app/page.tsx: page containing the experiment.

## 3. State and Calculation

Completion is stored as an array of three boolean values.
All values start as false.

A functional state update toggles only the selected task.
The completed count is derived by counting true values.

Percentage:
Math.round((completedCount / totalTasks) * 100)

The count and percentage are not stored separately.
Refreshing resets the in-memory state.

## 4. Actual Manual Results

Tests were performed by Hiba in the browser.

| Test | Observed result | Outcome |
| --- | --- | --- |
| Initial load | 0 / 3 and 0% | Passed |
| Complete one task | 1 / 3 and 33% | Passed |
| Complete a second task | 2 / 3 and 67% | Passed |
| Complete all tasks | 3 / 3 and 100% | Passed |
| Undo one completed task | 2 / 3 and 67% | Passed |
| Toggle the same task repeatedly | Count and percentage matched current completion states | Passed |
| Refresh the page | All tasks incomplete; 0 / 3 and 0% | Passed |

These results document manual testing, not an automated test run.

## 5. Observation

Two completed tasks display 67% because 2 / 3 × 100 is rounded
to the nearest whole number.

Deriving progress from task state keeps the summary consistent
when completion is reversed or toggled repeatedly.

## 6. Decision

Continue to the MVP and reuse the task-state approach.

The POC demonstrates the core interaction in this local experiment.
It does not establish product demand or verify the final design,
mobile layout, visual contrast, or complete accessibility.

## 7. Evidence

Pending: save a screenshot of the running POC before replacing it
with the final dashboard.