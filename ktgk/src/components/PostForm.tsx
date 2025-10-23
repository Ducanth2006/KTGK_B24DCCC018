// src/components/PostForm.tsx
import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { IPost, PostCategory } from "../data/types";

// Kiểu cho đối tượng lỗi validation
type FormErrors = {
  title?: string;
  author?: string;
  content?: string;
};

// Định nghĩa props
interface PostFormProps {
  // `posts` chỉ cần khi ở chế độ edit
  posts?: IPost[];
  // Hàm xử lý submit (là handleCreatePost hoặc handleUpdatePost từ App)
  onSubmit: (postData: IPost) => void;
}

// Giá trị ban đầu cho form
const initialFormData = {
  title: "",
  author: "",
  thumbnailUrl: "",
  content: "",
  category: "Công nghệ" as PostCategory,
};

// Style cơ bản cho form
const formStyle: React.CSSProperties = {
  display: "flex",
  flexDirection: "column",
  gap: "1rem",
  maxWidth: "700px",
  margin: "0 auto",
};
const inputStyle: React.CSSProperties = {
  padding: "0.75rem",
  fontSize: "1rem",
  border: "1px solid #ccc",
  borderRadius: "4px",
};
const errorStyle: React.CSSProperties = {
  color: "red",
  fontSize: "0.9rem",
  marginTop: "-0.75rem",
};

export function PostForm({ posts, onSubmit }: PostFormProps) {
  const { id } = useParams<{ id: string }>(); // [cite: 60]
  const navigate = useNavigate();

  // Xác định chế độ (true nếu URL có id)
  const isEditMode = Boolean(id); [cite: 59]

  // State cho dữ liệu form
  const [formData, setFormData] = useState(initialFormData);
  // State cho lỗi validation
  const [errors, setErrors] = useState<FormErrors>({});

  // Tự động điền dữ liệu nếu ở chế độ Edit [cite: 59]
  useEffect(() => {
    if (isEditMode && posts) {
      const postToEdit = posts.find((p) => p.id === id);
      if (postToEdit) {
        setFormData(postToEdit);
      }
    }
    // Reset form nếu chuyển từ Edit về Create (dù ít xảy ra)
    if (!isEditMode) {
      setFormData(initialFormData);
    }
  }, [id, isEditMode, posts]);

  // Hàm xử lý khi nhập liệu
  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
    // Xóa lỗi khi người dùng bắt đầu nhập
    if (errors[name as keyof FormErrors]) {
      setErrors((prev) => ({ ...prev, [name]: undefined }));
    }
  };

  // Hàm kiểm tra lỗi (validation)
  const validateForm = (): boolean => {
    const newErrors: FormErrors = {};

    // [cite: 43]
    if (formData.title.trim().length < 10) {
      newErrors.title = "Tiêu đề phải có ít nhất 10 ký tự";
    }
    // [cite: 44]
    if (formData.author.trim().length < 3) {
      newErrors.author = "Tác giả phải có ít nhất 3 ký tự";
    }
    // [cite: 45]
    if (formData.content.trim().length < 50) {
      newErrors.content = "Nội dung phải có ít nhất 50 ký tự";
    }

    setErrors(newErrors);
    // Trả về true nếu KHÔNG có lỗi (Object.keys(newErrors).length === 0)
    return Object.keys(newErrors).length === 0;
  };

  // Hàm xử lý khi submit form
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    // 1. Kiểm tra validation
    if (!validateForm()) {
      return; // Dừng lại nếu có lỗi
    }

    // 2. Nếu không có lỗi, xử lý submit
    if (isEditMode) {
      // Chế độ Edit: gọi onSubmit với formData (đã có id) [cite: 61]
      onSubmit(formData as IPost);
    } else {
      // Chế độ Create: tạo id, ngày đăng và gọi onSubmit [cite: 46]
      const newPost: IPost = {
        ...formData,
        id: new Date().getTime().toString(), // Tạo ID duy nhất đơn giản
        publishDate: new Date().toISOString(), // [cite: 49]
      };
      onSubmit(newPost);
    }
  };

  // Xử lý nút Hủy
  const handleCancel = () => {
    if (isEditMode) {
      navigate(`/posts/${id}`); // Quay lại trang chi tiết [cite: 62]
    } else {
      navigate("/"); // Quay lại trang chủ [cite: 47]
    }
  };

  return (
    <form onSubmit={handleSubmit} style={formStyle}>
      <h2>{isEditMode ? "Chỉnh sửa bài viết" : "Tạo bài viết mới"}</h2>

      {/* [cite: 37] */}
      <div>
        <label>Tiêu đề</label>
        <input
          type="text"
          name="title"
          value={formData.title}
          onChange={handleChange}
          style={inputStyle}
        />
        {errors.title && <p style={errorStyle}>{errors.title}</p>}
      </div>

      {/* [cite: 38] */}
      <div>
        <label>Tác giả</label>
        <input
          type="text"
          name="author"
          value={formData.author}
          onChange={handleChange}
          style={inputStyle}
        />
        {errors.author && <p style={errorStyle}>{errors.author}</p>}
      </div>

      {/* [cite: 39] */}
      <div>
        <label>URL Ảnh thumbnail</label>
        <input
          type="text"
          name="thumbnailUrl"
          value={formData.thumbnailUrl}
          onChange={handleChange}
          style={inputStyle}
        />
        {/* (Không yêu cầu validation cho ảnh) */}
      </div>

      {/* [cite: 41] */}
      <div>
        <label>Thể loại</label>
        <select
          name="category"
          value={formData.category}
          onChange={handleChange}
          style={inputStyle}
        >
          <option value="Công nghệ">Công nghệ</option>
          <option value="Du lịch">Du lịch</option>
          <option value="Ẩm thực">Ẩm thực</option>
          <option value="Đời sống">Đời sống</option>
          <option value="Khác">Khác</option>
        </select>
      </div>

      {/* [cite: 40] */}
      <div>
        <label>Nội dung</label>
        <textarea
          name="content"
          value={formData.content}
          onChange={handleChange}
          [cite_start]rows={10} // [cite: 40]
          style={inputStyle}
        />
        {errors.content && <p style={errorStyle}>{errors.content}</p>}
      </div>

      {/* Buttons */}
      <div style={{ display: "flex", gap: "1rem", justifyContent: "flex-end" }}>
        <button type="button" onClick={handleCancel}>
          Hủy
        </button>
        <button
          type="submit"
          style={{ backgroundColor: "green", color: "white" }}
        >
          {isEditMode ? "Cập nhật" : "Đăng bài"}
        </button>
      </div>
    </form>
  );
}