import React from "react";
import "./MenuCard.css";
import { useNavigate } from "react-router";
function MenuCard({ menu, restorent }) {
  const navigate = useNavigate();
  return (
    <div
      className="restorent-menu-card"
      onClick={() => navigate(`/restorentDetails/${restorent.id}`)}
    >
      <img src={menu.imgSrc} alt="" />
      <div className="restorent-menu-details">
        <div>
          <h3>{menu.name}</h3>
          <p>
            {menu.price} for {menu.qty}
          </p>
          <p>{restorent.name}</p>
        </div>
      </div>
    </div>
  );
}

export default MenuCard;
