import React from "react";
import "./RestorentMenu.css";
import MenuCard from "../../MenuCard/MenuCard";
import "./RestorentMenu.css";
function RestorentMenu({ menu, restorent }) {
  console.log("menu", menu);
  return (
    <div className="menu-container">
      {menu?.map((item, index) => (
        <MenuCard menu={item} key={index} restorent={restorent} />
      ))}
    </div>
  );
}

export default RestorentMenu;
