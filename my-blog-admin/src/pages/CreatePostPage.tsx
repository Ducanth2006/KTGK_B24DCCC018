// src/pages/CreatePostPage.tsx
import React from 'react';
import { useNavigate } from 'react-router-dom';
import PostForm from '../components/PostForm';
import { Post } from '../types/post';

interface CreatePostPageProps {
  addPost: (post: Omit<Post, 'id'>) => void;
}

const CreatePostPage: React.FC<CreatePostPageProps> = ({ addPost }) => {
  const navigate = useNavigate();

  const handleCreatePost = (postData: Omit<Post, 'id' | 'publishDate'>) => {
    const newPost: Omit<Post, 'id'> = {
      ...postData,
      publishDate: new Date().toISOString(), // Thêm ngày đăng tự động
    };
    addPost(newPost);
    alert('Đăng bài thành công!');
    navigate('/'); // Chuyển về trang chủ
  };

  return (
    <div>
      <PostForm onSubmit={handleCreatePost} />
    </div>
  );
};

export default CreatePostPage;