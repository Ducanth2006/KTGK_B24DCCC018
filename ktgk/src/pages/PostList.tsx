// src/pages/PostList.tsx
import { useState } from "react";
import { Link } from "react-router-dom";
import { IPost } from "../data/types";
import { PostCard } from "../components/PostCard";

// Định nghĩa kiểu cho props
interface PostListProps {
  posts: IPost[];
  onDelete: (id: string) => void;
}

export function PostList({ posts, onDelete }: PostListProps) {
  // State để lưu giá trị của ô tìm kiếm
  const [filter, setFilter] = useState("");

  // Logic lọc bài viết [cite: 32]
  const filteredPosts = posts.filter((post) =>
    post.title.toLowerCase().includes(filter.toLowerCase())
  );

  return (
    <div>
      <div style={{ /*... style cho phần đầu trang ...*/ }}>
        <h2>Danh sách bài viết</h2>
        {/* [cite: 33] */}
        <p>Tìm thấy {filteredPosts.length} bài viết.</p>
        
        {/* [cite: 32] */}
        <input
          type="text"
          placeholder="Tìm theo tiêu đề..."
          value={filter}
          onChange={(e) => setFilter(e.target.value)}
          style={{ padding: "0.5rem", width: "300px" }}
        />
      </div>

      {/* [cite: 26] - Grid 3 cột */}
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(3, 1fr)",
          gap: "1.5rem",
          marginTop: "1.5rem",
        }}
      >
        {/* Render danh sách bài viết */}
        {filteredPosts.map((post) => (
          <PostCard key={post.id} post={post} onDelete={onDelete} />
        ))}
      </div>
    </div>
  );
}