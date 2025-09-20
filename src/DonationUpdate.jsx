import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

function DonationUpdate() {
    const navigate = useNavigate();

    const donations = [
       {
            id: 1,
            title: "Food Relief at Ibadan",
            date: "Sept 18, 2025 - 10:00 AM",
            description: "Distributed food packages to 50 families in Ibadan",
            image: "https://tribuneonlineng.com/wp-content/uploads/2025/01/WhatsApp-Image-2025-01-28-at-6.00.49-PM-3.jpeg"
        },
        {
            id: 2,
            title: "Education Support in Lagos",
            date: "Sept 5, 2025 - 2:30 PM",
            description: "Funded textbooks for underprivileged students.",
            image: "https://cdn.businessday.ng/wp-content/uploads/2025/06/Lagos-Government-urges-parents-to-support-childrens-financial-education-as-Zedcrest-launches-books.png"
        },
        {
            id: 3, title: "Medical Aid in Abuja",
            date: "Aug 30, 2025 - 1:00 PM",
            description: "Provided free medical check-ups for 100 people.",
            image: "https://pistisfoundation.org/wp-content/uploads/2025/06/UBOMI_Abuja-162-Pharmacy-1024x683.jpg"
        },
        {
            id: 4,
            title: "Clothing Drive in Kano",
            date: "Aug 28, 2025 - 11:15 AM",
            description: "Warm clothes were donated to children in need.",
            image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRutjFiniRLVTiL3VU9sE_HvtDnLGhqy8_VmQ&s"
        },
        {
            id: 5,
            title: "Water Project in Enugu",
            date: "July 20, 2025 - 9:00 AM",
            description: "Installed a clean water borehole for a rural community.",
            image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSryGJYC2wbxru1SzacW4265i6NEBEb4rcN1g&s"
        },
        {
            id: 6,
            title: "Youth Empowerment in Ogun",
            date: "July 2, 2025 - 4:30 PM",
            description: "Vocational training sessions for unemployed youths.",
            image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTP5kzJ0KL0M0tLJK5tW3ZMc128JWIq6NvONQ&s"
        },
        {
            id: 7,
            title: "Food Drive in Port Harcourt",
            date: "June 18, 2025 - 11:00 AM",
            description: "Provided meals to 80 families.",
            image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQUltoIsxaCAhILt177-YPlNVry5DRZ43lyIQ&s"
        },
        {
            id: 8,
            title: "Clothing Drive in Nairobi, Kenya",
            date: "Aug 15, 2025 - 11:00 AM",
            description: "Donated clothes to children in need.",
            image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTzswxvdBKUDbh-e0bn6z5UA3NWrCyLJyiRMQ&s"
        },
        {
            id: 9,
            title: "School Supplies in Accra, Ghana",
            date: "July 28, 2025 - 9:30 AM",
            description: "Provided books and stationery for 120 students.",
            image: "https://ukgcc.com.gh/wp-content/uploads/2024/09/Jean-Michel-Arlandis-MD-of-Vivo-Energy-Ghana-left-and-representatives-from-GES-showcasing-some-of-the-donated-items-at-the-ceremony.-scaled-770x510.jpg"
        },
        {
            id: 10,
            title: "Medical Camp in London, UK",
            date: "July 10, 2025 - 2:00 PM",
            description: "Health screenings and checkups for the community.",
            image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQK99sjAAeoxmWUwhsnCwZ5NN1yePUXVK5Psw&s"
        },
        {
            id: 11,
            title: "Food Drive in New York, USA",
            date: "June 22, 2025 - 3:30 PM",
            description: "Distributed meals to homeless shelters.",
            image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRrO_Stugl9TrXr5RFiSWKBJH2jsGNTVdHKNA&s"
        },
        {
            id: 12,
            title: "Water Project in Nairobi, Kenya",
            date: "June 5, 2025 - 10:00 AM",
            description: "Installed a clean water borehole for a rural community.",
            image: "https://thewaterproject.org/community/wp-content/uploads/2014/11/Kenya4279-67-Handing-over.jpg"
        },
        {
            id: 13,
            title: "Clothing Donation in Paris, France",
            date: "April 20, 2025 - 1:00 PM",
            description: "Distributed warm clothes to displaced families.",
            image: "https://assets.thelocal.com/cdn-cgi/rs:fit:850/quality:75/plain/https://apiwp.thelocal.com/wp-content/uploads/2022/11/000_3228362.jpg@webp"
        },
        {
            id: 14,
            title: "Medical Aid in Berlin, Germany",
            date: "April 10, 2025 - 10:30 AM",
            description: "Provided free health services in local clinics.",
            image: "https://cdn.who.int/media/images/default-source/funding/germany-contribution-to-health-emergency-appeal.tmb-1920v.jpg?sfvrsn=3181b4bb_1"
        },
        {
            id: 15,
            title: "Clothing Support in Abuja",
            date: "May 15, 2025 - 1:00 PM",
            description: "Warm clothes for children in need.",
            image: "https://mleyfoundation.org/wp-content/uploads/2023/01/IMG-20230110-WA0029-1-1024x576.jpg"
        }

    ];

    const [searchTerm, setSearchTerm] = useState("");

    const filteredDonations = donations.filter(donation =>
        donation.title.toLowerCase().includes(searchTerm.toLowerCase())
    );

    const [currentPage, setCurrentPage] = useState(1);
    const itemsPerPage = 6;
    const totalPages = Math.ceil(filteredDonations.length / itemsPerPage);
    const indexOfLast = currentPage * itemsPerPage;
    const indexOfFirst = indexOfLast - itemsPerPage;
    const currentDonations = filteredDonations.slice(indexOfFirst, indexOfLast);

    return (
        <div className="container py-5">
            <div className="mb-4">
                <div className="d-flex flex-column flex-md-row justify-content-between align-items-center">
                    <h1 className="fw-bold text-dark mb-3 mb-md-0">Donation Blogs</h1>
                    <div className="text-md-end">
                        <span
                            style={{ cursor: "pointer", color: "#28a745", fontWeight: "bold" }}
                            onClick={() => navigate("/")}
                        >
                            Home
                        </span>{" "}
                        / <span style={{ color: "#173321" }}>Blogs</span>
                    </div>
                </div>
            </div>

            {/* 🔍 Search Bar */}
            <div className="row mb-4">
                <div className="col-md-6 mx-auto">
                    <input
                        type="text"
                        className="form-control form-control-lg rounded-3 shadow-sm"
                        placeholder="Search by title..."
                        value={searchTerm}
                        onChange={(e) => {
                            setSearchTerm(e.target.value);
                            setCurrentPage(1); // reset to first page when searching
                        }}
                    />
                </div>
            </div>

            {/* Donations */}
            <div className="row g-4">
                {currentDonations.length > 0 ? (
                    currentDonations.map((donation) => (
                        <div className="col-lg-4 col-md-6 col-12" key={donation.id}>
                            <div className="card shadow-sm border-0 h-100 rounded-4 overflow-hidden">
                                <a href={donation.image} target="_blank" rel="noopener noreferrer">
                                    <img
                                        src={donation.image}
                                        className="card-img-top"
                                        alt={donation.title}
                                        style={{ height: "200px", objectFit: "cover", cursor: "pointer" }}
                                    />
                                </a>
                                <div className="card-body">
                                    <h5 className="card-title fw-bold">{donation.title}</h5>
                                    <p className="text-muted small mb-2">{donation.date}</p>
                                    <p className="card-text">{donation.description}</p>
                                </div>
                            </div>
                        </div>
                    ))
                ) : (
                    <div className="text-center py-5">
                        <h5 className="fw-semibold text-muted">No donations found.</h5>
                    </div>
                )}
            </div>

            {/* Pagination */}
            {filteredDonations.length > itemsPerPage && (
                <div className="d-flex justify-content-center mt-4">
                    <nav>
                        <ul className="pagination">
                            <li className={`page-item ${currentPage === 1 ? "disabled" : ""}`}>
                                <button
                                    className="page-link"
                                    onClick={() => setCurrentPage((prev) => Math.max(prev - 1, 1))}
                                >
                                    Prev
                                </button>
                            </li>

                            {[...Array(totalPages)].map((_, i) => (
                                <li
                                    className={`page-item ${currentPage === i + 1 ? "active" : ""}`}
                                    key={i}
                                >
                                    <button className="page-link" onClick={() => setCurrentPage(i + 1)}>
                                        {i + 1}
                                    </button>
                                </li>
                            ))}

                            <li className={`page-item ${currentPage === totalPages ? "disabled" : ""}`}>
                                <button
                                    className="page-link"
                                    onClick={() => setCurrentPage((prev) => Math.min(prev + 1, totalPages))}
                                >
                                    Next
                                </button>
                            </li>
                        </ul>
                    </nav>
                </div>
            )}
        </div>
    );
}

export default DonationUpdate;
