import React from "react";
import RestorentMenu from "./RestorentMenu/RestorentMenu";
import "./Restorent.css";
function Restorent({ restorent }) {
  return (
    <div className="selected-restorent-container">
      <h2>Dishes by {restorent.name}</h2>
      <div className="restorent-menu-container">
        {restorent ? (
          <RestorentMenu
            menu={restorent.menu}
            restorent={restorent}
          ></RestorentMenu>
        ) : null}
      </div>
    </div>
  );
}

export default Restorent;
