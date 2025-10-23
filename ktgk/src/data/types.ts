// src/data/types.ts

// Định nghĩa kiểu cho Thể loại
export type PostCategory = "Công nghệ" | "Du lịch" | "Ẩm thực" | "Đời sống" | "Khác";

// Định nghĩa cấu trúc của một đối tượng Post
export interface IPost {
  id: string; // Dùng string để dễ xử lý (ví dụ: 'post-1', 'post-2')
  title: string; // [cite: 37]
  author: string; // [cite: 38]
  thumbnailUrl: string; // [cite: 39]
  content: string; // [cite: 40]
  category: PostCategory; // [cite: 41]
  publishDate: string; // [cite: 49] - Lưu dạng ISO string (VD: new Date().toISOString())
}