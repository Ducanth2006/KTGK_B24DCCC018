// src/components/PostForm.tsx
import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { Post } from '../types/post';
import './PostForm.css'; // Tạo file CSS

type PostFormData = Omit<Post, 'id' | 'publishDate'>; // Bỏ id và publishDate khi nhập form

interface PostFormProps {
  onSubmit: (postData: PostFormData, id?: number) => void; // Thêm id nếu là edit
  initialData?: Post; // Dữ liệu ban đầu cho form Edit
  isEdit?: boolean; // Cờ để biết là form edit hay create
}

const PostForm: React.FC<PostFormProps> = ({ onSubmit, initialData, isEdit = false }) => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState<PostFormData>({
    title: '',
    author: '',
    thumbnailUrl: '',
    content: '',
    category: 'Công nghệ', // Giá trị mặc định
  });
  const [errors, setErrors] = useState<Partial<Record<keyof PostFormData, string>>>({});

  // Nếu là form edit, điền dữ liệu ban đầu
  useEffect(() => {
    if (isEdit && initialData) {
      setFormData({
        title: initialData.title,
        author: initialData.author,
        thumbnailUrl: initialData.thumbnailUrl,
        content: initialData.content,
        category: initialData.category,
      });
    }
  }, [isEdit, initialData]);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    // Xóa lỗi khi người dùng bắt đầu nhập lại
    if (errors[name as keyof PostFormData]) {
      setErrors((prev) => ({ ...prev, [name]: undefined }));
    }
  };

  const validateForm = (): boolean => {
    const newErrors: Partial<Record<keyof PostFormData, string>> = {};
    if (!formData.title) {
      newErrors.title = 'Tiêu đề là bắt buộc.';
    } else if (formData.title.length < 10) {
      newErrors.title = 'Tiêu đề phải có ít nhất 10 ký tự.';
    }

    if (!formData.author) {
      newErrors.author = 'Tác giả là bắt buộc.';
    } else if (formData.author.length < 3) {
      newErrors.author = 'Tên tác giả phải có ít nhất 3 ký tự.';
    }

    if (!formData.content) {
      newErrors.content = 'Nội dung là bắt buộc.';
    } else if (formData.content.length < 50) {
      newErrors.content = 'Nội dung phải có ít nhất 50 ký tự.';
    }
     // Có thể thêm validation cho URL ảnh nếu muốn

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0; // Hợp lệ nếu không có lỗi
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (validateForm()) {
      onSubmit(formData, initialData?.id); // Truyền cả id nếu là edit
    }
  };

  const handleCancel = () => {
    // Nếu là edit, quay lại trang detail, nếu là create, quay lại home
    if (isEdit && initialData) {
       navigate(`/posts/${initialData.id}`);
    } else {
       navigate('/');
    }
  };

  return (
    <form onSubmit={handleSubmit} className="post-form">
      <h2>{isEdit ? 'Chỉnh sửa bài viết' : 'Tạo bài viết mới'}</h2>

      <div className="form-group">
        <label htmlFor="title">Tiêu đề:</label>
        <input
          type="text"
          id="title"
          name="title"
          value={formData.title}
          onChange={handleChange}
        />
        {errors.title && <span className="error-message">{errors.title}</span>}
      </div>

      <div className="form-group">
        <label htmlFor="author">Tác giả:</label>
        <input
          type="text"
          id="author"
          name="author"
          value={formData.author}
          onChange={handleChange}
        />
        {errors.author && <span className="error-message">{errors.author}</span>}
      </div>

       <div className="form-group">
        <label htmlFor="thumbnailUrl">URL ảnh thumbnail:</label>
        <input
          type="text"
          id="thumbnailUrl"
          name="thumbnailUrl"
          value={formData.thumbnailUrl}
          onChange={handleChange}
        />
         {/* Có thể thêm validation URL ở đây nếu muốn */}
      </div>

      <div className="form-group">
        <label htmlFor="category">Thể loại:</label>
        <select
          id="category"
          name="category"
          value={formData.category}
          onChange={handleChange}
        >
          <option value="Công nghệ">Công nghệ</option>
          <option value="Du lịch">Du lịch</option>
          <option value="Ẩm thực">Ẩm thực</option>
          <option value="Đời sống">Đời sống</option>
          <option value="Khác">Khác</option>
        </select>
      </div>

      <div className="form-group">
        <label htmlFor="content">Nội dung:</label>
        <textarea
          id="content"
          name="content"
          value={formData.content}
          onChange={handleChange}
          rows={10} // Ít nhất 10 dòng
        />
        {errors.content && <span className="error-message">{errors.content}</span>}
      </div>

      <div className="form-actions">
        <button type="submit" className="button button-submit">
          {isEdit ? 'Lưu thay đổi' : 'Đăng bài'}
        </button>
        <button type="button" onClick={handleCancel} className="button button-cancel">
          Hủy
        </button>
      </div>
    </form>
  );
};

export default PostForm;