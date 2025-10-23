// src/types/post.ts
export interface Post {
  id: number; // Dùng number cho dễ xử lý trong state
  title: string;
  author: string;
  thumbnailUrl: string;
  content: string;
  category: 'Công nghệ' | 'Du lịch' | 'Ẩm thực' | 'Đời sống' | 'Khác';
  publishDate: string; // Lưu dạng ISO string hoặc Date object
}