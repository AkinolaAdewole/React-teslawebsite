import React from 'react'
import { Link } from 'react-router-dom'
import "../styles/models.css"
const ModelS = () => {
  return (
    <>
    <div className='bg1'>
    <nav className=" nav navbar navbar-expand-lg">
          <div className="teslalogo ms-5 ">
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
            className="navbar-toggler mb-4 me-2"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNavDropdown"
            aria-controls="navbarNavDropdown"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            MENU
            {/* <span className="navbar-toggler-icon"></span>  */}
          </button>

          <div className="collapse navbar-collapse" id="navbarNavDropdown">
            <ul className="navbar-nav model">
              <li className="nav-item">
                <Link className="nav-link active" aria-current="page">Model S</Link>
              </li>
              <li className="nav-item">
                <a className="nav-link active" href="#">
                  Model 3
                </a>
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

            </ul>
          </div>
        </nav>
    </div>
    </>
  )
}

export default ModelS