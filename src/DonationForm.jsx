import React, { useState } from 'react';
import { useNavigate } from "react-router-dom";

const DonationForm = () => {
    const navigate = useNavigate();

    const [fullName, setFullName] = useState("");
    const [email, setEmail] = useState("");
    const [phone, setPhone] = useState("");
    const [country, setCountry] = useState("");

    const [category, setCategory] = useState("");
    const [otherCategory, setOtherCategory] = useState("");

    const [amount, setAmount] = useState("");

    const [dedicate, setDedicate] = useState(false);
    const [dedicationType, setDedicationType] = useState("");
    const [dedicationName, setDedicationName] = useState("");
    const [anonymous, setAnonymous] = useState(false);
    const [message, setMessage] = useState("");

    const [privacy, setPrivacy] = useState(false);
    const [communication, setCommunication] = useState(false);

    const [success, setSuccess] = useState(false);

    const handleSubmit = (e) => {
        e.preventDefault();

        if (!privacy || !communication) {
            alert("Please agree to the Consent & Security section before submitting.");
            return;
        }

        const donorData = {
            fullName,
            email,
            phone,
            country,
            category,
            otherCategory,
            amount,
            dedicate,
            dedicationType,
            dedicationName,
            anonymous,
            message,
            privacy,
            communication,
        };

        localStorage.setItem("donorInfo", JSON.stringify(donorData));
        setSuccess(true);
    };

    return (
        <div className="container py-5 mb-5">
            <div className="position-relative mb-4">
                <h1 className="fw-bold text-dark text-center m-0 mb-5 mt-5">
                    Contact / Donation Page
                </h1>

                <div className="d-none d-md-block position-absolute" style={{ top: "0", right: "0" }}>
                    <span
                        style={{ cursor: "pointer", color: "#28a745", fontWeight: "bold" }}
                        onClick={() => navigate("/")}
                    >
                        Home
                    </span>{" "}
                    / <span style={{ color: "#173321" }}>Contact</span>
                </div>

                <div className="d-block d-md-none text-center mb-3">
                    <span
                        style={{ cursor: "pointer", color: "#28a745", fontWeight: "bold" }}
                        onClick={() => navigate("/")}
                    >
                        Home
                    </span>{" "}
                    / <span style={{ color: "#173321" }}>Contact</span>
                </div>
            </div>

            <div className="row justify-content-center">
                <div className="col-lg-8 col-md-10 col-12 px-3">
                    <div className="card shadow-lg border-0 rounded-4">
                        <div className="card-body p-4 p-md-5">
                            <h2 className="text-center fw-bold mb-4" style={{ color: "#173321" }}>
                                Donor Information
                            </h2>

                            {success ? (
                                <div className="d-flex align-items-center justify-content-center" style={{ minHeight: "300px" }}>
                                    <div className="card border-0 shadow p-4 mx-auto text-center" style={{ maxWidth: "550px" }}>
                                        <div className="card-body">
                                            <h3 className="fw-bold text-success mb-3">🎉Thank You!</h3>
                                            <p className="fw-semibold text-dark fs-5">
                                                {fullName ? `Dear ${fullName},` : "Dear Donor,"}
                                            </p>
                                            <p className="text-muted">
                                                Your donation details have been securely saved.
                                                We truly appreciate your kindness and generosity.
                                            </p>
                                            <button
                                                className="btn btn-lg fw-bold mt-3 px-4"
                                                style={{ backgroundColor: "#173321", color: "white" }}
                                                onClick={() => navigate("/")}
                                            >
                                                Back to Home
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            ) : (
                                <form onSubmit={handleSubmit}>
                                    <div className="mb-3">
                                        <label className="form-label fw-semibold">Full Name</label>
                                        <input
                                            type="text"
                                            className="form-control"
                                            placeholder="First and Last Name"
                                            value={fullName}
                                            onChange={(e) => setFullName(e.target.value)}
                                            required
                                        />
                                    </div>

                                    <div className="mb-3">
                                        <label className="form-label fw-semibold">Email Address</label>
                                        <input
                                            type="email"
                                            className="form-control"
                                            placeholder="Enter email"
                                            value={email}
                                            onChange={(e) => setEmail(e.target.value)}
                                            required
                                        />
                                    </div>

                                    <div className="mb-3">
                                        <label className="form-label fw-semibold">Phone Number</label>
                                        <input
                                            type="tel"
                                            className="form-control"
                                            placeholder="Optional"
                                            value={phone}
                                            onChange={(e) => setPhone(e.target.value)}
                                        />
                                    </div>

                                    <div className="mb-4">
                                        <label className="form-label fw-semibold">Country</label>
                                        <select
                                            className="form-select"
                                            value={country}
                                            onChange={(e) => setCountry(e.target.value)}
                                            required
                                        >
                                            <option value="">-- Select Country --</option>
                                            <option value="Nigeria">Nigeria</option>
                                            <option value="USA">USA</option>
                                            <option value="UK">UK</option>
                                            <option value="Canada">Canada</option>
                                        </select>
                                    </div>

                                    <h4 className="fw-bold mt-4 mb-3" style={{ color: "#173321" }}>
                                        Donation Details
                                    </h4>
                                    <div className="mb-3">
                                        <label className="form-label fw-semibold">Donation Category</label>
                                        <select
                                            className="form-select"
                                            value={category}
                                            onChange={(e) => setCategory(e.target.value)}
                                            required
                                        >
                                            <option value="">-- Select Category --</option>
                                            <option value="General Fund">General Fund</option>
                                            <option value="Education Support">Education Support</option>
                                            <option value="Food & Relief Parcels">Food & Relief Parcels</option>
                                            <option value="Healthcare Assistance">Healthcare Assistance</option>
                                            <option value="Infrastructure Projects">Infrastructure Projects</option>
                                            <option value="Other">Other</option>
                                        </select>
                                    </div>

                                    {category === "Other" && (
                                        <div className="mb-3">
                                            <input
                                                type="text"
                                                className="form-control"
                                                placeholder="Enter custom category"
                                                value={otherCategory}
                                                onChange={(e) => setOtherCategory(e.target.value)}
                                            />
                                        </div>
                                    )}

                                    <div className="mb-3">
                                        <label className="form-label fw-semibold">Donation Amount</label>
                                        <input
                                            type="number"
                                            className="form-control"
                                            placeholder="Enter amount"
                                            value={amount}
                                            onChange={(e) => setAmount(e.target.value)}
                                            required
                                        />
                                    </div>

                                    <h4 className="fw-bold mt-4 mb-3" style={{ color: "#173321" }}>
                                        Additional Options
                                    </h4>
                                    <div className="form-check mb-2">
                                        <input
                                            type="checkbox"
                                            className="form-check-input"
                                            checked={dedicate}
                                            onChange={(e) => setDedicate(e.target.checked)}
                                        />
                                        <label className="form-check-label">Dedicate this Donation</label>
                                    </div>

                                    {dedicate && (
                                        <>
                                            <select
                                                className="form-select mb-2"
                                                value={dedicationType}
                                                onChange={(e) => setDedicationType(e.target.value)}
                                            >
                                                <option value="">-- Select Type --</option>
                                                <option value="honor">In honor of</option>
                                                <option value="memory">In memory of</option>
                                            </select>
                                            <input
                                                type="text"
                                                className="form-control mb-3"
                                                placeholder="Enter name"
                                                value={dedicationName}
                                                onChange={(e) => setDedicationName(e.target.value)}
                                            />
                                        </>
                                    )}

                                    <div className="form-check mb-3">
                                        <input
                                            type="checkbox"
                                            className="form-check-input"
                                            checked={anonymous}
                                            onChange={(e) => setAnonymous(e.target.checked)}
                                        />
                                        <label className="form-check-label">Donate Anonymously</label>
                                    </div>

                                    <div className="mb-3">
                                        <label className="form-label fw-semibold">Message</label>
                                        <textarea
                                            className="form-control"
                                            rows="3"
                                            placeholder="Write a short message..."
                                            value={message}
                                            onChange={(e) => setMessage(e.target.value)}
                                        />
                                    </div>

                                    <h4 className="fw-bold mt-4 mb-3" style={{ color: "#173321" }}>
                                        Consent & Security
                                    </h4>
                                    <div className="form-check mb-2">
                                        <input
                                            type="checkbox"
                                            className="form-check-input"
                                            checked={privacy}
                                            onChange={(e) => setPrivacy(e.target.checked)}
                                            required
                                        />
                                        <label className="form-check-label">
                                            I agree to the Privacy Policy and Terms of Service <span className="text-danger">*</span>
                                        </label>
                                    </div>

                                    <div className="form-check mb-4">
                                        <input
                                            type="checkbox"
                                            className="form-check-input"
                                            checked={communication}
                                            onChange={(e) => setCommunication(e.target.checked)}
                                            required
                                        />
                                        <label className="form-check-label">
                                            Yes, send me updates on the impact of my donation <span className="text-danger">*</span>
                                        </label>
                                    </div>

                                    <div className="d-grid">
                                        <button
                                            type="submit"
                                            className="btn btn-primary btn-lg"
                                            style={{ backgroundColor: "#173321", color: "white" }}
                                        >
                                            Donate Now
                                        </button>
                                    </div>
                                </form>
                            )}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default DonationForm;
