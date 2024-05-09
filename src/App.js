import { useEffect, useState } from "react";
import { getProducts } from "./api";
import "./App.css";

function App() {
  const [products, setProducts] = useState([]);

  const _getProducts = async () => {
    const data = await getProducts();

    const formatData = data.map((item) => {
      const dataArray = Object.entries(item.data || {});

      const details = dataArray?.map((dataArray, index) => (
        <p key={data[index].id}>{`${
          dataArray[0].charAt(0).toUpperCase() + dataArray[0].slice(1)
        }: ${dataArray[1]}`}</p>
      ));

      return {
        ...item,
        details: details,
      };
    });
    setProducts(formatData);
  };

  useEffect(() => {
    _getProducts();
  }, []);

  return (
    <div className="App">
      <h1>Mobile devices</h1>
      <table id="shopping-cart-tbl" border="1" cellPadding="16px">
        <thead>
          <tr>
            <th>ID</th>
            <th>Item</th>
            <th>Details</th>
          </tr>
        </thead>
        <tbody>
          {products.map((product) => (
            <tr key={product.id}>
              <td>{product.id}</td>
              <td>{product.name}</td>
              <td>{product.details.length ? product.details : "-"}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default App;
