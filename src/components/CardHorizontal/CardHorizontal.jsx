import { Grid, Paper, Typography } from "@mui/material";
import "./card.css";

export default function CardHorizontal({
  image,
  title,
  description,
  category,
  price,
  onClick,
}) {
  return (
    <div className="container">
      <div className="grid-3">
        <img className="product-image" src={image} alt={title} width="100%" />
      </div>
      <div className="grid-9">
        <div className="card-details">
          <h2 className="product-title">{title}</h2>
          <p className="product-desc">{description}</p>
          <p>
            Category: <span className="category">{category}</span>
          </p>
          <h3 className="price">Price: ${price}</h3>
        </div>
        <div className="btn-div">
          <button onClick={onClick} className="btn">
            Add to Cart
          </button>
        </div>
      </div>
    </div>
  );
}
