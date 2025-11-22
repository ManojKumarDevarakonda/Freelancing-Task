import { Card } from "antd"
import "./EmployeeBenefits.scss";
import {
  Gift,
  CalendarCheck,
  Plane,
  Clock,
  GraduationCap,
  HeartPulse,
} from "lucide-react";

const benefits = [
  {
    icon: <Gift />,
    title: "6-Month Performance Bonus",
    desc: "Employees receive a performance-based bonus every 6 months.",
  },
  {
    icon: <CalendarCheck />,
    title: "Festival Celebrations",
    desc: "Company celebrates all major festivals with gifts & events.",
  },
  {
    icon: <Plane />,
    title: "Annual Company Trips",
    desc: "Fully sponsored team trips every year to refresh & bond.",
  },
  {
    icon: <Clock />,
    title: "Extra Hours Bonus",
    desc: "Employees get paid extra for overtime and weekend work.",
  },
  {
    icon: <GraduationCap />,
    title: "Professional Growth Support",
    desc: "Free training, certifications, and skill-building programs.",
  },
  {
    icon: <HeartPulse />,
    title: "Health Insurance",
    desc: "Medical insurance for employees and their family members.",
  },
];
export default function Benefits() {
  return (
    <Card bordered={false}>
    <div className="benefits-container">
      <div className="benefits-grid">
        {benefits.map((item, index) => (
          <div className="benefit-card" key={index}>
            <div className="benefit-icon">{item.icon}</div>
            <h3 className="benefit-title">{item.title}</h3>
            <p className="benefit-desc">{item.desc}</p>
          </div>
        ))}
      </div>
    </div>
    </Card>
  )
}