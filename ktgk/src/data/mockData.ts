// src/data/mockData.ts
import { IPost } from "./types";

// Bạn có thể dùng nanoid để tạo ID ngẫu nhiên, nhưng ở đây ta dùng ID tĩnh cho dễ
export const MOCK_POSTS: IPost[] = [
  {
    id: "1",
    title: "Khám phá React 19: Những tính năng mới đáng mong đợi",
    author: "Thầy A",
    thumbnailUrl: "https://via.placeholder.com/300x200?text=React+19",
    content: "Đây là nội dung đầy đủ của bài viết về React 19. React 19 hứa hẹn mang đến nhiều cải tiến về hiệu năng và 'use' hook mới. Đoạn mô tả ngắn (100 ký tự đầu) sẽ được cắt từ đây. Nội dung này phải đủ dài, ít nhất 50 ký tự để qua validation.",
    category: "Công nghệ",
    publishDate: "2025-10-20T10:00:00Z",
  },
  {
    id: "2",
    title: "Hướng dẫn du lịch Đà Nẵng 3 ngày 2 đêm tự túc",
    author: "Cô B",
    thumbnailUrl: "https://via.placeholder.com/300x200?text=Da+Nang",
    content: "Du lịch Đà Nẵng luôn là lựa chọn hàng đầu. Bài viết này sẽ hướng dẫn chi tiết lịch trình, địa điểm ăn uống và vui chơi. Đảm bảo nội dung này cũng dài hơn 50 ký tự nhé.",
    category: "Du lịch",
    publishDate: "2025-10-21T11:30:00Z",
  },
  {
    id: "3",
    title: "Cách làm món Phở bò gia truyền chuẩn vị Hà Nội",
    author: "Bác C",
    thumbnailUrl: "https://via.placeholder.com/300x200?text=Pho+Bo",
    content: "Phở bò là tinh hoa ẩm thực Việt Nam. Để nấu được bát phở ngon, nước dùng là quan trọng nhất. Hãy cùng tìm hiểu bí quyết... Nội dung này cũng phải đủ 50 ký tự.",
    category: "Ẩm thực",
    publishDate: "2025-10-22T09:15:00Z",
  },
  // ... Thêm 2-3 bài viết nữa ở đây ...
  {
    id: "4",
    title: "Kỹ năng quản lý thời gian hiệu quả cho sinh viên",
    author: "Chị D",
    thumbnailUrl: "https://via.placeholder.com/300x200?text=Time",
    content: "Sinh viên thường gặp khó khăn trong việc cân bằng học tập và cuộc sống. Áp dụng phương pháp Pomodoro có thể giúp bạn... Nội dung này cũng phải đủ 50 ký tự.",
    category: "Đời sống",
    publishDate: "2025-10-22T14:00:00Z",
  },
  {
    id: "5",
    title: "TypeScript là gì? Tại sao nên dùng TypeScript?",
    author: "Thầy A",
    thumbnailUrl: "https://via.placeholder.com/300x200?text=TypeScript",
    content: "TypeScript là một 'superset' của JavaScript, bổ sung thêm hệ thống kiểu tĩnh. Điều này giúp phát hiện lỗi sớm và code dễ bảo trì hơn... Nội dung này cũng phải đủ 50 ký tự.",
    category: "Công nghệ",
    publishDate: "2025-10-23T08:00:00Z",
  },
];