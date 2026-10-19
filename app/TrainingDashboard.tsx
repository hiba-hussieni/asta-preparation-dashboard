"use client";

import { useState } from "react";

const initialTasks = [
  {
    id: "sword",
    name: "Sword control",
    description: "Practise precise anti-magic sword movements.",
    priority: "High",
    completed: false,
  },
  {
    id: "endurance",
    name: "Physical endurance",
    description: "Complete a focused strength and stamina session.",
    priority: "Medium",
    completed: false,
  },
  {
    id: "team",
    name: "Team coordination",
    description: "Review a preparation plan with the Black Bulls.",
    priority: "High",
    completed: false,
  },
];

export default function TrainingDashboard() {
  const [tasks, setTasks] = useState(initialTasks);

  const completedCount = tasks.filter((task) => task.completed).length;
  const totalTasks = tasks.length;
  const percentage = Math.round((completedCount / totalTasks) * 100);

  function toggleTask(id: string) {
    setTasks((previous) =>
      previous.map((task) =>
        task.id === id
          ? { ...task, completed: !task.completed }
          : task
      )
    );
  }

  return (
    <div className="space-y-8">
      <section
        aria-labelledby="progress-heading"
        className="rounded-xl border border-[#2b2e36] bg-[#121316] p-5 sm:p-7"
      >
        <div className="flex flex-wrap items-center justify-between gap-4">
          <div>
            <h2
              id="progress-heading"
              className="text-sm font-semibold uppercase tracking-wider text-[#9ca3af]"
            >
              Preparation-plan completion
            </h2>

            <p
              className="mt-2 text-2xl font-bold text-[#fbfbfb] sm:text-3xl"
              role="status"
              aria-atomic="true"
            >
              {completedCount} / {totalTasks} tasks completed
              <span className="sr-only">, {percentage}%</span>
            </p>
          </div>

          <span
            aria-hidden="true"
            className="rounded-lg border border-[#383c46] bg-[#202228] px-4 py-2 text-xl font-bold"
          >
            {percentage}%
          </span>
        </div>

        <div
          role="progressbar"
          aria-labelledby="progress-heading"
          aria-valuemin={0}
          aria-valuemax={100}
          aria-valuenow={percentage}
          aria-valuetext={`${completedCount} of ${totalTasks} tasks completed, ${percentage}%`}
          className="mt-5 h-3 overflow-hidden rounded-full bg-[#2b2e36]"
        >
          <div
            className="h-full rounded-full bg-[#dc2626] transition-[width] duration-200"
            style={{ width: `${percentage}%` }}
          />
        </div>

        <div className="mt-5 space-y-2 border-t border-[#2b2e36] pt-4 text-sm leading-relaxed">
          <p className="text-[#d1d4db]">
            This measures training-plan completion, not your chance of
            winning.
          </p>
          <p className="text-[#9ca3af]">
            Progress resets when you refresh the page.
          </p>
        </div>
      </section>

      <section aria-labelledby="tasks-heading" className="space-y-4">
        <div className="flex flex-col gap-2 sm:flex-row sm:items-center sm:justify-between">
          <h2
            id="tasks-heading"
            className="text-xl font-bold text-[#fbfbfb]"
          >
            Required Tasks
          </h2>
          <p className="text-sm text-[#9ca3af]">
            All tasks carry equal completion weight
          </p>
        </div>

        <ul className="space-y-4">
          {tasks.map((task) => (
            <li key={task.id}>
              <article
                aria-labelledby={`${task.id}-heading`}
                className={`flex flex-col gap-5 rounded-xl border bg-[#121316] p-5 sm:p-6 md:flex-row md:items-center md:justify-between ${
                  task.completed
                    ? "border-emerald-800"
                    : "border-[#2b2e36]"
                }`}
              >
                <div className="min-w-0 space-y-3">
                  <div className="flex flex-wrap items-center gap-2">
                    <span
                      className={`rounded-md border px-2.5 py-1 text-xs font-semibold ${
                        task.priority === "High"
                          ? "border-red-900 bg-red-950/60 text-red-300"
                          : "border-[#383c46] bg-[#202228] text-[#d1d4db]"
                      }`}
                    >
                      Priority: {task.priority}
                    </span>

                    <span
                      className={`rounded-md border px-2.5 py-1 text-xs font-medium ${
                        task.completed
                          ? "border-emerald-800 bg-emerald-950/60 text-emerald-300"
                          : "border-[#383c46] bg-[#202228] text-[#d1d4db]"
                      }`}
                    >
                      Status: {task.completed ? "Completed" : "Incomplete"}
                    </span>
                  </div>

                  <h3
                    id={`${task.id}-heading`}
                    className="text-lg font-bold text-[#fbfbfb]"
                  >
                    {task.name}
                  </h3>

                  <p className="text-sm leading-relaxed text-[#d1d4db] sm:text-base">
                    {task.description}
                  </p>
                </div>

                <button
                  type="button"
                  onClick={() => toggleTask(task.id)}
                  aria-label={
                    task.completed
                      ? `Undo completion for ${task.name}`
                      : `Mark complete: ${task.name}`
                  }
                  className={`min-h-11 w-full shrink-0 rounded-lg border px-5 py-3 text-sm font-semibold transition-colors focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-white md:w-auto ${
                    task.completed
                      ? "border-[#383c46] bg-[#202228] text-white hover:bg-[#2b2e36]"
                      : "border-red-600 bg-red-600 text-white hover:border-red-700 hover:bg-red-700"
                  }`}
                >
                  {task.completed ? "Undo completion" : "Mark complete"}
                </button>
              </article>
            </li>
          ))}
        </ul>
      </section>
    </div>
  );
}