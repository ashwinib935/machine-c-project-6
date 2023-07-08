import React from "react";
import { useRestorent } from "../../context/RestorentProvider";
import "./Home.css";
import Restorent from "../../component/Restorent/Restorent";
function Home() {
  const { state, dispatch, filteredRestorent } = useRestorent();
  const handleRestorent = (e) => {
    dispatch({ type: "CUSION_TYPE", payload: e.target.value });
  };
  console.log("state", state);
  return (
    <div>
      <h1>Food Ordering App</h1>
      <div className="btn-cusion-container">
        {state.cuisineData?.map((cusion) => (
          <button key={cusion.id} value={cusion.id} onClick={handleRestorent}>
            {cusion.name}
          </button>
        ))}
      </div>
      <div className="restorent-container">
        {filteredRestorent?.map((restorent) => (
          <Restorent restorent={restorent} key={restorent.id} />
        ))}
      </div>
    </div>
  );
}

export default Home;
