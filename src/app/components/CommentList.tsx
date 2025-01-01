'use client'

import { useBlogContext } from '../context/BlogContext';

export default function CommentList({ postId }: { postId: number }) {
  const { comments } = useBlogContext();
  const postComments = comments.filter((comment) => comment.postId === postId);

  return (
    <div className="mt-8">
      <h2 className="text-2xl font-semibold mb-4">Comments</h2>
      {postComments.length === 0 ? (
        <p>No comments yet.</p>
      ) : (
        <ul className="space-y-4">
          {postComments.map((comment) => (
            <li key={comment.id} className="border-b pb-2">
              {comment.text}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

