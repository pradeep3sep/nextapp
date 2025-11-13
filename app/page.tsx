import Link from "next/link";

interface Post {
  id: number;
  title: string;
  body: string;
  userId: number;
}

async function getPosts(): Promise<Post[]> {
  try {
    const response = await fetch('https://jsonplaceholder.typicode.com/posts?_limit=3');

    if (!response.ok) {
      throw new Error('Failed to fetch posts');
    }

    return response.json();
  } catch (error) {
    console.error('Error fetching posts:', error);
    return [];
  }
}

export default async function Home() {
  // Fetch data at build time (static generation)
  const posts = await getPosts();

  return (
    <div className="min-h-screen">
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
            href="about"
            className="px-4 py-2 rounded-lg"
          >
            About
          </Link>
        </nav>

        <div className="max-w-3xl mx-auto">
          <h1 className="text-5xl font-bold mb-8 text-zinc-900 dark:text-zinc-100">
            Welcome page
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
