import { Card } from "antd"
import { useState } from "react";
import './Documents.scss'

export default function Documents() {
  const [activeTab, setActiveTab] = useState("Education");

  const educationDocs = [
    { name: "Bachelor Degree", type: "PDF", date: "2020-05-15", link: "/downloads/bachelor.pdf" },
    { name: "Master Degree", type: "PDF", date: "2022-07-05", link: "/downloads/master.pdf" },
  ];

  const workDocs = [
    { name: "Work Visa", type: "PDF", date: "2022-01-10", link: "/downloads/work-visa.pdf" },
    { name: "Work Permit", type: "PDF", date: "2022-01-10", link: "/downloads/work-permit.pdf" },
    { name: "EMP Health Card", type: "PDF", date: "2022-01-10", link: "/downloads/emp-health-card.pdf" },
  ];

  const personalDocs = [
    { name: "Passport", type: "PDF", date: "2019-08-20", link: "/downloads/passport.pdf" },
    { name: "Green Card", type: "PDF", date: "2019-08-20", link: "/downloads/green-card.pdf" },
    { name: "Emp ID Card", type: "PDF", date: "2019-08-20", link: "/downloads/emp-card.pdf" },
  ];

  const renderDocs = (docs:any) => {
    return docs.map((doc:any, index:any) => (
      <div key={index} className="doc-item">
        <div>
          <strong>{doc.name}</strong> ({doc.type}) - {doc.date}
        </div>
        <div className="doc-actions">
          <a href={doc.link} target="_blank" rel="noopener noreferrer" className="view-btn">
            View
          </a>
          <a href={doc.link} download className="download-btn">
            Download
          </a>
        </div>
      </div>
    ));
  };
  return (
    // <Card bordered={false}>
      <div className="documents-container">
        <div className="tabs">
          <button
            className={activeTab === "Education" ? "tab active" : "tab"}
            onClick={() => setActiveTab("Education")}
          >
            Education
          </button>
          <button
            className={activeTab === "Work Authorization" ? "tab active" : "tab"}
            onClick={() => setActiveTab("Work Authorization")}
          >
            Work Authorization
          </button>
          <button
            className={activeTab === "Personal Documents" ? "tab active" : "tab"}
            onClick={() => setActiveTab("Personal Documents")}
          >
            Personal Documents
          </button>
        </div>

        <div className="tab-content">
          {activeTab === "Education" && renderDocs(educationDocs)}
          {activeTab === "Work Authorization" && renderDocs(workDocs)}
          {activeTab === "Personal Documents" && renderDocs(personalDocs)}
        </div>
      </div>
    // </Card>
  )
}