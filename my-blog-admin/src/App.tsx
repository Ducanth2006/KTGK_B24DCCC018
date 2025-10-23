// src/App.tsx
import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import HomePage from './pages/HomePage';
import CreatePostPage from './pages/CreatePostPage';
import PostDetailPage from './pages/PostDetailPage';
import EditPostPage from './pages/EditPostPage';
import { initialPosts } from './data/initialPosts';
import { Post } from './types/post';
import './App.css'; // File CSS chung

const App: React.FC = () => {
  const [posts, setPosts] = useState<Post[]>(initialPosts);

  // Hàm thêm bài viết mới
  const addPost = (newPostData: Omit<Post, 'id'>) => {
    const newPost: Post = {
      ...newPostData,
      id: Date.now(), // Tạo ID đơn giản (có thể dùng thư viện uuid)
    };
    setPosts((prevPosts) => [newPost, ...prevPosts]); // Thêm vào đầu danh sách
  };

  // Hàm xóa bài viết
  const deletePost = (id: number) => {
    setPosts((prevPosts) => prevPosts.filter((post) => post.id !== id));
  };

  // Hàm cập nhật bài viết
  const updatePost = (id: number, updatedData: Omit<Post, 'id' | 'publishDate'>) => {
    setPosts((prevPosts) =>
      prevPosts.map((post) =>
        post.id === id ? { ...post, ...updatedData } : post
      )
    );
  };

  return (
    <Router>
      <Navbar />
      <div className="container"> {/* Thêm container để căn giữa nội dung */}
        <Routes>
          <Route path="/" element={<HomePage posts={posts} onDelete={deletePost} />} />
          <Route path="/create" element={<CreatePostPage addPost={addPost} />} />
          <Route path="/posts/:id" element={<PostDetailPage posts={posts} onDelete={deletePost} />} />
          <Route path="/posts/edit/:id" element={<EditPostPage posts={posts} updatePost={updatePost} />} />
          {/* Có thể thêm Route cho trang 404 */}
          <Route path="*" element={<h2>Trang không tìm thấy (404)</h2>} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
