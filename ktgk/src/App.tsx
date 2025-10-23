// src/App.tsx
import { useState } from "react";
import { Routes, Route, useNavigate } from "react-router-dom";
import { IPost } from "./data/types";
import { MOCK_POSTS } from "./data/mockData";
import { Navbar } from "./components/Navbar";
import { PostList } from "./pages/PostList";
import { PostDetail } from "./pages/PostDetail";
import { PostForm } from "./components/PostForm";

// Style cho phần nội dung chính
const mainContentStyle: React.CSSProperties = {
  padding: "2rem",
  maxWidth: "1200px",
  margin: "0 auto",
};

function App() {
  const [posts, setPosts] = useState<IPost[]>(MOCK_POSTS);
  
  // useNavigate phải được gọi ở component cấp cao (App)
  // để truyền xuống cho các hàm xử lý
  const navigate = useNavigate();

  // ----- CÁC HÀM XỬ LÝ LOGIC -----

  /**
   * Xử lý xóa bài viết.
   * Hiển thị confirm và trả về true/false để component con biết
   */
  const handleDeletePost = (id: string): boolean => {
    if (window.confirm("Bạn có chắc muốn xóa bài viết này?")) {
      setPosts(posts.filter((post) => post.id !== id));
      return true; // Xóa thành công
    }
    return false; // Người dùng đã hủy
  };

  /**
   * Xử lý tạo bài viết mới.
   */
  const handleCreatePost = (newPost: IPost) => {
    setPosts([newPost, ...posts]); // Thêm bài mới lên đầu danh sách
    alert("Đăng bài thành công!");
    navigate("/"); // Chuyển về trang chủ
  };

  /**
   * Xử lý cập nhật bài viết.
   */
  const handleUpdatePost = (updatedPost: IPost) => {
    setPosts(
      posts.map((post) => (post.id === updatedPost.id ? updatedPost : post))
    );
    alert("Cập nhật thành công!");
    navigate(`/posts/${updatedPost.id}`); // Chuyển về trang chi tiết
  };

  return (
    <div>
      {/* Navbar hiển thị trên tất cả các trang */}
      <Navbar />

      <main style={mainContentStyle}>
        <Routes>
          {/* Trang chủ */}
          <Route
            path="/"
            element={<PostList posts={posts} onDelete={handleDeletePost} />}
          />
          {/* (Yêu cầu có route /posts) */}
          <Route
            path="/posts" 
            element={<PostList posts={posts} onDelete={handleDeletePost} />}
          />

          {/* Trang tạo bài */}
          <Route
            path="/create"
            element={<PostForm onSubmit={handleCreatePost} />}
          />

          {/* Trang chi tiết */}
          <Route
            path="/posts/:id"
            element={<PostDetail posts={posts} onDelete={handleDeletePost} />}
          />

          {/* Trang sửa */}
          <Route
            path="/posts/edit/:id"
            element={
              <PostForm posts={posts} onSubmit={handleUpdatePost} />
            }
          />
        </Routes>
      </main>
    </div>
  );
}

export default App;
