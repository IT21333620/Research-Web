import Link from 'next/link';

export default function Home() {
  return (
    <section id="home" className="min-h-screen flex items-center justify-center bg-gradient-to-r from-blue-500 to-indigo-600 text-white">
      <div className="text-center max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-5xl md:text-6xl font-extrabold tracking-tight">
          Empowering Your Future
        </h1>
        <p className="mt-6 text-xl md:text-2xl font-light">
          Discover innovative solutions and transformative ideas to elevate your projects and achieve your goals.
        </p>
        <div className="mt-10">
          <Link
            href="#project-scope"
            className="inline-block bg-white text-blue-600 font-semibold px-8 py-3 rounded-full hover:bg-blue-100 transition duration-300"
          >
            Explore Our Vision
          </Link>
        </div>
      </div>
    </section>
  );
}