import { Card } from "antd"
import "./TeamDirectory.scss";

const teamHierarchy = {
  name: "Alice J.",
  role: "HR Director",
  phone: "12345678909",
  email: "Alice@business.com",
  img: "https://randomuser.me/api/portraits/women/44.jpg",
  children: [
    {
      name: "Bob K.",
      role: "Recruitment Lead",
      phone: "12345678900",
      email: "Bob@business.com",
      img: "https://randomuser.me/api/portraits/men/45.jpg",
      children: [
        {
          name: "Molly Huddleston",
          role: "Marketing Manager",
          dept: "Market Research (5000131)",
          img: "https://i.pravatar.cc/150?img=5",
        },
      ],
    },
    {
      name: "Charlie L.",
      role: "Data Analyst",
      phone: "12345678900",
      email: "Charlie@business.com",
      img: "https://randomuser.me/api/portraits/men/46.jpg",
    },
    {
      name: "Diana M.",
      role: "UX Designer",
      phone: "12345678900",
      email: "Diana@business.com",
      img: "https://randomuser.me/api/portraits/women/47.jpg",
    },
  ],
};

export default function TeamDirectory() {
  const renderTree = (node:any) => (
  <ul>
    <li>
      <div className="node-card">
        <img src={node.img} alt={node.name} className="node-img" />
        <div className="node-details">
          <strong>{node.name}</strong> - {node.role}
          <div className="node-contact">
            <span>📞 {node.phone}</span> | <span>✉️ {node.email}</span>
          </div>
        </div>
      </div>

      {node.children && node.children.length > 0 && (
        <div className="children">
          {node.children.map((child:any, index:any) => (
            <div key={index}>{renderTree(child)}</div>
          ))}
        </div>
      )}
    </li>
  </ul>
);
  return (
    <Card bordered={false}>      
      {renderTree(teamHierarchy)}
    </Card>
  )
}