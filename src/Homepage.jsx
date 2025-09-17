import React from "react";
import { Link } from "react-router-dom";

const Homepage = () => {
    return (
        <header
            id="home"
            className="vh-100 d-flex align-items-center text-center text-white"
            style={{
                background:
                    "linear-gradient(rgba(0,0,0,0.6), rgba(0,0,0,0.6)), url('https://pce.sandiego.edu/wp-content/uploads/2022/11/private-foundation-vs-public-charity.jpg') center/cover no-repeat",
            }}
        >
            <div className="container">
                <h1 className="display-3 fw-bold">Together, We Can Make a Change</h1>
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
    );
};

export default Homepage;
