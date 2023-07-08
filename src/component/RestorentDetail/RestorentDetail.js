import React, { useState } from "react";
import { useNavigate, useParams } from "react-router";
import "./RestorentDetail.css";
import { AiOutlineArrowLeft } from "react-icons/ai";
import { useRestorent } from "../../context/RestorentProvider";
import Comment from "../Comment/Comment";
import AddReviewModal from "../AddReviewModal/AddReviewModal";
function RestorentDetail() {
  const { restorentId } = useParams();
  const { state, dispatch } = useRestorent();
  console.log("restorentId", restorentId);
  const restorent = state.restaurantsData.find(
    (rest) => rest.id === Number(restorentId)
  );
  console.log("restorent", restorent);
  const navigate = useNavigate();
  const [showModal, setShowModal] = useState(false);

  const handleAddReview = () => {
    setShowModal(true);
  };

  return (
    <div className="restorentdetails-container">
      <div className="restorent">
        <div className="back-arrow">
          <AiOutlineArrowLeft
            className="bach-btn"
            onClick={() => navigate(-1)}
          />
        </div>
        <div className="restorent-details">
          <div className="details">
            <h1>{restorent.name}</h1>
            <p>
              {restorent.menu.map((item) => (
                <span>{item.name},</span>
              ))}
            </p>
            <p>{restorent.address}</p>
            <p>{restorent.averageRating}</p>
          </div>
          <div>
            <button className="btn-add" onClick={handleAddReview}>
              Add Review
            </button>
          </div>
        </div>
      </div>

      <div>
        <h2>Reviews</h2>
        {restorent?.ratings.map((rating) => (
          <Comment rating={rating} />
        ))}
      </div>

      {showModal ? (
        <AddReviewModal restorent={restorent} setShowModal={setShowModal} />
      ) : null}
    </div>
  );
}

export default RestorentDetail;
