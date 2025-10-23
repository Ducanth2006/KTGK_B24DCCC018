// src/components/Navbar.tsx
import React from 'react';
import { NavLink, Link } from 'react-router-dom';
import './Navbar.css'; // Tạo file này để style

const Navbar: React.FC = () => {
  return (
    <nav className="navbar">
      <Link to="/" className="navbar-logo">
        QUẢN LÝ BÀI VIẾT ✍️
      </Link>
      <div className="navbar-links">
        <NavLink
          to="/"
          className={({ isActive }) => (isActive ? 'nav-link active' : 'nav-link')}
          end // Thêm end để chỉ active khi đúng là trang chủ
        >
          Trang chủ
        </NavLink>
        <NavLink
          to="/create"
          className={({ isActive }) => (isActive ? 'nav-link active' : 'nav-link')}
        >
          Viết bài mới
        </NavLink>
      </div>
    </nav>
  );
};

export default Navbar;