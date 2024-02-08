import { useEffect, useState } from "react";
import Product from "./Product";

function ProductList() {
  const [product, setProduct] = useState([]);

  useEffect(() => {
    fetch('https://fakestoreapi.com/products')
      .then(response => response.json())
      .then(data => setProduct(data))
      .catch(error => console.error("Error fetching data:", error));
  }, []); 

  const ProductsData = product.map(product => (
    <Product key={product.id} product={product} />
  ));

  return (
    <div className="product-list">
      {ProductsData}
    </div>
  );
}

export default ProductList;
