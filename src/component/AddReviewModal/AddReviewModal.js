import React, { useState } from "react";
import "./AddReviewModal.css";
import { useRestorent } from "../../context/RestorentProvider";
import { RxCross2 } from "react-icons/rx";

function AddReviewModal({ restorent, setShowModal }) {
  const { handleAddReview } = useRestorent();
  const [newReview, setNewReview] = useState({
    rating: "",
    comment: "",
    revName: "Ashwini",
    pp: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS5tbKdv1HDbAjPc526SK0yDZuoOmaaOyGNoj_e1q3ngruK2bTqzub3&s=0",
  });
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("newReview", newReview);
    handleAddReview(newReview, restorent.id);
    setShowModal(false);
  };
  return (
    <div className="addreview-modal">
      <form action="" className="addreview-details">
        <div>
          <button onClick={() => setShowModal(false)} className="btn-close">
            <RxCross2 />
          </button>
        </div>
        <h1>Add Your Review </h1>
        <label htmlFor="">
          Rating:
          <select
            onChange={(e) =>
              setNewReview({ ...newReview, rating: Number(e.target.value) })
            }
            className="input-data"
          >
            <option value="1" selected="selected">
              1
            </option>
            <option value="2">2</option>
            <option value="3">3</option>
            <option value="4">4</option>
            <option value="5">5</option>
          </select>
        </label>
        <label htmlFor="">
          Comment:
          <input
            type="text"
            onChange={(e) =>
              setNewReview({ ...newReview, comment: e.target.value })
            }
            className="inputvalue"
          />
        </label>
        <button onClick={handleSubmit} className="btn-submit">
          Submit
        </button>
      </form>
    </div>
  );
}

export default AddReviewModal;
