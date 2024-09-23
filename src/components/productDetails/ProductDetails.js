import React, { useState, useEffect } from "react";
import "./productdetails.css";
import { useParams } from "react-router-dom";
import { getproductDetail } from "../../ApiServices/Api";
import { Link } from 'react-router-dom'


function ProductDetails() {
  const { id } = useParams();

  const [productdetail, setProductdetail] = useState({});

  useEffect(() => {
    const fetchdata = async () => {
      const data = await getproductDetail(id);
      setProductdetail(data);
    };
    fetchdata();
  }, [id]);

  const buynow=()=>{
    window.alert("The product is out of stock")
  }

  return (
    <div className="container">
      <img src={productdetail.image} alt="" className="product-image" />
      <div className="product-info">
        <h1 className="product-details-title">{productdetail.title}</h1>
        <p className="product-description">{productdetail.description}</p>
        <p className="product-details-price">{productdetail.price}</p>
        <button className="buynow" onClick={buynow}>Buy Now</button>
        
        <Link to='/'>
        <button className="gohome">Go Home</button>
        </Link>
      </div>
    </div>
  );
}

export default ProductDetails;
