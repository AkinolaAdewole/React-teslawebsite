import React from "react";
import "../styles/home.css";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <>
      <div className="bg1">
       
        {/* navbar */}
        <nav className=" nav navbar navbar-expand-lg">

          <div className="teslalogo ms-5  mt-3 t1">
            <h1 class="tds-site-logo tds-align--start">
              <a aria-label="Tesla Logo" class="tds-site-logo-link" href="/">
                <svg
                  className="tds-icon tds-icon-logo-wordmark tds-site-logo-icon"
                  viewBox="0 0 342 35"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M0 .1a9.7 9.7 0 0 0 7 7h11l.5.1v27.6h6.8V7.3L26 7h11a9.8 9.8 0 0 0 7-7H0zm238.6 0h-6.8v34.8H263a9.7 9.7 0 0 0 6-6.8h-30.3V0zm-52.3 6.8c3.6-1 6.6-3.8 7.4-6.9l-38.1.1v20.6h31.1v7.2h-24.4a13.6 13.6 0 0 0-8.7 7h39.9v-21h-31.2v-7h24zm116.2 28h6.7v-14h24.6v14h6.7v-21h-38zM85.3 7h26a9.6 9.6 0 0 0 7.1-7H78.3a9.6 9.6 0 0 0 7 7zm0 13.8h26a9.6 9.6 0 0 0 7.1-7H78.3a9.6 9.6 0 0 0 7 7zm0 14.1h26a9.6 9.6 0 0 0 7.1-7H78.3a9.6 9.6 0 0 0 7 7zM308.5 7h26a9.6 9.6 0 0 0 7-7h-40a9.6 9.6 0 0 0 7 7z"
                    fill="currentColor"
                  ></path>
                </svg>
              </a>
            </h1>
          </div>

          <button
            className="navbar-toggler mb-4 me-2 button1"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNavDropdown"
            aria-controls="navbarNavDropdown"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            MENU
           
          </button>

          <div className="collapse navbar-collapse" id="navbarNavDropdown">
            <ul className="navbar-nav model">
              <li className="nav-item">
                <Link to='/ModelS' className="nav-link active" aria-current="page">Model S</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link active">Model 3</Link>
              </li>

              <li className="nav-item">  
                <Link className="nav-link active"> Model X</Link>
              </li>

              <li className="nav-item ">
                <Link className="nav-link active">Model Y</Link>
              </li>

              <li className="nav-item ms-4 ">
                <Link className="nav-link active">
                  Solar Roof
                </Link>
              </li>

              <li className="nav-item ms-3 ">
                <Link className="nav-link active">
                  Solar Panels
                </Link>
              </li>

              <li className="nav-item shop ">
                <Link className="nav-link active">
                  Shop
                </Link>
              </li>

              <li className="nav-item ms-3 ">
                <Link className="nav-link active">
                  Account
                </Link>
              </li>

              <li className="nav-item ms-2 ">
                <Link className="nav-link active">
                  Menu
                </Link>
              </li>

            </ul>
          </div>
        </nav>



        <h1 className="model3">Model 3</h1>
        <div> Order online for Touchless Delivery</div>

        <div className="p1">
          <div className="d-flex">
              <div>
                <span className="btn btn-dark btn1 text-light">Custom Order</span>
              </div>

                <div className="ps-4">
                  <span className="btn btn-light btn2 text-dark">Existing Inventory</span>
                </div>
          </div>
        </div>
      </div>

        {/* second background */}
      <div className="bg2">
        <h1 className="modelY">Model Y</h1>
        <div> Order online for Touchless Delivery</div>


        <div className="p1 ">
          <div className="d-flex">
                <div> <span className="btn btn-dark btn1 text-light"> Custom Order</span></div>
                <div className="ps-4"> 
                  <span className="btn btn-light btn2 text-dark">Existing Inventory</span>
                </div>
          </div>
        </div>
      </div>



        {/* Third Background */}
      <div className="bg3">
        <h1 className="modelS">Model S</h1>
        <div> Order online for Touchless Delivery</div>
      </div>
         
         {/* Fourth Background */}
      <div className="bg4">
        <h1 className="modelX">Model X</h1>
        <div> Order online for Touchless Delivery</div>
      </div>
      {/* Fifth Background */}
      <div className="bg5">
        <h1 className="solarPanels">Solar Panels</h1>
        <div> Lowest Cost Solar Panels in America</div>
      </div>

      {/* Sixth Background */}
      <div className="bg6">
        <h1 className="solarRoof">Solar Roof</h1>
        <div> Produce Clean Energy From Your Roof</div>
      </div>

      {/* Seventh Background */}
      <div className="bg7">
        <h1 className="accessories">Accessories</h1>
      </div>
    </>
  );
};

export default Home;
