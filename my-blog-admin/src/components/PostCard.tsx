// src/components/PostCard.tsx
import React from 'react';
import { Link } from 'react-router-dom';
import { Post } from '../types/post';
import './PostCard.css'; // Tạo file CSS

interface PostCardProps {
  post: Post;
  onDelete: (id: number) => void;
}

const PostCard: React.FC<PostCardProps> = ({ post, onDelete }) => {
  const handleDelete = () => {
    if (window.confirm(`Bạn có chắc muốn xóa bài viết "${post.title}"?`)) {
      onDelete(post.id);
    }
  };

  return (
    <div className="post-card">
      <img src={post.thumbnailUrl || 'https://via.placeholder.com/150'} alt={post.title} className="post-card-image" />
      <div className="post-card-content">
        <h3>{post.title}</h3>
        <p><strong>Tác giả:</strong> {post.author}</p>
        <p><strong>Thể loại:</strong> {post.category}</p>
        <p><strong>Ngày đăng:</strong> {new Date(post.publishDate).toLocaleDateString()}</p>
        <div className="post-card-actions">
          <Link to={`/posts/${post.id}`} className="button button-read">
            Đọc thêm
          </Link>
          <button onClick={handleDelete} className="button button-delete">
            Xóa
          </button>
           <Link to={`/posts/edit/${post.id}`} className="button button-edit">
             Chỉnh sửa {/* Nút này không có trong yêu cầu card nhưng tiện cho việc test */}
          </Link>
        </div>
      </div>
    </div>
  );
};

export default PostCard;