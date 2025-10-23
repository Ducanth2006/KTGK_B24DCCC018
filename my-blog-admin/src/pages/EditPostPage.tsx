// src/pages/EditPostPage.tsx
import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import PostForm from '../components/PostForm';
import { Post } from '../types/post';

interface EditPostPageProps {
  posts: Post[];
  updatePost: (id: number, updatedData: Omit<Post, 'id' | 'publishDate'>) => void;
}

const EditPostPage: React.FC<EditPostPageProps> = ({ posts, updatePost }) => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const postId = Number(id);

  const postToEdit = posts.find((p) => p.id === postId);

  const handleUpdatePost = (updatedData: Omit<Post, 'id' | 'publishDate'>, postIdToUpdate?: number) => {
    if (postIdToUpdate) { // Đảm bảo có postIdToUpdate (luôn có trong trường hợp edit)
        updatePost(postIdToUpdate, updatedData);
        alert('Cập nhật thành công!');
        navigate(`/posts/${postIdToUpdate}`); // Quay lại trang chi tiết sau khi cập nhật
    }
  };

  if (!postToEdit) {
     return (
       <div>
         <h2>Bài viết không tồn tại</h2>
         <button onClick={() => navigate('/')} className='button'>Quay về trang chủ</button>
       </div>
     )
  }

  return (
    <div>
      <PostForm
        onSubmit={handleUpdatePost}
        initialData={postToEdit}
        isEdit={true}
      />
    </div>
  );
};

export default EditPostPage;