// App.jsx
import React from "react";
import { Routes, Route, Link, useNavigate, useParams } from "react-router-dom";
import DonationPage from "./DonationPage";
import Homepage from "./Homepage";
import AboutPage from "./AboutPage";
import DonationUpdate from "./DonationUpdate";
import NotFound from "./NotFound";
import AfrogiftLogo from "./assets/Afrogiftlogo.png";
import {
  FaUsers,
  FaHandHoldingHeart,
  FaClipboardList,
  FaMoneyBillWave,
  FaRegHandshake,
} from "react-icons/fa";

// ----------------------- EMPLOYMENT SCHEME -----------------------
function EmploymentPage() {
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
          / <span style={{ color: "#173321" }}>Employment</span>
        </div>

        <div className="text-center mb-5">
          <h2 className="fw-bold display-5" style={{ color: "#173321" }}>
            AfroGift Employment Opportunities
          </h2>
          <p className="lead">
            Connect with verified partners, earn rewards, and make an impact in communities worldwide.
          </p>
        </div>

        <div className="row align-items-center mb-5">
          <div className="col-md-6 mb-4 mb-md-0">
            <img
              src="https://t4.ftcdn.net/jpg/05/76/12/63/360_F_576126362_ll2tqdvXs27cDRRovBTmFCkPM9iX68iL.jpg"
              alt="Employment opportunities"
              className="img-fluid rounded shadow"
              style={{ maxHeight: "350px", objectFit: "cover" }}
            />
          </div>
          <div className="col-md-6">
            <h4 className="fw-bold mb-3">Who Can Join</h4>
            <p>
              Whether professional, skilled, or unskilled, AfroGift Employment connects you with projects that value your contribution. Work short-term or long-term with verified partners safely.
            </p>
            <p>
              Payments are processed securely through your AfroGift Card, usable at partner stores and eateries.
            </p>
            <button
              className="btn btn-success mt-3"
              onClick={() => navigate("/employment/interest")}
            >
              I'm Interested
            </button>
          </div>
        </div>

        <hr className="my-5" />

        <div className="row text-center mb-5">
          <div className="col-md-4 mb-4">
            <FaClipboardList size={40} className="text-success mb-3" />
            <h5 className="fw-bold">Browse Jobs</h5>
            <p>Find short-term or long-term projects that match your skills and availability.</p>
          </div>
          <div className="col-md-4 mb-4">
            <FaMoneyBillWave size={40} className="text-success mb-3" />
            <h5 className="fw-bold">Earn Rewards</h5>
            <p>Get paid safely through AfroGift Card, track your earnings, and redeem at partner outlets.</p>
          </div>
          <div className="col-md-4 mb-4">
            <FaRegHandshake size={40} className="text-success mb-3" />
            <h5 className="fw-bold">Secure Partnerships</h5>
            <p>Work with verified partners. Your data is safe and shared only with approved partners.</p>
          </div>
        </div>

        <div className="bg-white p-4 rounded shadow mb-5">
          <h4 className="fw-bold mb-4">How It Works</h4>
          <ul className="list-unstyled">
            <li className="mb-3">
              <FaUsers className="text-success me-2" /> Create an account and verify your profile.
            </li>
            <li className="mb-3">
              <FaClipboardList className="text-success me-2" /> Browse available jobs and apply for what fits you.
            </li>
            <li className="mb-3">
              <FaHandHoldingHeart className="text-success me-2" /> Complete the job while tracking progress transparently.
            </li>
            <li className="mb-3">
              <FaMoneyBillWave className="text-success me-2" /> Receive payments safely on your AfroGift Card.
            </li>
            <li className="mb-3">
              <FaRegHandshake className="text-success me-2" /> Request disputes or withdrawals if needed, handled fairly by AfroGift Agents.
            </li>
          </ul>
        </div>

        <div className="text-center">
          <h4 className="fw-bold mb-3">Join the AfroGift Movement</h4>
          <p className="text-muted">Take part in meaningful projects, earn rewards, and make a real difference in communities worldwide.</p>
          <button
            className="btn btn-lg px-5 py-3 shadow"
            style={{
              background: "linear-gradient(90deg, #173321, #28a745, #34d399)",
              color: "white",
              border: "none",
              borderRadius: "50px",
              transition: "0.3s ease",
            }}
            onMouseOver={(e) => (e.target.style.opacity = "0.9")}
            onMouseOut={(e) => (e.target.style.opacity = "1")}
            onClick={() => navigate("/employment/interest")}
          >
            Apply Now
          </button>
        </div>
      </div>
    </section>
  );
}

function EmploymentInterest() {
  const navigate = useNavigate();
  return (
    <div className="container py-5">
      <div className="d-flex justify-content-start mb-4">
        <span
          style={{ cursor: "pointer", color: "#28a745", fontWeight: "bold" }}
          onClick={() => navigate("/")}
        >
          Home
        </span>{" "}
        / <span
            style={{ cursor: "pointer", color: "#28a745", fontWeight: "bold" }}
            onClick={() => navigate("/employee/jobs")}
          >
            Jobs
          </span>{" "}
        / <span style={{ color: "#173321" }}>Login</span>
      </div>

      <h2 className="mb-4 fw-bold">Employee Login</h2>
      <div className="card p-4 mx-auto" style={{ maxWidth: "400px" }}>
        <form
          onSubmit={(e) => {
            e.preventDefault();
            navigate("/employee/jobs");
          }}
        >
          <div className="mb-3">
            <label className="form-label">Email</label>
            <input type="email" className="form-control" required />
          </div>
          <div className="mb-3">
            <label className="form-label">Password</label>
            <input type="password" className="form-control" required />
          </div>
          <button type="submit" className="btn btn-success w-100">
            Login
          </button>
        </form>
      </div>
    </div>
  );
}

// ----------------------- ADMIN SETUP -----------------------
function AdminSetup() {
  const navigate = useNavigate();
  return (
    <div className="container py-5">
      <div className="d-flex justify-content-start mb-4">
        <span
          style={{ cursor: "pointer", color: "#28a745", fontWeight: "bold" }}
          onClick={() => navigate("/")}
        >
          Home
        </span>{" "}
        / <span
            style={{ cursor: "pointer", color: "#28a745", fontWeight: "bold" }}
            onClick={() => navigate("/employee/jobs")}
          >
            Jobs
          </span>{" "}
        / <span style={{ color: "#173321" }}>Admin Setup</span>
      </div>

      <h1 className="fw-bold mb-4">Admin Setup</h1>

      <div className="mb-4">
        <h5>Step 1: Add Phone Number</h5>
        <input type="tel" className="form-control" placeholder="Phone Number" />
      </div>

      <div className="mb-4">
        <h5>Step 2: Profile Description</h5>
        <textarea className="form-control" placeholder="Describe yourself" rows={3}></textarea>
      </div>

      <div className="mb-4">
        <h5>Step 3: Get Your First Job</h5>
        <button className="btn btn-success" onClick={() => navigate("/employee/jobs")}>
          Go to Jobs
        </button>
      </div>
    </div>
  );
}


// ----------------------- DUMMY DATA -----------------------
const dummyJobs = [
  {
    id: 1,
    title: "Food Relief Coordinator",
    description: "Coordinate the distribution of food packages to local communities.",
    partnerId: 101,
    partnerName: "AfroFood Foundation",
    contract: {
      Id: 201,
      rate: 5000,
      totalHours: 20,
      type: "shortterm",
      startAt: "2025-09-01",
      deliverAt: "2025-09-15",
    },
    cardId: 301,
    createdAt: "2025-08-25",
    updatedAt: "2025-08-28",
    image: "https://res.cloudinary.com/cognitives-s3/image/upload/c_fill,dpr_auto,f_auto,fl_lossy,g_auto,q_auto/v1/cog-aap/n/504/2021/May/03/btTaoum4G3Lb70r9oEkS.jpg",
  },
  {
    id: 2,
    title: "Education Volunteer",
    description: "Help teach children in remote areas.",
    partnerId: 102,
    partnerName: "EduChange NGO",
    contract: {
      Id: 202,
      rate: 3000,
      totalHours: 30,
      type: "shortterm",
      startAt: "2025-09-05",
      deliverAt: "2025-09-20",
    },
    cardId: 302,
    createdAt: "2025-08-26",
    updatedAt: "2025-08-29",
    image: "https://govolunteerafrica.org/wp-content/uploads/2023/02/kenya1.png",
  },
  {
    id: 3,
    title: "Water Project Assistant",
    description: "Assist in setting up clean water projects.",
    partnerId: 103,
    partnerName: "Water4Life",
    contract: {
      Id: 203,
      rate: 4000,
      totalHours: 25,
      type: "longterm",
      startAt: "2025-09-10",
      deliverAt: "2025-10-10",
    },
    cardId: 303,
    createdAt: "2025-08-27",
    updatedAt: "2025-08-30",
    image: "https://blog.essentialhiring.com/wp-content/uploads/2022/07/ProjectManager-WaterTreatment01.png",
  },
  {
    id: 4,
    title: "Medical Aid Coordinator",
    description: "Coordinate free medical checkups in rural areas.",
    partnerId: 104,
    partnerName: "HealthAid",
    contract: {
      Id: 204,
      rate: 4500,
      totalHours: 15,
      type: "shortterm",
      startAt: "2025-09-15",
      deliverAt: "2025-09-30",
    },
    cardId: 304,
    createdAt: "2025-08-28",
    updatedAt: "2025-08-31",
    image: "https://www.shutterstock.com/shutterstock/videos/3859014203/thumb/1.jpg?ip=x480",
  },
  {
    id: 5,
    title: "Clothing Drive Manager",
    description: "Manage donations and distribution of clothing items.",
    partnerId: 105,
    partnerName: "WarmClothes NGO",
    contract: {
      Id: 205,
      rate: 3500,
      totalHours: 18,
      type: "shortterm",
      startAt: "2025-09-18",
      deliverAt: "2025-10-02",
    },
    cardId: 305,
    createdAt: "2025-08-29",
    updatedAt: "2025-09-01",
    image: "https://media.istockphoto.com/id/1212415924/photo/volunteers-collecting-food-donations-in-warehouse.jpg?s=612x612&w=0&k=20&c=5qqFB8_YPTVIUgs4l-yUp5nTwY7R7WE7rDr6cN0tJ9o=",
  },
];

// ----------------------- EMPLOYEE JOBS -----------------------
function EmployeeJobs() {
  const navigate = useNavigate();
  return (
    <div className="container py-5">
      <div className="d-flex justify-content-start mb-4">
        <span
          style={{ cursor: "pointer", color: "#28a745", fontWeight: "bold" }}
          onClick={() => navigate("/")}
        >
          Home
        </span>{" "}
        / <span style={{ color: "#173321" }}>Jobs</span>
      </div>

      <h1 className="fw-bold mb-4">Available Jobs</h1>
      <div className="row g-4">
        {dummyJobs.map((job) => (
          <div key={job.id} className="col-sm-12 col-md-6 col-lg-4">
            <div className="card h-100 shadow-sm">
              <img
                src={job.image || `https://source.unsplash.com/400x200/?volunteer,community,${job.id}`}
                className="card-img-top"
                alt={job.title}
                style={{ objectFit: "cover", height: "200px" }}
              />
              <div className="card-body d-flex flex-column">
                <h5 className="card-title">{job.title}</h5>
                <p className="card-text">{job.description}</p>
                <p className="text-muted mb-2">
                  <strong>Partner:</strong> {job.partnerName}
                </p>
                <p className="text-muted mb-3">
                  <small>Created: {job.createdAt}</small>
                </p>
                <button
                  className="btn btn-success mt-auto"
                  onClick={() => navigate(`/employee/jobs/${job.id}`)}
                >
                  View Details
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}



function EmployeeJobDetails({ id }) {
  const navigate = useNavigate();
  const job = dummyJobs.find((j) => j.id === parseInt(id));
  if (!job) return <p>Job not found</p>;

  const handleApply = () => {
    navigate("/employment/interest", { state: { jobId: job.id } });
  };

  return (
    <div className="container py-5">
      <h1>{job.title}</h1>
      <p>{job.description}</p>
      <p><strong>Partner:</strong> <a href="#" target="_blank">{job.partnerName}</a></p>
      <h5>Contract Info:</h5>
      <ul>
        <li>ID: {job.contract.Id}</li>
        <li>Rate: {job.contract.rate}</li>
        <li>Total Hours: {job.contract.totalHours}</li>
        <li>Type: {job.contract.type}</li>
        <li>Start At: {job.contract.startAt}</li>
        <li>Deliver At: {job.contract.deliverAt}</li>
      </ul>
      <button className="btn btn-success mt-3" onClick={handleApply}>
        Apply
      </button>
    </div>
  );
}



// ----------------------- EMPLOYEE CONTRACTS -----------------------
const dummyContracts = [
  { id: 1, jobId: 1, jobTitle: "Food Relief Coordinator", partnerName: "AfroFood Foundation", status: "Active" },
  { id: 2, jobId: 2, jobTitle: "Education Volunteer", partnerName: "EduChange NGO", status: "Completed" },
  { id: 3, jobId: 3, jobTitle: "Water Project Assistant", partnerName: "Water4Life", status: "Active" },
];

function EmployeeContracts() {
  const navigate = useNavigate();
  return (
    <div className="container py-5">
      <div className="d-flex justify-content-start mb-4">
        <span
          style={{ cursor: "pointer", color: "#28a745", fontWeight: "bold" }}
          onClick={() => navigate("/")}
        >
          Home
        </span>{" "}
        / <span style={{ color: "#173321" }}>Contracts</span>
      </div>

      <h1 className="fw-bold mb-4">Your Contracts</h1>
      <div className="row g-4">
        {dummyContracts.map((contract) => (
          <div key={contract.id} className="col-sm-12 col-md-6 col-lg-4">
            <div className="card h-100 shadow-sm">
              <div className="card-body d-flex flex-column">
                <h5 className="card-title">{contract.jobTitle}</h5>
                <p className="text-muted mb-2">
                  <strong>Partner:</strong> {contract.partnerName}
                </p>
                <p className="mb-3">
                  <span
                    className={`badge ${
                      contract.status === "Active"
                        ? "bg-success"
                        : contract.status === "Completed"
                        ? "bg-primary"
                        : "bg-warning text-dark"
                    }`}
                  >
                    {contract.status}
                  </span>
                </p>
                <button
                  className="btn btn-primary mt-auto"
                  onClick={() =>
                    navigate(`/employee/contracts/${contract.id}`)
                  }
                >
                  View Details
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}


function EmployeeContractDetails({ id }) {
  const navigate = useNavigate();
  const contract = dummyContracts.find((c) => c.id === parseInt(id));
  const job = dummyJobs.find((j) => j.id === contract?.jobId);
  if (!contract || !job) return <p>Contract not found</p>;

  return (
    <div className="container py-5">
      <h1>{contract.jobTitle}</h1>
      <p><strong>Partner:</strong> {contract.partnerName}</p>
      <p><strong>Status:</strong> {contract.status}</p>
      <button className="btn btn-primary me-2" onClick={() => navigate(`/employee/jobs/${job.id}`)}>View Job</button>
      <button className="btn btn-success me-2">Request Started</button>
      <button className="btn btn-warning me-2">Request Withdrawal</button>
      <button className="btn btn-danger">Raise Dispute</button>
    </div>
  );
}

// ----------------------- WRAPPERS -----------------------
function JobDetailWrapper() {
  const { id } = useParams();
  return <EmployeeJobDetails id={id} />;
}
function ContractDetailWrapper() {
  const { id } = useParams();
  return <EmployeeContractDetails id={id} />;
}

// ----------------------- MAIN APP -----------------------
function App() {
  return (
    <div className="d-flex flex-column min-vh-100">
      <nav className="navbar navbar-expand-lg navbar-dark fixed-top" style={{ backgroundColor: "#173321" }}>
        <div className="container">
          <Link className="navbar-brand fw-bold d-flex align-items-center" to="/">
            <img src={AfrogiftLogo} alt="AfroGift Logo" style={{ height: "45px", width: "auto", marginRight: "10px" }} />
            AfroGiftDonation
          </Link>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav ms-auto">
              <li className="nav-item"><Link className="nav-link" to="/">Home</Link></li>
              <li className="nav-item"><Link className="nav-link" to="/about">About</Link></li>
              <li className="nav-item"><Link className="nav-link" to="/update">Blogs</Link></li>
              <li className="nav-item"><Link className="nav-link" to="/donate">Donate</Link></li>
              <li className="nav-item dropdown">
                <span className="nav-link dropdown-toggle" role="button" data-bs-toggle="dropdown" style={{ cursor: "pointer" }}>Employment</span>
                <ul className="dropdown-menu">
                  <li><Link className="dropdown-item" to="/employment">Info</Link></li>
                  <li><Link className="dropdown-item" to="/setup">Admin Setup</Link></li>
                  <li><Link className="dropdown-item" to="/employee/jobs">Jobs</Link></li>
                  <li><Link className="dropdown-item" to="/employee/contracts">Contracts</Link></li>
                </ul>
              </li>
            </ul>
          </div>
        </div>
      </nav>

      <main className="flex-fill" style={{ paddingTop: "70px" }}>
        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/donate" element={<DonationPage />} />
          <Route path="/update" element={<DonationUpdate />} />
          <Route path="/employment" element={<EmploymentPage />} />
          <Route path="/employment/interest" element={<EmploymentInterest />} />
          <Route path="/setup" element={<AdminSetup />} />
          <Route path="/employee/jobs" element={<EmployeeJobs />} />
          <Route path="/employee/jobs/:id" element={<JobDetailWrapper />} />
          <Route path="/employee/contracts" element={<EmployeeContracts />} />
          <Route path="/employee/contracts/:id" element={<ContractDetailWrapper />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </main>
    </div>
  );
}

export default App;
