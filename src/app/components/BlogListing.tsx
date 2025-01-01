'use client'

import Link from 'next/link';
import Image from 'next/image';
import { useBlogContext } from '../context/BlogContext';
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"

export default function BlogListing() {
  const { posts } = useBlogContext();

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {posts.map((post) => (
        <Card key={post.id} className="overflow-hidden">
          <CardHeader className="p-0">
            <Image
              src={post.imageUrl}
              alt={post.title}
              width={400}
              height={300}
              className="w-full h-48 object-cover"
            />
          </CardHeader>
          <CardContent className="p-4">
            <CardTitle className="text-xl font-semibold mb-2">{post.title}</CardTitle>
            <p className="text-gray-600 mb-4">{post.content.substring(0, 100)}...</p>
          </CardContent>
          <CardFooter>
            <Link href={`/post/${post.id}`} className="text-blue-500 hover:underline">
              Read more
            </Link>
          </CardFooter>
        </Card>
      ))}
    </div>
  );
}

