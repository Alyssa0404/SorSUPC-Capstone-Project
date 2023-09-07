import React from "react";
import { Link } from "react-router-dom";
import Products from "../../data/Products";
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';


const ShopSection = ({ products }) => {
  const customBoxStyles = [
    {
      backgroundImage: 'url("1.png")', // Add the path to your image
      backgroundSize: 'cover',
      border: '',
      boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)',
      width: 540,
      height: 600,
      padding: '20px',
      margin: '20px',
      position: 'relative',
    },
    {
      backgroundImage: 'url("2.png")', // Add the path to your image
      backgroundSize: 'cover',
      border: '',
      boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)',
      width: 650,
      height: 290,
      padding: '20px',
      left: '250px',
      margin: '20px',
      position: 'absolute',
    },
    {
      backgroundImage: 'url("3.png")', // Add the path to your image
      backgroundSize: 'cover',
      border: '',
      boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)',
      width: 315,
      height: 290,
      padding: '20px',
      right: '50px',
      top: '340px',
      position: 'absolute',
    },
    {
      backgroundImage: 'url("5.png")', // Add the path to your image
      backgroundSize: 'cover',
      border: '',
      boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)',
      width: 315,
      height: 290,
      padding: '20px',
      right: '33px',
      top: '340px',
      position: 'absolute',
    },
    {
      backgroundImage: 'url("1.png")', // Add the path to your image
      backgroundSize: 'cover',
      border: '',
      boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)',
      width: 540,
      height: 600,
      padding: '20px',
      margin: '20px',
      position: 'relative',
    },
    {
      backgroundImage: 'url("2.png")', // Add the path to your image
      backgroundSize: 'cover',
      border: '',
      boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)',
      width: 650,
      height: 290,
      padding: '20px',
      left: '250px',
      margin: '20px',
      position: 'absolute',
    },
    {
      backgroundImage: 'url("3.png")', // Add the path to your image
      backgroundSize: 'cover',
      border: '',
      boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)',
      width: 315,
      height: 290,
      padding: '20px',
      right: '50px',
      top: '340px',
      position: 'absolute',
    },
    {
      backgroundImage: 'url("5.png")', // Add the path to your image
      backgroundSize: 'cover',
      border: '',
      boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)',
      width: 315,
      height: 290,
      padding: '20px',
      right: '33px',
      top: '340px',
      position: 'absolute',
    },
    
    
  ];

  const responsive = {
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 4,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
    },
  };

  return (
    <div className="container">
      <div className="section">
        <div className="row">
          <div className="col-lg-12 col-md-12 article">
            
            <Carousel 
              showDots={false}
              dotListClass="custom-dot-list-style"
              autoPlay={true}
  autoPlaySpeed={1000}
            responsive={responsive}>
              {Products.map((product, index) => (
                <div className="shop" key={product._id}>
                  <div className="border-product" style={customBoxStyles[index % customBoxStyles.length]}>
                    
              <div className="shoptext">
          
                <h2>
                  <Link to={`/products/${product._id}`} style={{ color: 'darkgoldenrod' }}>
                    {product.countInStock} items
                  </Link>
                </h2>
                <p>
                  <Link to={`/products/${product._id}`} style={{ color: 'black' }}>
                    {product.name}
                  </Link>
                </p>
                <h3>
                  <Link to={`/products/${product._id}`} style={{ color: 'gray' }}>
                    See more
                  </Link>
                </h3>
              </div>

                  </div>
                </div>
              ))}
            </Carousel>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ShopSection;
