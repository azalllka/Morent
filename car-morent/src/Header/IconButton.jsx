import React from "react";

const IconButton = ({ src, alt }) => (
  <button className="icon-btn">
    <img src={src} alt={alt} className={alt === "User" ? "icon-img-avatar" : "icon-img"} />
  </button>
);

export default IconButton;