import React, { useEffect, useState } from "react";
import "./Home.css";
import { getAllproducts } from "../../ApiServices/Api";
import { Link } from 'react-router-dom'


function Home() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const fetch = async () => {
      const data = await getAllproducts();
      setProducts(data);
    };
    fetch();
  }, []);

  return (
    <div className="product-grid">
      {products.map((product) => (
        <div className="product-card">
          <img src={product.image} alt="altimage" />

          <h2 className="product-title">{product.title}</h2>
          <p>
            <span className="price">{product.price}</span>
          </p>
        <Link to={`/product/${product.id}`}>
        <button className="product-btn">Product detail</button>
        </Link>
        </div>
      ))}
    </div>
  );
}

export default Home;
