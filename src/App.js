import { useEffect, useState } from "react";
import "./App.css";
import Seller from "./Components/AdminPage";
import DisplayProducts from "./Components/DisplayProducts";

function App() {
  const [totalExpense, setTotalExpense] = useState(0);

  const [products, setProducts] = useState(
    JSON.parse(localStorage.getItem("productData")) || []
  );
  const setDataInLocalStorage = (data) => {
    const res = JSON.parse(localStorage.getItem("productData")) || [];
    res.push(data);
    localStorage.setItem("productData", JSON.stringify(res));
    setProducts(res);
    calculateTotalExpense();
  };
  const deleteProduct = (index) => {
    // console.log("checking index", index);
    const res = JSON.parse(localStorage.getItem("productData")) || [];
    res.splice(index, 1);
    // console.log("you have deleted", res);
    setProducts(res);
    localStorage.setItem("productData", JSON.stringify(res));
    calculateTotalExpense();
  };
  const calculateTotalExpense = () => {
    const res = JSON.parse(localStorage.getItem("productData")) || [];
    let addition = 0;
    for (let i = 0; i < res.length; i++) {
      addition += parseInt(res[i].sellingPrice);
    }
    setTotalExpense(addition);
  };
  useEffect(() => {
    calculateTotalExpense();
  }, []);

  return (
    <>
      <Seller formSubmitted={setDataInLocalStorage} />
      <h3>Total Expenses={totalExpense}</h3>
      <DisplayProducts products={products} deleteItem={deleteProduct} />
    </>
  );
}

export default App;
