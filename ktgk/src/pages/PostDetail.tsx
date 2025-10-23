// src/pages/PostDetail.tsx
import { useParams, useNavigate, Link } from "react-router-dom";
import { IPost } from "../data/types";

// Style cơ bản
const detailContainerStyle: React.CSSProperties = {
  maxWidth: "900px",
  margin: "0 auto",
};

const detailImageStyle: React.CSSProperties = {
  width: "100%",
  maxHeight: "400px",
  objectFit: "cover",
  borderRadius: "8px",
};

const detailContentStyle: React.CSSProperties = {
  marginTop: "1.5rem",
  fontSize: "1.1rem",
  lineHeight: "1.7",
  // Giúp xuống dòng cho nội dung
  whiteSpace: "pre-wrap", 
};

const buttonGroupStyle: React.CSSProperties = {
  marginTop: "2rem",
  display: "flex",
  gap: "1rem",
};

// Định nghĩa props
interface PostDetailProps {
  posts: IPost[];
  onDelete: (id: string) => boolean; // Hàm xóa trả về boolean
}

export function PostDetail({ posts, onDelete }: PostDetailProps) {
  const { id } = useParams<{ id: string }>(); // 
  const navigate = useNavigate();

  // Tìm bài viết dựa trên ID
  const post = posts.find((p) => p.id === id);

  // Xử lý khi nhấn nút Xóa
  const handleDelete = () => {
    if (post) {
      // Gọi hàm onDelete từ App.tsx
      const deleted = onDelete(post.id); // [cite: 56]
      // Nếu xóa thành công (người dùng nhấn OK), quay về trang chủ
      if (deleted) {
        navigate("/");
      }
    }
  };

  // Nếu không tìm thấy bài viết
  if (!post) {
    return (
      <div>
        <h2>Không tìm thấy bài viết</h2>
        <Link to="/">Quay về trang chủ</Link>
      </div>
    );
  }

  // Nếu tìm thấy, hiển thị chi tiết
  return (
    <div style={detailContainerStyle}>
      {/* Thông tin bài viết [cite: 53] */}
      <h1>{post.title}</h1>
      <p style={{ color: "#555" }}>
        Tác giả: {post.author} | Thể loại: {post.category} | Đăng ngày:{" "}
        {new Date(post.publishDate).toLocaleDateString()}
      </p>

      <img
        src={post.thumbnailUrl}
        alt={post.title}
        style={detailImageStyle}
      />

      <div style={detailContentStyle}>{post.content}</div>

      {/* Các nút hành động */}
      <div style={buttonGroupStyle}>
        <button onClick={() => navigate("/")}>Quay lại</button> [cite: 54]
        
        {/* Link đến trang edit [cite: 55] */}
        <Link to={`/posts/edit/${post.id}`}>
          <button style={{ backgroundColor: "#007bff", color: "white" }}>
            Chỉnh sửa
          </button>
        </Link>

        <button
          onClick={handleDelete}
          style={{ backgroundColor: "#dc3545", color: "white" }}
        >
          Xóa bài viết
        </button>
      </div>
    </div>
  );
}