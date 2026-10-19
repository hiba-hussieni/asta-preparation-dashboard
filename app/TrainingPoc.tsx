"use client";

import { useState } from "react";

const taskNames = [
  "Sword control",
  "Physical endurance",
  "Team coordination",
];

export default function TrainingPoc() {
  const [completed, setCompleted] = useState<boolean[]>(
    () => taskNames.map(() => false)
  );

  const completedCount = completed.filter(Boolean).length;
  const totalTasks = taskNames.length;
  const percentage = Math.round(
    (completedCount / totalTasks) * 100
  );

  function toggleTask(index: number) {
    setCompleted((previous) =>
      previous.map((value, taskIndex) =>
        taskIndex === index ? !value : value
      )
    );
  }

  return (
    <section className="space-y-6">
      <div aria-live="polite" aria-atomic="true">
        <p className="text-xl font-semibold">
          {completedCount} / {totalTasks} tasks completed
        </p>
        <p>Preparation-plan completion: {percentage}%</p>
      </div>

      <ul className="space-y-3">
        {taskNames.map((name, index) => (
          <li key={name}>
            <label className="flex min-h-11 cursor-pointer items-center gap-3 rounded border p-3">
              <input
                type="checkbox"
                checked={completed[index]}
                onChange={() => toggleTask(index)}
                className="h-5 w-5 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-blue-500"
              />
              <span>{name}</span>
              <span className="ml-auto text-sm">
                {completed[index] ? "Completed" : "Incomplete"}
              </span>
            </label>
          </li>
        ))}
      </ul>

      <p className="text-sm">
        Progress resets when you refresh the page.
      </p>
    </section>
  );
}