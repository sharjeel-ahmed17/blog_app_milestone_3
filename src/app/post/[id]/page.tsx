import { BlogProvider } from '../../context/BlogContext';
import BlogPost from '../../components/BlogPost';

export default function PostPage({ params }: { params: { id: string } }) {
  return (
    <BlogProvider>
      <main className="container mx-auto px-4 py-8">
        <BlogPost id={parseInt(params.id)} />
      </main>
    </BlogProvider>
  );
}

