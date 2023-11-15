import { useNavigate } from "react-router";
import "./Directory-item.styles.scss";
import React from "react";

export const DirectoryItem = ({ category }) => {
  const navigate = useNavigate();
  const handleNavigate = () => navigate(route);

  const { id, imageUrl, title, route } = category;
  return (
    <div className="directory-item-container" key={id} onClick={handleNavigate}>
      <div
        className="background-image"
        style={{
          backgroundImage: `url(${imageUrl})`,
        }}
      />
      <div className="body">
        <h2>{title}</h2>
        <p>Shop Now</p>
      </div>
    </div>
  );
};
export default DirectoryItem;
