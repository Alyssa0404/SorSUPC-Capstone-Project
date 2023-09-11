import React from "react";
import { Link } from "react-router-dom";

const Header = () => {

  const isAdmin = true;

  return (
    <div>
      {/* Top Header */}
      <div className="Announcement ">
        <div className="container">
          <div className="row">
          <div class="col-md-6 d-flex align-items-center display-nonenumber">
            <p>+255 768 356 890</p>
            <p className = "center">Let's Support Student Entrepreneurs!</p>
        </div>

            <div className=" col-12 col-lg-6 justify-content-center justify-content-lg-end d-flex align-items-center">
              <Link to="">
                <i className="fab fa-facebook-f"></i>
              </Link>
              <Link to="">
                <i className="fab fa-instagram"></i>
              </Link>
              <Link to="">
                <i className="fab fa-linkedin-in"></i>
              </Link>
              <Link to="">
                <i className="fab fa-youtube"></i>
              </Link>
              <Link to="">
                <i className="fab fa-pinterest-p"></i>
              </Link>
            </div>
          </div>
        </div>
      </div>
      {/* Header */}
      <div className="header">
        <div className="container">
          {/* MOBILE HEADER */}
          <div className="mobile-header">
            <div className="container ">
              <div className="row ">
                <div className="col-6 d-flex align-items-center">
                  <Link className="navbar-brand" to="/">
                    <img alt="logo" src="/images/logo.png" />
                  </Link>
                </div>
                <div className="col-6 d-flex align-items-center justify-content-end Login-Register">
                  {/* <div className="btn-group">
                    <button
                      type="button"
                      className="name-button dropdown-toggle"
                      data-toggle="dropdown"
                      aria-haspopup="true"
                      aria-expanded="false"
                    >
                      <i class="fas fa-user"></i>
                    </button>
                    <div className="dropdown-menu">
                      <Link className="dropdown-item" to="/profile">
                        Profile
                      </Link>

                      <Link className="dropdown-item" to="#">
                        Logout
                      </Link>
                    </div>
                  </div> */}
                  <Link to="/cart" className="cart-mobile-icon">
                    <i className="fas fa-shopping-bag"></i>
                    <span className="badge">4</span>
                  </Link>
                </div>
                <div className="col-12 d-flex align-items-center">
                  <form className="input-group">
                    <input
                      type="search"
                      className="form-control rounded search"
                      placeholder="Search"
                    />
                    <button type="submit" className="search-button">
                      search
                    </button>
                  </form>
                </div>
              </div>
            </div>
          </div>

          {/* PC HEADER */}
       
  <nav className="nav-menu">
    <ul className="nav-list">
      <li><Link to="/">Home</Link></li>
      <li><Link to="/list">Products</Link></li>
      <li><Link to="/about">About</Link></li>
      <li><Link to="/notifications">Notifications</Link></li>
      <li><Link to="/messages">Messages</Link></li>
    </ul>
  </nav>
          <div className="pc-header">
            <div className="row">
              <div className="col-md-3 col-4 d-flex align-items-center">
                <Link className="navbar-brand" to="/">
                  <img alt="logo" src="/images/logo.png" />
                </Link>
              </div>
              <div className="col-md-6 col-8 d-flex align-items-center">
                <form className="input-group">
                  <input
                    type="search"
                    className="form-control rounded search"
                    placeholder="Search"
                  />
                  <button type="submit" className="search-button">
                  <div class="search-icon">
  <i class="fas fa-search"></i>
</div>

                  </button>
                </form>
              </div>
              <div className="cart-button">
              <Link to="/cart">
                  <i className="fas fa-shopping-cart"></i>
                  <span className="badge">1</span>
                </Link>
              </div>
              <div className="col-md-3 d-flex align-items-center justify-content-end Login-Register">
                  <div className ="right-position">
                <div className="btn-group">
                  <button
                    type="button"
                    className="name-button"
                    data-toggle="dropdown"
                    aria-haspopup="true"
                    aria-expanded="false"
                  
                  >
                    <i className="fas fa-user"></i>  Alyssa Balaoro
                  </button>
                  <div className="dropdown-menu">
                    <Link className="dropdown-item" to="/"> My Profile
                    </Link>

                    <Link className="dropdown-item" to="/">
                      Order History
                      
                    </Link>
                    <Link className="dropdown-item" to="/">
                      Settings
                    </Link>
                    <Link className="dropdown-item" to="/">
                      Log out
                      
                    </Link>
                  </div>
                </div>

                </div>
              </div>
                {/* <div className="col-md-3 d-flex align-items-center justify-content-end Login-Register">
                  <div className ="right-position">
                <div className="btn-group">
                  <button
                    type="button"
                    className="name-button dropdown-toggle"
                    data-toggle="dropdown"
                    aria-haspopup="true"
                    aria-expanded="false"
                  
                  >
                    Log in / Sign up
                  </button>
                  <div className="dropdown-menu">
                    <Link className="dropdown-item" to="/login">
                      Log in
                    </Link>

                    <Link className="dropdown-item" to="/register">
                      Sign up
                    </Link>
                  </div>
                </div>

                </div>
              </div> */}
    
              {/* <div className="col-md-3 d-flex align-items-center justify-content-end Login-Register">
                <div className="btn-group">
                  <button
                    type="button"
                    className="name-button dropdown-toggle"
                    data-toggle="dropdown"
                    aria-haspopup="true"
                    aria-expanded="false"
                  
                  >
                    Hi, Admin Doe
                  </button>
                  <div className="dropdown-menu">
                    <Link className="dropdown-item" to="/profile">
                      Profile
                    </Link>

                    <Link className="dropdown-item" to="#">
                      Logout
                    </Link>
                  </div>
                </div>

            
              </div> */}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
