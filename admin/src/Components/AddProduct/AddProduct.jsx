import React, { useState } from "react";
import "./AddProduct.css";
import uploadArea from "../../assets/upload_area.svg";

const AddProduct = () => {
  // State for image and product details
  const [image, setImage] = useState(null);
  const [productDetails, setProductDetails] = useState({
    name: "",
    description: "", // Added product description
    image: "",
    category: "Farming_Equipment",
    new_price: "",
    old_price: "",
  });

  // Handle image selection
  const handleImageChange = (event) => {
    setImage(event.target.files[0]);
  };

  // Handle input changes for product details
  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setProductDetails((prevDetails) => ({
      ...prevDetails,
      [name]: value,
    }));
  };

  // Function to upload image and add product
  const handleAddProduct = async () => {
    try {
      // Image Upload
      const formData = new FormData();
      formData.append("product", image);

      const imageUploadResponse = await fetch("http://localhost:4000/upload", {
        method: "POST",
        headers: {
          Accept: "application/json",
        },
        body: formData,
      });

      const imageData = await imageUploadResponse.json();

      if (imageData.success) {
        const updatedProductDetails = {
          ...productDetails,
          image: imageData.image_url,
        };

        // Add Product
        const productAddResponse = await fetch(
          "http://localhost:4000/addproduct",
          {
            method: "POST",
            headers: {
              Accept: "application/json",
              "Content-Type": "application/json",
            },
            body: JSON.stringify(updatedProductDetails),
          }
        );

        const productData = await productAddResponse.json();
        productData.success
          ? alert("Product Added Successfully!")
          : alert("Failed to Add Product");
      }
    } catch (error) {
      console.error("Error while adding product:", error);
      alert("An error occurred. Please try again.");
    }
  };

  return (
    <div className="add-product">
      {/* Product Title */}
      <div className="addproduct-itemfield">
        <p>Product Title</p>
        <input
          type="text"
          name="name"
          value={productDetails.name}
          onChange={handleInputChange}
          placeholder="Type here"
        />
      </div>

      {/* Product Description */}
      <div className="addproduct-itemfield">
        <p>Product Description</p>
        <textarea
          name="description"
          value={productDetails.description}
          onChange={handleInputChange}
          // placeholder="Describe the product"
          cols="187"
          rows="4"
        />
      </div>

      {/* Product Prices */}
      <div className="addproduct-price">
        <div className="addproduct-itemfield">
          <p>Price</p>
          <input
            type="text"
            name="old_price"
            value={productDetails.old_price}
            onChange={handleInputChange}
            placeholder="Type here"
          />
        </div>
        <div className="addproduct-itemfield">
          <p>Offer Price</p>
          <input
            type="text"
            name="new_price"
            value={productDetails.new_price}
            onChange={handleInputChange}
            placeholder="Type here"
          />
        </div>
      </div>

      {/* Product Category */}
      <div className="addproduct-itemfield">
        <p>Product Category</p>
        <select
          name="category"
          value={productDetails.category}
          onChange={handleInputChange}
          className="add-product-selector"
          style={{ width: "200px" }}
        >
          <option value="Farming_Equipment">Farming Equipment</option>
          <option value="Seeds">Seeds</option>
          <option value="Fertilizer">Fertilizer</option>
        </select>
      </div>

      {/* Image Upload */}
      <div className="addproduct-itemfield">
        <label htmlFor="file-input">
          <img
            src={image ? URL.createObjectURL(image) : uploadArea}
            className="addproduct-thumbnail-img"
            alt="Upload Preview"
          />
        </label>
        <input
          type="file"
          name="image"
          id="file-input"
          onChange={handleImageChange}
          hidden
        />
      </div>

      {/* Submit Button */}
      <button onClick={handleAddProduct} className="addproduct-btn">
        ADD
      </button>
    </div>
  );
};

export default AddProduct;