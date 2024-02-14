import { useState } from "react";

const Seller = (props) => {
  const productAdded = (event) => {
    event.preventDefault();
    console.log("hello", productId, sellingPrice, productName);
    // const obj={productId,sellingPrice,productName}
    props.formSubmitted({ productId, sellingPrice, productName });
  };

  const [productId, setProductId] = useState("");
  const [sellingPrice, setSellingPrice] = useState("");
  const [productName, setProductName] = useState("");

  return (
    <>
      <form onSubmit={productAdded}>
        <div>
          <label>Product Id:</label>
        </div>
        <div>
          <input
            type="number"
            onChange={(value) => setProductId(value.target.value)}
          />
        </div>
        <div>
          <label>selling price:</label>
        </div>
        <div>
          <input
            type="number"
            onChange={(value) => setSellingPrice(value.target.value)}
          />
        </div>
        <div>
          <label>Product Name:</label>
        </div>
        <div>
          <input
            type="text"
            onChange={(value) => setProductName(value.target.value)}
          />
        </div>

        <button type="submit">Add Product</button>
      </form>
    </>
  );
};
export default Seller;
