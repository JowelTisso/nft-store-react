import React from "react";
import { IoHeartOutline, IoStar, IoStarOutline } from "react-icons/io5";
import "./ProductCard.css";
import { COLLECTIBLES } from "../../utils/Constant";

const ProductCard = ({
  data: {
    title,
    creator,
    price,
    categoryName,
    topBid,
    minBid,
    rank,
    img,
    ratings,
    ratingsCount,
  },
}) => {
  return (
    <div className="card">
      <div className="card-badge">
        <IoHeartOutline className="ic-normal " />
      </div>
      <img
        className="card-img"
        src={img}
        alt="card image"
        style={{
          objectFit: categoryName === COLLECTIBLES ? "cover" : "contain",
        }}
      />
      <div className="card-content">
        <p className="card-title">{title}</p>
        <p className="card-sub-title">{creator}</p>
        <p className="card-description">₹{price}</p>
        <div className="rating-container">
          {[...Array(5)].map((_, i) =>
            i + 1 <= ratings ? (
              <IoStar className="rating" key={i} />
            ) : (
              <IoStarOutline className="rating" key={i} />
            )
          )}
          <span className="txt-rating"> | ({ratingsCount})</span>
        </div>
      </div>
      <div className="card-btn-container">
        <button className="btn btn-primary">ADD TO CART</button>
      </div>
    </div>
  );
};

export default ProductCard;
