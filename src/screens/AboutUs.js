import React from "react";
import { Link } from 'react-router-dom';
import Header from "../components/Header";

const AboutUs = () => {
    return (
      <>
        <Header />
        <div className="about-us-container">
          <div className="about-us-content">
            <h7>About Us</h7>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam
              condimentum metus sed tortor sollicitudin iaculis. In hac habitasse
              platea dictumst. Sed consequat leo in luctus. Vivamus id magna
              scelerisque, tincidunt libero sed, hendrerit nulla.
            </p>
            <p>
              Praesent euismod, ante nec scelerisque finibus, odio libero
              bibendum nunc, vel scelerisque velit dolor id arcu. Nullam vel elit
              a arcu laoreet varius. Curabitur nec eros vitae ligula iaculis
              pharetra.
            </p>
            <p>
              Fusce ullamcorper velit vel libero egestas, in consectetur neque
              tempus. Phasellus vel feugiat nulla. Sed auctor dui eget mauris
              dignissim, eu tincidunt elit efficitur.
            </p>
          </div>
        </div>
      </>
    );
  };
  
  export default AboutUs;