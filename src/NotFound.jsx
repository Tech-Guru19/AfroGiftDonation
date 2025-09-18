import React from "react";
import { Link } from "react-router-dom";

function NotFound() {
    return (
        <div className="d-flex flex-column justify-content-center align-items-center" style={{ paddingTop: "100px", textAlign: "center", minHeight: "80vh" }}>
            <h1 className="display-1 fw-bold text-danger">404</h1>
            <h2 className="mb-3">Oops! Page Not Found</h2>
            <p className="mb-4">The page you’re looking for doesn’t exist or has been moved.</p>
            {/* <img
                src="https://via.placeholder.com/400x300?text=404+Not+Found"
                alt="Page not found illustration"
                className="img-fluid mb-4"
                style={{ maxWidth: "400px", borderRadius: "15px" }}
            /> */}
            <Link to="/" className="btn btn-success btn-lg">Go Back Home</Link>
        </div>
    );
}

export default NotFound;
