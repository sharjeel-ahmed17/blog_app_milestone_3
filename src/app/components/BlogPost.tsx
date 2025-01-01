'use client'

import Image from 'next/image';
import { useBlogContext } from '../context/BlogContext';
import CommentForm from './CommentForm';
import CommentList from './CommentList';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

export default function BlogPost({ id }: { id: number }) {
  const { posts } = useBlogContext();
  const post = posts.find((p) => p.id === id);

  if (!post) {
    return <div>Post not found</div>;
  }

  return (
    <Card>
      <CardHeader>
        <Image
          src={post.imageUrl}
          alt={post.title}
          width={800}
          height={400}
          className="w-full h-64 object-cover rounded-t-lg"
        />
      </CardHeader>
      <CardContent className="p-6">
        <CardTitle className="text-3xl font-bold mb-4">{post.title}</CardTitle>
        <p className="mb-8">{post.content}</p>
        <CommentList postId={id} />
        <CommentForm postId={id} />
      </CardContent>
    </Card>
  );
}

