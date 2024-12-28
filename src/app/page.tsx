import { blogPosts } from '@/data/blogpost'
import Link from 'next/link'
import React from 'react'

const Home = () => {
  return (
    <div>
    <h1>blog listing page</h1>
    <p>Welcome to our blog listing page!</p>
    {/* Add blog posts here */}
    {
      blogPosts.map((post) => (
        <div key={post.id}>
          <h2>{post.title}</h2>
          <p>{post.excerpt}</p>
          <p>Author: {post.author}</p>
          <p>Date: {post.date}</p>
          <Link href={`/posts/${post.slug}`}> read more
        </Link>
        </div>
      ))
    }
      
      
    </div>
  )
}

export default Home