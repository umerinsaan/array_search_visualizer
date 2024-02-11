import Link from "next/link";

export default function Home() {
  return (
    <main className="bg-gray-100 h-screen flex items-center justify-center">
      <section className="text-center">
        <header className="text-4xl font-bold mb-8">Visualizations Available</header>
        <nav className="space-y-4">
          <Link href="/linearsearch" className="text-blue-500 hover:underline block">
            Linear Search
          </Link>
          <Link href="/binarysearch" className="text-blue-500 hover:underline block">
            Binary Search
          </Link>
        </nav>
      </section>
    </main>
  );
}
