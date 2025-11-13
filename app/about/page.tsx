import Link from "next/link";

export default function About() {
  return (
    <div className="min-h-screen bg-gradient-to-br">
      <div className="container mx-auto px-4 py-16">
        {/* Navigation */}
        <nav className="mb-12 flex justify-center gap-6">
          <Link
            href="/"
            className="px-4 py-2"
          >
            Home
          </Link>
          <Link
            href="/about"
            className="px-4 py-2 rounded-lg"
          >
            About
          </Link>
        </nav>

        <div className="max-w-3xl mx-auto">
          <h1 className="text-5xl font-bold mb-8 text-zinc-900 dark:text-zinc-100">
            About Us
          </h1>
          <div className="bg-white dark:bg-zinc-800 rounded-lg shadow-lg p-8 border border-zinc-200 dark:border-zinc-700">
            <p className="text-lg text-zinc-700 dark:text-zinc-300 mb-4">
              Welcome to our static website! This is a fully static site built with Next.js.
            </p>
            <p className="text-lg text-zinc-700 dark:text-zinc-300 mb-4">
              All pages are pre-rendered at build time, making them fast and SEO-friendly.
            </p>
            <p className="text-lg text-zinc-700 dark:text-zinc-300">
              This page is a static route that was generated during the build process.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

