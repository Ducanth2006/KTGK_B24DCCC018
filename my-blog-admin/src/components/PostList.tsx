// src/components/PostList.tsx
import React from 'react';
import { Post } from '../types/post';
import PostCard from './PostCard';
import './PostList.css'; // Tạo file CSS

interface PostListProps {
  posts: Post[];
  onDelete: (id: number) => void;
}

const PostList: React.FC<PostListProps> = ({ posts, onDelete }) => {
  if (posts.length === 0) {
    return <p>Không có bài viết nào.</p>;
  }

  return (
    <div className="post-list">
      {posts.map((post) => (
        <PostCard key={post.id} post={post} onDelete={onDelete} />
      ))}
    </div>
  );
};

export default PostList;