import React from "react";
import "./Comment.css";
import { AiOutlineStar } from "react-icons/ai";
function Comment({ rating }) {
  return (
    <div className="rating-container">
      <div className="rating-details">
        <img src={rating.pp} alt="" className="user-img" />
        <div>
          <h3>{rating.revName}</h3>
          <p>{rating.comment}</p>
        </div>
      </div>
      <div className="rating-span">
        <span className="rating">
          {rating.rating}
          <AiOutlineStar />
        </span>
      </div>
    </div>
  );
}

export default Comment;
