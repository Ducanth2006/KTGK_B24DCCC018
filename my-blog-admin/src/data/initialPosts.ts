// src/data/initialPosts.ts
import { Post } from '../types/post';

export const initialPosts: Post[] = [
  {
    id: 1,
    title: 'Khám phá React Hooks cho người mới bắt đầu',
    author: 'Admin User',
    thumbnailUrl: 'https://via.placeholder.com/150/0000FF/808080?text=React',
    content: 'React Hooks là một tính năng mới trong React 16.8. Chúng cho phép bạn sử dụng state và các tính năng React khác mà không cần viết class. Bài viết này sẽ giới thiệu cơ bản về useState và useEffect...',
    category: 'Công nghệ',
    publishDate: new Date('2025-10-20T10:00:00Z').toISOString(),
  },
  {
    id: 2,
    title: 'Top 5 địa điểm du lịch mùa thu ở Việt Nam không thể bỏ lỡ',
    author: 'Travel Blogger',
    thumbnailUrl: 'https://via.placeholder.com/150/FF0000/FFFFFF?text=Travel',
    content: 'Mùa thu Việt Nam đẹp dịu dàng với khí hậu mát mẻ, cảnh sắc lãng mạn. Hà Giang mùa lúa chín, Đà Lạt se lạnh, Sapa mờ sương...',
    category: 'Du lịch',
    publishDate: new Date('2025-10-15T14:30:00Z').toISOString(),
  },
  {
    id: 3,
    title: 'Công thức nấu phở bò Hà Nội chuẩn vị tại nhà',
    author: 'Chef Kitchen',
    thumbnailUrl: 'https://via.placeholder.com/150/008000/FFFFFF?text=Food',
    content: 'Phở bò là món ăn tinh túy của ẩm thực Việt. Để có bát phở ngon chuẩn vị, cần chú ý từ khâu chọn xương, ninh nước dùng, đến chuẩn bị thịt và bánh phở...',
    category: 'Ẩm thực',
    publishDate: new Date('2025-10-18T08:00:00Z').toISOString(),
  },
   {
    id: 4,
    title: 'Cách quản lý thời gian hiệu quả cho người bận rộn',
    author: 'Life Coach',
    thumbnailUrl: 'https://via.placeholder.com/150/FFA500/000000?text=Life',
    content: 'Quản lý thời gian là kỹ năng quan trọng. Áp dụng phương pháp Pomodoro, ma trận Eisenhower, và lập kế hoạch hàng ngày có thể giúp bạn...',
    category: 'Đời sống',
    publishDate: new Date('2025-10-12T09:15:00Z').toISOString(),
  },
  {
    id: 5,
    title: 'TypeScript và JavaScript: Nên chọn ngôn ngữ nào?',
    author: 'Developer Pro',
    thumbnailUrl: 'https://via.placeholder.com/150/800080/FFFFFF?text=Tech',
    content: 'TypeScript là superset của JavaScript, bổ sung kiểu tĩnh và nhiều tính năng khác. Bài viết so sánh ưu nhược điểm của cả hai...',
    category: 'Công nghệ',
    publishDate: new Date('2025-10-22T11:00:00Z').toISOString(),
  },
];