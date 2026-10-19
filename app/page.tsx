import TrainingDashboard from "./TrainingDashboard";

export default function Home() {
  return (
    <main className="mx-auto min-h-screen w-full max-w-4xl space-y-8 px-4 py-8 sm:px-6 sm:py-12 lg:py-16">
      <header className="border-b border-[#2b2e36] pb-8">
        <div className="mb-4 flex items-center gap-3">
          <span
            aria-hidden="true"
            className="flex h-8 w-8 shrink-0 items-center justify-center rounded-md border border-red-900 bg-red-950/60 text-red-400"
          >
            ✦
          </span>
          <p className="text-xs font-semibold uppercase tracking-widest text-[#9ca3af]">
            Preparation &amp; Readiness
          </p>
        </div>

        <h1 className="text-3xl font-bold leading-tight tracking-tight text-[#fbfbfb] sm:text-4xl">
          Asta’s Preparation Dashboard
        </h1>

        <p className="mt-3 text-base leading-relaxed text-[#d1d4db] sm:text-lg">
          Follow your training plan. Track every step of your preparation.
        </p>
      </header>

      <section
        aria-labelledby="threat-heading"
        className="rounded-xl border border-[#2b2e36] bg-[#121316] p-5 sm:p-6"
      >
        <div className="flex items-start gap-4">
          <span
            aria-hidden="true"
            className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg border border-red-900 bg-red-950/50 text-red-400"
          >
            <svg
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.8"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="h-5 w-5"
            >
              <path d="M10.3 3.9 2.6 17.2A2 2 0 0 0 4.3 20h15.4a2 2 0 0 0 1.7-2.8L13.7 3.9a2 2 0 0 0-3.4 0Z" />
              <path d="M12 9v4" />
              <path d="M12 16h.01" />
            </svg>
          </span>

          <div className="min-w-0">
            <h2
              id="threat-heading"
              className="text-lg font-semibold text-[#fbfbfb]"
            >
              The Challenge: Lucifero
            </h2>
            <p className="mt-2 text-sm leading-relaxed text-[#d1d4db] sm:text-base">
              Lucifero uses overwhelming gravity magic. Stay focused on
              your training and prepare with the Black Bulls.
            </p>
          </div>
        </div>
      </section>

      <TrainingDashboard />
    </main>
  );
}