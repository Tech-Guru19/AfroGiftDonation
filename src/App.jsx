import React from "react";
import { Routes, Route, Link } from "react-router-dom";
import DonationPage from "./DonationPage";
import Homepage from "./Homepage";
import AboutPage from "./AboutPage";
import DonationUpdate from "./DonationUpdate";
import NotFound from "./NotFound";

function App() {
  return (
    <div className="d-flex flex-column min-vh-100">
      <nav className="navbar navbar-expand-lg navbar-dark  fixed-top" style={{ backgroundColor: "#173321", color: "white" }}>
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
                <Link className="nav-link" to="/about">
                  About
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/donate">
                  Donate
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/update">
                  Blogs
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>

      <main className="flex-fill" style={{ paddingTop: "50px" }}>
        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/donate" element={<DonationPage />} />
          <Route path="/update" element={<DonationUpdate />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </main>

      <footer className="text-white text-center py-3 mt-auto" style={{ backgroundColor: "#173321" }}>
        <p className="mb-0">
          &copy; {new Date().getFullYear()} AfroGiftDonation. All rights reserved.
        </p>
      </footer>
    </div>
  );
}

export default App;
