// FeaturedProducts.js
import React from 'react';
import { Link } from 'react-router-dom';
import products from "../data/Products";
import Header from "./../components/Header";

const ProductList = () => {
  
  return (
    <>
    <Header />
    <div className="containers">
      <div className="sections">
        <h4>All PRODUCTS</h4>
        <h5>Try these amazing products of Sorsogon State University Entrepreneur Students.</h5>
        <div className="rows">
          {products.map((product) => (
            <div className="featured-product" key={product._id}>
              <Link to={`/products/${product._id}`}>
                <img src={product.image} alt={product.name} />
              </Link>
              <p>
                <Link to={`/products/${product._id}`}>
                  {product.name}
                </Link>
              </p>
              <p>${product.price}</p>
              <div className="rating">
  <span className="star">★</span>
  <span className="star">★</span>
  <span className="star">★</span>
  <span className="star">★</span>
  <span className="star-empty">☆</span>
</div>
<p>{product.numReviews} sold</p>
            </div>
            
          ))}
           {/* <div className="action-buttonss">
           <Link to={'/'}> 
              </Link>
           </div> */}
        </div>
      </div>
    </div>
    </>
  );
};

export default ProductList;
