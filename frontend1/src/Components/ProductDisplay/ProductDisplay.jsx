import React, { useContext } from "react";
import "./ProductDisplay.css";
import star_icon from "../Assets/Frontend_Assets/star_icon.png";
import star_dull_icon from "../Assets/Frontend_Assets/star_dull_icon.png";
import { ShopContext } from "../../Context/ShopContext";

const ProductDisplay = (props) => {
  const { product = {} } = props; // Ensure product has a default value to avoid undefined errors
  const { addToCart } = useContext(ShopContext);

  return (
    <div className="productdisplay">
      <div className="productdisplay-left">
        {/* <div className="productdisplay-img-list">
          <img src={product.image || "placeholder.jpg"} alt="Product" />
          <img src={product.image || "placeholder.jpg"} alt="Product" />
          <img src={product.image || "placeholder.jpg"} alt="Product" />
          <img src={product.image || "placeholder.jpg"} alt="Product" />
        </div> */}
        <div className="productdisplay-img">
          <img
            className="productdisplay-main-img"
            src={product.image || "placeholder.jpg"}
            alt="Product"
          />
        </div>
      </div>
      <div className="productdisplay-right">
        <h1>{product.name || "Product Name"}</h1>
        <div className="productdisplay-right-stars">
          <img src={star_icon} alt="Star" />
          <img src={star_icon} alt="Star" />
          <img src={star_icon} alt="Star" />
          <img src={star_icon} alt="Star" />
          <img src={star_dull_icon} alt="Star" />
          <p>(122)</p>
        </div>

        <div className="productdisplay-right-prices">
          <div className="productdisplay-right-price-old">
            ${product.old_price || "0.00"}
          </div>
          <div className="productdisplay-right-price-new">
            ${product.new_price || "0.00"}
          </div>
        </div>
        <div className="productdisplay-right-description">
          {product.description || "No description available for this product."}
        </div>
        {/* <div className="productdisplay-right-size">
          <h1>Select Size</h1>
          <div className="productdisplay-right-sizes">
            <div>S</div>
            <div>M</div>
            <div>L</div>
            <div>XL</div>
            <div>XXL</div>
          </div>
        </div> */}
        <button
          onClick={() => {
            if (product.id) {
              addToCart(product.id);
            } else {
              alert("Unable to add to cart. Product ID is missing.");
            }
          }}
        >
          ADD TO CART
        </button>
        <p className="productdisplay-right-category">
          <span>Category :</span> {product.category || "General"}
        </p>
        <p className="productdisplay-right-category">
          <span>Tags :</span> {product.tags || "None"}
        </p>
      </div>
    </div>
  );
};

export default ProductDisplay;