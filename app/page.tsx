import TrainingPoc from "./TrainingPoc";

export default function Home() {
  return (
    <main className="mx-auto min-h-screen max-w-2xl px-4 py-10">
      <h1 className="mb-3 text-3xl font-bold">
        Training Progress — POC
      </h1>

      <p className="mb-8">
        Test completing and undoing the three training tasks.
      </p>

      <TrainingPoc />
    </main>
  );
}