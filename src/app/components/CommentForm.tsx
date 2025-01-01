'use client'

import { useState } from 'react';
import { useBlogContext } from '../context/BlogContext';
import { Button } from "@/components/ui/button"
import { Textarea } from "@/components/ui/textarea"

export default function CommentForm({ postId }: { postId: number }) {
  const [comment, setComment] = useState('');
  const { addComment } = useBlogContext();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (comment.trim()) {
      addComment(postId, comment);
      setComment('');
    }
  };

  return (
    <form onSubmit={handleSubmit} className="mt-8">
      <h2 className="text-2xl font-semibold mb-4">Add a Comment</h2>
      <Textarea
        value={comment}
        onChange={(e) => setComment(e.target.value)}
        className="w-full p-2 border rounded-md"
        rows={4}
        placeholder="Write your comment here..."
      />
      <Button
        type="submit"
        className="mt-2"
      >
        Submit Comment
      </Button>
    </form>
  );
}

