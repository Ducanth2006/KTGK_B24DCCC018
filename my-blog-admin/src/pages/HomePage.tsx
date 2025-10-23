// src/pages/HomePage.tsx
import React, { useState, useMemo } from 'react';
import { Link } from 'react-router-dom';
import { Post } from '../types/post';
import PostList from '../components/PostList';
import './HomePage.css'; // Tạo file CSS

interface HomePageProps {
  posts: Post[];
  onDelete: (id: number) => void;
}

const HomePage: React.FC<HomePageProps> = ({ posts, onDelete }) => {
  const [filter, setFilter] = useState('');

  const handleFilterChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFilter(e.target.value);
  };

  // Lọc bài viết dựa trên tiêu đề
  const filteredPosts = useMemo(() => {
    if (!filter) {
      return posts;
    }
    return posts.filter(post =>
      post.title.toLowerCase().includes(filter.toLowerCase())
    );
  }, [posts, filter]);

  return (
    <div className="home-page">
      <div className="home-header">
         <h1>Danh sách bài viết ({filteredPosts.length})</h1>
         <div className="controls">
            <input
              type="text"
              placeholder="Lọc theo tiêu đề..."
              value={filter}
              onChange={handleFilterChange}
              className="filter-input"
            />
            <Link to="/create" className="button button-create">
              Viết bài mới +
            </Link>
         </div>
      </div>

      <PostList posts={filteredPosts} onDelete={onDelete} />
    </div>
  );
};

export default HomePage;