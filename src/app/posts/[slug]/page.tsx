import { blogPosts } from "@/data/blogpost";
import { notFound } from "next/navigation";


const BLogDetailsPage = ({ params }: { params: { slug: string } }) => {
    const post = blogPosts.find((p) => p.slug === params.slug);

    if (!post) {
      notFound();
    }

  return <div>

    <h1>Blog Details Page</h1>
    <h2>{post.title}</h2>
  </div>;
};

export default BLogDetailsPage;
