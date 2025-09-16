import React from "react";
import { Routes, Route, Link } from "react-router-dom";
import DonationPage from "./DonationPage";

function App() {
  return (
    <div className="d-flex flex-column min-vh-100">
      <nav className="navbar navbar-expand-lg navbar-dark  fixed-top"  style={{ backgroundColor: "#173321", color: "white" }}>
        <div className="container">
          <Link className="navbar-brand fw-bold" to="/">
            AfroGiftDonation
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav ms-auto">
              <li className="nav-item">
                <Link className="nav-link" to="/">
                  Home
                </Link>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#about">
                  About
                </a>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/donate">
                  Donate
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>

      <main className="flex-fill" style={{ paddingTop: "50px" }}>
        <Routes>
          <Route
            path="/"
            element={
              <>
                <header
                  id="home"
                  className="vh-100 d-flex align-items-center text-center text-white"
                  style={{
                    background:
                      "linear-gradient(rgba(0,0,0,0.6), rgba(0,0,0,0.6)), url('https://pce.sandiego.edu/wp-content/uploads/2022/11/private-foundation-vs-public-charity.jpg') center/cover no-repeat",
                  }}
                >
                  <div className="container">
                    <h1 className="display-3 fw-bold">
                      Together, We Can Make a Change
                    </h1>
                    <p className="lead mb-4">
                      Your kindness can bring hope to someone’s tomorrow.
                    </p>
                    <Link
                      to="/donate"
                      className="btn btn-lg"
                      style={{ backgroundColor: "#173321", color: "white" }}
                    >
                      Donate Now
                    </Link>
                  </div>
                </header>

                <section id="about" className="py-5 bg-light">
                  <div className="container text-center">
                    <h2 className="fw-bold mb-4">About Us</h2>
                    <p className="lead">
                      CharityHub is dedicated to connecting people who want to
                      give with those in need. Whether it’s through AfroGiftCards
                      or physical parcels, every act of generosity counts.
                      <br />
                      <br />
                      With your support, we provide hope, resources, and
                      opportunities for communities worldwide.
                    </p>
                  </div>
                </section>
              </>
            }
          />
          <Route path="/donate" element={<DonationPage />} />
        </Routes>
      </main>

      <footer className="text-white text-center py-3 mt-auto" style={{ backgroundColor: "#173321"}}>
        <p className="mb-0">
          &copy; {new Date().getFullYear()} AfroGiftDonation. All rights reserved.
        </p>
      </footer>
    </div>
  );
}

export default App;
