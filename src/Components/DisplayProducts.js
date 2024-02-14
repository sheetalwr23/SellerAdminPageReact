const DisplayProducts = ({ products, deleteItem }) => {
  return (
    <>
      <table>
        <thead>
          <tr>
            {/* <td>#</td> */}
            <td>Product ID</td>
            <td>Selling Price</td>
            <td>Product Name</td>
            <td>Action</td>
          </tr>
        </thead>
        <tbody>
          {products.map((item, index) => {
            return (
              <tr key={index}>
                {/* <td>{index + 1}</td> */}
                <td>{item.productId}</td>
                <td>{item.sellingPrice}</td>
                <td>{item.productName}</td>
                <td>
                  <button onClick={() => deleteItem(index)}>Delete</button>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </>
  );
};
export default DisplayProducts;
