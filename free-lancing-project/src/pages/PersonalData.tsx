import { useState } from "react";
import {
  User,
  Briefcase,
  DollarSign,
  Clock,
  Heart,
  Target,
  Users,
  BookOpen,
  Award,
  AlertTriangle,
  Edit2,
  RefreshCw,
} from "lucide-react";
import "./PersonalData.scss";

export default function PersonalData() {
 const [activeTab, setActiveTab] = useState("personal");

  const menuItems = [
    { id: "personal", label: "Personal Data", icon: User },
    { id: "job", label: "Job Data", icon: Briefcase },
    { id: "compensation", label: "Compensation", icon: DollarSign },
    { id: "time", label: "Time Management", icon: Clock },
    { id: "benefits", label: "Benefits", icon: Heart },
    { id: "performance", label: "Performance and Goals", icon: Target },
    { id: "succession", label: "Succession", icon: Users },
    { id: "learning", label: "Learning and Development", icon: BookOpen },
    { id: "talent", label: "Talent Profile", icon: Award },
  ];

  return (
    <div>
 


      <div className="page-wrapper">
        {/* <div className="page-header">
          <h1>People Profile</h1>
          <div style={{ display: "flex", gap: "12px" }}>
            <button className="primary-btn">Public Profile</button>
            <button className="secondary-btn">
              <Clock style={{ width: "14px", height: "14px" }} />
              As of Today
            </button>
          </div>
        </div> */}

        <div className="layout">
          {/* Sidebar */}
          <div className="sidebar">
            <div className="profile-card">
              <div className="profile-img-container">
                <img src="https://i.pravatar.cc/150?img=5" alt="avatar" />
              </div>

              <div className="status-tag">
                <User size={12} /> Out of Office • Back on Dec 8, 2025
              </div>

              <h2 style={{ margin: "0 0 4px 0" }}>Molly Huddleston</h2>
              <p style={{ margin: "0 0 4px 0", color: "#666" }}>
                Marketing Manager
              </p>
              <p style={{ margin: "0 0 8px 0", color: "#666" }}>
                Market Research (5000131)
              </p>
              <p style={{ color: "#0070f3" }}>Direct Reports: 6</p>

              <button className="primary-btn" style={{ width: "100%" }}>
                All Actions
              </button>
            </div>

            {/* Sidebar Menu */}
            <div>
              {menuItems.map((item) => {
                const Icon = item.icon;
                return (
                  <div
                    key={item.id}
                    className={`menu-item ${
                      activeTab === item.id ? "active" : ""
                    }`}
                    onClick={() => setActiveTab(item.id)}
                  >
                    <Icon />
                    <span>{item.label}</span>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Content Section */}
          <div className="content-section">

            {/* Personal Information Card */}
            <div className="card">
              <div className="card-header">
                <h3 style={{ fontWeight: "600"}}>Personal Information</h3>
                <div style={{ display: "flex", gap: "12px" }}>
                  <AlertTriangle color="#f57c00" />
                  <Edit2 />
                  <RefreshCw />
                </div>
              </div>

              <div className="grid-2col">
                <div>
                  <p className="label">First Name:</p>
                  <p className="value">Molly</p>
                </div>

                <div>
                  <p className="label">Gender:</p>
                  <p className="value">
                    **{" "}
                    <span style={{ color: "#0070f3", cursor: "pointer" }}>
                      Show
                    </span>
                  </p>
                </div>

                <div>
                  <p className="label">Last Name:</p>
                  <p className="value">Huddleston</p>
                </div>

                <div>
                  <p className="label">Global Information:</p>
                  <p className="value">United States (USA)</p>
                </div>

                <div>
                  <p className="label">Salutation:</p>
                  <p className="value">Mrs. (mrs)</p>
                </div>
              </div>

              <button className="view-all-btn">View All</button>
            </div>

            {/* Biographical Information */}
            <div className="card">
              <div className="card-header">
                <h3 style={{ fontWeight: "600"}}>Biographical Information</h3>
              </div>

              <div className="grid-2col">
                <div>
                  <p className="label">Person Id:</p>
                  <p className="value">M1</p>
                </div>

                <div></div>

                <div>
                  <p className="label">Date Of Birth:</p>
                  <p className="value">Sep 15, 1980</p>
                </div>

                <div></div>

                <div>
                  <p className="label">Country Of Birth:</p>
                  <p className="value">United States (USA)</p>
                </div>
              </div>

              <button className="view-all-btn">View All</button>
            </div>

            {/* Address Card */}
            <div className="card">
              <div className="card-header">
                <h3 style={{ fontWeight: "600"}}>Addresses</h3>
                <div style={{ display: "flex", gap: "12px" }}>
                  <AlertTriangle color="#f57c00" />
                  <Edit2 />
                  <RefreshCw />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
