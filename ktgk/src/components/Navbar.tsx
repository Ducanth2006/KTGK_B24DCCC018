// src/components/Navbar.tsx
import { Link, NavLink } from "react-router-dom";

// Style cơ bản (bạn nên dùng file CSS riêng, nhưng đây là ví dụ nhanh)
const navStyle: React.CSSProperties = {
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
  padding: "1rem 2rem",
  backgroundColor: "#f8f8f8",
  borderBottom: "1px solid #ddd",
};

const logoStyle: React.CSSProperties = {
  fontSize: "1.5rem",
  fontWeight: "bold",
  textDecoration: "none",
  color: "#333",
};

const navLinkStyle: React.CSSProperties = {
  textDecoration: "none",
  color: "blue",
  margin: "0 1rem",
};

// Style cho link đang "active"
const activeStyle: React.CSSProperties = {
  fontWeight: "bold",
  textDecoration: "underline",
};

const buttonStyle: React.CSSProperties = {
  padding: "0.5rem 1rem",
  backgroundColor: "green",
  color: "white",
  textDecoration: "none",
  borderRadius: "5px",
};

export function Navbar() {
  return (
    <nav style={navStyle}>
      {/* [cite: 16] */}
      <Link to="/" style={logoStyle}>
        My Blog
      </Link>

      <div>
        {/* Dùng NavLink cho Trang chủ  */}
        <NavLink
  to="/"
  style={({ isActive } : { isActive: boolean }) => 
    isActive ? { ...navLinkStyle, ...activeStyle } : navLinkStyle
  }
>
  Trang chủ
</NavLink>
        
      </div>

      <Link to="/create" style={buttonStyle}>
        Viết bài mới
      </Link>
    </nav>
  );
}