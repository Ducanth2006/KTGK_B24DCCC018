// src/pages/PostDetailPage.tsx
import React from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import { Post } from '../types/post';
import './PostDetailPage.css'; // Tạo file CSS

interface PostDetailPageProps {
  posts: Post[];
  onDelete: (id: number) => void;
}

const PostDetailPage: React.FC<PostDetailPageProps> = ({ posts, onDelete }) => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const postId = Number(id); // Chuyển id từ string sang number

  const post = posts.find((p) => p.id === postId);

  if (!post) {
    return (
      <div className="post-detail-page">
        <h2>Bài viết không tồn tại</h2>
        <Link to="/" className="button">Quay lại trang chủ</Link>
      </div>
    );
  }

   const handleDelete = () => {
    if (window.confirm(`Bạn có chắc muốn xóa bài viết "${post.title}"?`)) {
      onDelete(post.id);
      alert('Xóa bài viết thành công!');
      navigate('/'); // Quay về trang chủ sau khi xóa
    }
  };


  return (
    <div className="post-detail-page">
      <img src={post.thumbnailUrl || 'https://via.placeholder.com/600x200'} alt={post.title} className="post-detail-image" />
      <h1>{post.title}</h1>
      <p className="post-meta">
        <strong>Tác giả:</strong> {post.author} | <strong>Thể loại:</strong> {post.category} | <strong>Ngày đăng:</strong> {new Date(post.publishDate).toLocaleDateString()}
      </p>
      <div className="post-content">
        {/* Sử dụng dangerouslySetInnerHTML nếu content là HTML, hoặc render bình thường */}
        {/* Cẩn thận XSS nếu content là HTML từ người dùng nhập */}
         <p style={{ whiteSpace: 'pre-wrap' }}>{post.content}</p> {/* Hiển thị xuống dòng */}
      </div>

      <div className="post-actions">
        <Link to="/" className="button button-back">
          Quay lại
        </Link>
        <Link to={`/posts/edit/${post.id}`} className="button button-edit">
          Chỉnh sửa
        </Link>
         <button onClick={handleDelete} className="button button-delete">
           Xóa bài viết
        </button>
      </div>
    </div>
  );
};

export default PostDetailPage;