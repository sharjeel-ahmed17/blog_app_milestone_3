import { BlogProvider } from './context/BlogContext';
import BlogListing from './components/BlogListing';

export default function Home() {
  return (
    <BlogProvider>
      <main className="container mx-auto px-4 py-8">
        <h1 className="text-3xl font-bold mb-6">Blog Posts</h1>
        <BlogListing />
      </main>
    </BlogProvider>
  );
}

