// src/components/PostCard.tsx
import { Link } from "react-router-dom";
import { IPost } from "../data/types";

interface PostCardProps {
  post: IPost;
  onDelete: (id: string) => void;
}

// Style cho card
const cardStyle: React.CSSProperties = {
  border: "1px solid #ccc",
  borderRadius: "8px",
  padding: "1rem",
  boxShadow: "0 2px 4px rgba(0,0,0,0.1)",
};

const imgStyle: React.CSSProperties = {
  width: "100%",
  height: "150px",
  objectFit: "cover",
  borderRadius: "4px",
};

export function PostCard({ post, onDelete }: PostCardProps) {
  // [cite: 27] - Cắt mô tả ngắn (100 ký tự)
  const shortDescription =
    post.content.length > 100
      ? post.content.substring(0, 100) + "..."
      : post.content;

  const handleDelete = () => {
    onDelete(post.id);
  };

  return (
    <div style={cardStyle}>
      <img src={post.thumbnailUrl} alt={post.title} style={imgStyle} />
      {/* [cite: 27] */}
      <h3 style={{ marginTop: '0.5rem', marginBottom: '0.25rem' }}>{post.title}</h3>
      <p style={{ fontSize: '0.9rem', color: '#555' }}>
        Tác giả: {post.author} | {new Date(post.publishDate).toLocaleDateString()}
      </p>
      <p>{shortDescription}</p>

      {/* [cite: 29, 30] */}
      <div style={{ display: 'flex', justifyContent: 'space-between', marginTop: '1rem' }}>
        <Link to={`/posts/${post.id}`}>Đọc thêm</Link>
        <button onClick={handleDelete} style={{ color: 'red', background: 'none', border: 'none', cursor: 'pointer' }}>
          Xóa
        </button>
      </div>
    </div>
  );
}