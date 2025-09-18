import React from "react";
import {
    FaHandHoldingHeart,
    FaGlobe,
    FaGift,
    FaUsers,
    FaLeaf,
} from "react-icons/fa";
import { useNavigate } from "react-router-dom";

function AboutPage() {
    const navigate = useNavigate();

    return (
        <section className="py-5" style={{ backgroundColor: "#f8f9fa" }}>
            <div className="container text-dark">
                <div className="d-flex justify-content-end mb-4">
                    <span
                        style={{ cursor: "pointer", color: "#28a745", fontWeight: "bold" }}
                        onClick={() => navigate("/")}
                    >
                        Home
                    </span>{" "}
                    / <span style={{ color: "#173321" }}>About</span>
                </div>

                <div className="text-center mb-5">
                    <h2 className="fw-bold display-5" style={{ color: "#173321" }}>
                        ABOUT US – Afro Gift Donations
                    </h2>
                </div>

                <div className="row align-items-center mb-5">
                    <div className="col-md-6 mb-4 mb-md-0">
                        <img
                            src="https://previews.123rf.com/images/rawpixel/rawpixel1705/rawpixel170545059/78468988-group-of-volunteer-people-donate-stuff-for-charity.jpg"
                            alt="Helping hands"
                            className="img-fluid rounded shadow"
                            style={{ maxHeight: "350px", objectFit: "cover" }}
                        />
                    </div>
                    <div className="col-md-6">
                        <h4 className="fw-bold mb-3">Who We Are</h4>
                        <p>
                            Afro Gift Donations is a global humanitarian platform committed
                            to changing lives by connecting generous hearts with people and
                            communities in need around the world. We provide a secure,
                            transparent, and trustworthy way to give whether through
                            financial donations, relief parcels, or special gift packages
                            ensuring every act of kindness makes a tangible difference.
                        </p>
                        <p>
                            We are more than a donation platform. We are a movement a call
                            to action for leaders, philanthropists, corporations, and
                            individuals everywhere to partner in building a better world.
                        </p>
                    </div>
                </div>

                <hr className="my-5" />

                <div className="row text-center mb-5">
                    <div className="col-md-4 mb-4">
                        <FaGlobe size={40} className="text-success mb-3" />
                        <h5 className="fw-bold">Our Vision</h5>
                        <p>
                            To create a world where generosity knows no borders, and every
                            gift helps build a brighter tomorrow for all.
                        </p>
                    </div>
                    <div className="col-md-4 mb-4">
                        <FaHandHoldingHeart size={40} className="text-success mb-3" />
                        <h5 className="fw-bold">Our Mission</h5>
                        <ul className="text-muted list-unstyled">
                            <li>
                                To connect donors and beneficiaries worldwide in a seamless
                                and transparent way.
                            </li>
                            <li>
                                To support life-changing projects that improve education,
                                healthcare, and human dignity.
                            </li>
                            <li>
                                To inspire governments, leaders, and men of goodwill to
                                champion causes that uplift humanity.
                            </li>
                        </ul>
                    </div>
                    <div className="col-md-4 mb-4">
                        <FaUsers size={40} className="text-success mb-3" />
                        <h5 className="fw-bold">Why We Exist</h5>
                        <p>
                            Poverty, hunger, lack of education, and crises are not limited
                            to one nation or one continent they affect us all. Afro Gift
                            Donations exists to bridge the gap between those with the means
                            to help and those with urgent needs, ensuring that help is
                            delivered efficiently, ethically, and effectively.
                        </p>
                    </div>
                </div>

                <hr className="my-5" />

                <div className="mb-5">
                    <h4 className="fw-bold mb-4">Our Donation Categories</h4>
                    <p>We provide several ways for you to make an impact:</p>
                    <div className="row">
                        <div className="col-md-6">
                            <ul className="list-unstyled">
                                <li className="mb-3">
                                    <FaGift className="text-success me-2" />
                                    <strong>Monetary Donations / Afrogift Card:</strong> Fund
                                    medical care, education, and humanitarian projects
                                    worldwide.
                                </li>
                                <li className="mb-3">
                                    <FaLeaf className="text-success me-2" />
                                    <strong>Relief Parcels:</strong> Send food, clothes,
                                    books, and other essentials to families in crisis.
                                </li>
                            </ul>
                        </div>
                        <div className="col-md-6">
                            <ul className="list-unstyled">
                                <li className="mb-3">
                                    <FaGift className="text-success me-2" />
                                    <strong>Special Gift Packages:</strong> Sponsor seasonal
                                    packages for orphans, widows, refugees, or disaster
                                    survivors.
                                </li>
                                <li className="mb-3">
                                    <FaGlobe className="text-success me-2" />
                                    <strong>Global Development Projects:</strong> Contribute
                                    towards building schools, water projects, skill centers,
                                    and healthcare facilities across different nations.
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>

                <div className="bg-white p-4 rounded shadow mb-5">
                    <h4 className="fw-bold mb-3">Our Core Values</h4>
                    <ul className="list-unstyled">
                        <li className="mb-2">
                            <strong>🌍 Global Responsibility:</strong> We see every person
                            as deserving of care, regardless of location, race, or
                            background.
                        </li>
                        <li className="mb-2">
                            <strong>🔎 Transparency & Trust:</strong> Every donation is
                            traceable, and impact reports are shared with our donors.
                        </li>
                        <li className="mb-2">
                            <strong>❤️ Compassion:</strong> We act with empathy, treating
                            beneficiaries with dignity and respect.
                        </li>
                    </ul>
                </div>

                <div className="text-center mb-5">
                    <h4 className="fw-bold mb-3">Our Global Impact</h4>
                    <p className="lead text-muted">
                        Afro Gift Donations is building a worldwide network of hope
                        supporting underprivileged children, empowering struggling
                        families, and restoring communities affected by disaster. Each
                        donation, no matter how small, becomes part of a bigger story of
                        change.
                    </p>
                </div>

                <div className="text-center">
                    <h4 className="fw-bold">Join the Movement</h4>
                    <p className="text-muted">
                        We invite world leaders, philanthropists, corporations, and
                        kind-hearted individuals to take part in a global mission that
                        transcends borders.
                    </p>
                    <p className="fw-bold">
                        Together, we can build a world where generosity transforms lives.
                    </p>
                    <button
                        className="btn btn-lg px-5 py-3 shadow"
                        style={{
                            background:
                                "linear-gradient(90deg, #173321, #28a745, #34d399)",
                            color: "white",
                            border: "none",
                            borderRadius: "50px",
                            transition: "0.3s ease",
                        }}
                        onMouseOver={(e) => (e.target.style.opacity = "0.9")}
                        onMouseOut={(e) => (e.target.style.opacity = "1")}
                        onClick={() => navigate("/donate")}
                    >
                        Make A Donate Today
                    </button>
                </div>
            </div>
        </section>
    );
}

export default AboutPage;
