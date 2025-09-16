import React, { useState } from "react";

function DonationForm() {
    const [donationType, setDonationType] = useState("");
    const [delivery, setDelivery] = useState("");
    const [success, setSuccess] = useState(false);

    const [itemName, setItemName] = useState("");
    const [itemDescription, setItemDescription] = useState("");
    const [address, setAddress] = useState("");
    const [country, setCountry] = useState("");
    const [phone, setPhone] = useState("");
    const [email, setEmail] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();

        const donation = {
            donationType,
            delivery,
            itemName,
            itemDescription,
            address,
            country,
            phone,
            email,
        };

        localStorage.setItem("donation", JSON.stringify(donation));

        setSuccess(true);
    };

    return (
        <div className="container py-5 mb-5">
            <div className="row justify-content-center">
                <div className="col-lg-7 col-md-9">
                    <div className="card shadow-lg border-0 rounded-4">
                        <div className="card-body p-5">
                            <h2
                                className="text-center fw-bold mb-4"
                                style={{ color: "#173321" }}
                            >
                                Make a Donation
                            </h2>

                            {success ? (
                                <div className="alert alert-success text-center fw-semibold">
                                    🎉 Thank you! Your donation has been submitted successfully.
                                    <div className="mt-3">
                                        <button
                                            className="btn btn-outline-light fw-bold"
                                            style={{ backgroundColor: "#173321" }}
                                            onClick={() => setSuccess(false)}
                                        >
                                            Back to Site
                                        </button>
                                    </div>
                                </div>
                            ) : (
                                <form onSubmit={handleSubmit}>
                                    <div className="mb-4">
                                        <label className="form-label fw-semibold">
                                            Donation Type
                                        </label>
                                        <select
                                            className="form-select"
                                            value={donationType}
                                            onChange={(e) => setDonationType(e.target.value)}
                                            required
                                        >
                                            <option value="">-- Select Donation Type --</option>
                                            <option value="afrogiftcard">AfroGiftCard</option>
                                            <option value="parcel">Parcel</option>
                                        </select>
                                    </div>

                                    {donationType === "parcel" && (
                                        <>
                                            <div className="mb-3">
                                                <label className="form-label fw-semibold">
                                                    Item Name
                                                </label>
                                                <input
                                                    type="text"
                                                    className="form-control"
                                                    placeholder="Enter item name"
                                                    value={itemName}
                                                    onChange={(e) => setItemName(e.target.value)}
                                                    required
                                                />
                                            </div>

                                            <div className="mb-3">
                                                <label className="form-label fw-semibold">
                                                    Item Description
                                                </label>
                                                <textarea
                                                    className="form-control"
                                                    rows="3"
                                                    placeholder="Enter item description"
                                                    value={itemDescription}
                                                    onChange={(e) => setItemDescription(e.target.value)}
                                                    required
                                                ></textarea>
                                            </div>

                                            <div className="mb-3">
                                                <label className="form-label fw-semibold">
                                                    Upload File (Image/Video)
                                                </label>
                                                <input type="file" className="form-control" />
                                            </div>

                                            <div className="mb-3">
                                                <label className="form-label fw-semibold">
                                                    Delivery Option
                                                </label>
                                                <select
                                                    className="form-select"
                                                    value={delivery}
                                                    onChange={(e) => setDelivery(e.target.value)}
                                                    required
                                                >
                                                    <option value="">-- Select Delivery --</option>
                                                    <option value="pickup">Pick Up</option>
                                                    <option value="dropoff">Drop Off</option>
                                                </select>
                                            </div>

                                            {delivery === "pickup" && (
                                                <>
                                                    <div className="mb-3">
                                                        <label className="form-label fw-semibold">
                                                            Address
                                                        </label>
                                                        <input
                                                            type="text"
                                                            className="form-control"
                                                            placeholder="Enter pickup address"
                                                            value={address}
                                                            onChange={(e) => setAddress(e.target.value)}
                                                            required
                                                        />
                                                    </div>

                                                    <div className="mb-3">
                                                        <label className="form-label fw-semibold">
                                                            Country
                                                        </label>
                                                        <select
                                                            className="form-select"
                                                            value={country}
                                                            onChange={(e) => setCountry(e.target.value)}
                                                            required
                                                        >
                                                            <option value="">-- Select Country --</option>
                                                            <option value="nigeria">Nigeria</option>
                                                            <option value="usa">USA</option>
                                                            <option value="uk">UK</option>
                                                            <option value="canada">Canada</option>
                                                        </select>
                                                    </div>
                                                </>
                                            )}
                                        </>
                                    )}

                                    {donationType === "afrogiftcard" && (
                                        <div className="alert alert-info text-center fw-semibold">
                                            To donate via AfroGiftCard,{" "}
                                            <a
                                                href="https://platform.afrogiftcard.com.ng/business/buy-and-redeem/742844002"
                                                target="_blank"
                                                rel="noreferrer"
                                                className="text-decoration-none"
                                            >
                                                click here
                                            </a>
                                            .
                                        </div>
                                    )}


                                    {donationType === "parcel" && (
                                        <>
                                            <div className="mb-3">
                                                <label className="form-label fw-semibold">
                                                    Contact Phone
                                                </label>
                                                <input
                                                    type="tel"
                                                    className="form-control"
                                                    placeholder="Enter phone number"
                                                    value={phone}
                                                    onChange={(e) => setPhone(e.target.value)}
                                                    required
                                                />
                                            </div>

                                            <div className="mb-4">
                                                <label className="form-label fw-semibold">
                                                    Contact Email
                                                </label>
                                                <input
                                                    type="email"
                                                    className="form-control"
                                                    placeholder="Enter email address"
                                                    value={email}
                                                    onChange={(e) => setEmail(e.target.value)}
                                                    required
                                                />
                                            </div>
                                        </>
                                    )}

                                    {donationType === "parcel" && (
                                        <div className="d-grid">
                                            <button type="submit" className="btn btn-primary btn-lg" style={{
                                                backgroundColor: "#173321",
                                                color: "white"
                                            }} >
                                                Submit Donation
                                            </button>
                                        </div>
                                    )}
                                </form>
                            )}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default DonationForm;