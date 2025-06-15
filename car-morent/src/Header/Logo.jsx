import React from "react";
import { useNavigate } from "react-router-dom";

const Logo = () => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate("/");
  };

  return (
    <div className="logo">
      <a onClick={handleClick} style={{ cursor: "pointer" }}>
        MORENT
      </a>
    </div>
  );
};

export default Logo;