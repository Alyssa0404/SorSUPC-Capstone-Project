// FeaturedProducts.js
import React from 'react';
import { Link } from 'react-router-dom';
import products from "../../data/Products";

const FeaturedProducts = () => {
  return (
    <div className="containers">
      <div className="sections">
        <h4>JUST FOR YOU!</h4>
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
           <div className="action-buttonss">
           <Link to={'/list'}>See more
              </Link>
           </div>
        </div>
      </div>
    </div>
  );
};

export default FeaturedProducts;
