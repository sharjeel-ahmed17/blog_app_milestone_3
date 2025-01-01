'use client'

import React, { createContext, useState, useContext, ReactNode, useEffect } from 'react';

interface Post {
  id: number;
  title: string;
  content: string;
  imageUrl: string;
}

interface Comment {
  id: number;
  postId: number;
  text: string;
}

interface BlogContextType {
  posts: Post[];
  comments: Comment[];
  addComment: (postId: number, text: string) => void;
}

const BlogContext = createContext<BlogContextType | undefined>(undefined);

export const useBlogContext = () => {
  const context = useContext(BlogContext);
  if (!context) {
    throw new Error('useBlogContext must be used within a BlogProvider');
  }
  return context;
};

export const BlogProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [posts] = useState<Post[]>([
    { id: 1, title: 'First Blog Post', content: 'This is the content of the first blog post.', imageUrl: '/placeholder.svg?height=300&width=400' },
    { id: 2, title: 'Second Blog Post', content: 'This is the content of the second blog post.', imageUrl: '/placeholder.svg?height=300&width=400' },
  ]);

  const [comments, setComments] = useState<Comment[]>([]);

  useEffect(() => {
    const storedComments = localStorage.getItem('blogComments');
    if (storedComments) {
      setComments(JSON.parse(storedComments));
    }
  }, []);

  const addComment = (postId: number, text: string) => {
    const newComment: Comment = {
      id: Date.now(),
      postId,
      text,
    };
    const updatedComments = [...comments, newComment];
    setComments(updatedComments);
    localStorage.setItem('blogComments', JSON.stringify(updatedComments));
  };

  return (
    <BlogContext.Provider value={{ posts, comments, addComment }}>
      {children}
    </BlogContext.Provider>
  );
};

