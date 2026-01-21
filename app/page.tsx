import Link from "next/link";

export default function Home() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-zinc-100 font-sans dark:bg-zinc-950">
      <div className="w-full max-w-3xl rounded-2xl bg-white px-12 py-24 shadow-lg dark:bg-zinc-900 sm:px-16">
        <div className="mb-12 text-center">
          <h1 className="mb-4 text-4xl font-bold tracking-tight text-zinc-900 dark:text-zinc-100">
            Bienvenido
          </h1>
          <p className="text-zinc-600 dark:text-zinc-400">
            Ejemplo sencillo de navegación en Next.js
          </p>
        </div>

        <section className="flex flex-col gap-6">
          {/* CTA principal */}
          <Link
            href="/artwork"
            className="rounded-lg bg-indigo-600 px-6 py-4 text-center text-white font-semibold transition hover:bg-indigo-500 focus:outline-none focus:ring-2 focus:ring-indigo-400 dark:bg-indigo-500 dark:hover:bg-indigo-400"
          >
            Explorar Artworks
          </Link>

          {/* Enlace naive */}
          <a
            href="/about"
            className="rounded-lg border border-zinc-300 px-6 py-4 text-center text-zinc-800 transition hover:bg-zinc-100 dark:border-zinc-700 dark:text-zinc-200 dark:hover:bg-zinc-800"
          >
            About Us (versión naive)
          </a>

          {/* Enlace con Link */}
          <Link
            href="/about"
            className="rounded-lg bg-zinc-900 px-6 py-4 text-center text-white transition hover:bg-zinc-700 dark:bg-zinc-100 dark:text-zinc-900 dark:hover:bg-zinc-300"
          >
            About Us (con Link de Next.js)
          </Link>
        </section>
      </div>
    </div>
  );
}
