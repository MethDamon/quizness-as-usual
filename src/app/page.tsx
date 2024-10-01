import Link from "next/link";

import { HydrateClient } from "~/trpc/server";

export default async function Home() {

  return (
    <HydrateClient>
      <main className="flex min-h-screen flex-col items-center justify-center bg-black text-white">
        <div className="container flex flex-col items-center justify-center gap-12 px-4 py-16">
          <h1>Quizness as Usual</h1>
        </div>
      </main>
    </HydrateClient>
  );
}
