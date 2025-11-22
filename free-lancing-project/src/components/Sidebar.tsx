"use client"

import { useNavigate, useLocation } from "react-router-dom"
import {
  UserOutlined,
  CalendarOutlined,
  HeartOutlined,
  FileOutlined,
  TeamOutlined,
  SettingOutlined,
  LogoutOutlined,
} from "@ant-design/icons"
import "./Sidebar.scss"
import { LayoutDashboard, MessagesSquare } from "lucide-react"

const menuItems = [
  { key: '', icon: MessagesSquare, label: "" },
  { key: "/", icon: LayoutDashboard, label: "Dashboard" },
  { key: "/personal-data", icon: UserOutlined, label: "Personal Data" },
  { key: "/timesheets", icon: CalendarOutlined, label: "Timesheets" },
  // { key: "/job", icon: BriefcaseBusiness, label: "Job" },
  { key: "/employee-benefits", icon: HeartOutlined, label: "Employee Benefits" },
  { key: "/employee-documents", icon: FileOutlined, label: "Documents" },
  { key: "/team-directory", icon: TeamOutlined, label: "Team Directory" },
  { key: "/settings", icon: SettingOutlined, label: "Settings" },
  { key: "/logout", icon: LogoutOutlined, label: "Logout" },
]

export default function Sidebar() {
  const navigate = useNavigate()
  const location = useLocation()

  const handleMenuClick = (key: string) => {
    if (key === "/logout") {
      console.log("Logout clicked")
      return
    }
    navigate(key)
  }

  return (
    <aside className={`sidebar`}>
      <div className="sidebar-content">
        {menuItems.map((item) => {
          const Icon = item.icon
          const isActive = location.pathname === item.key
          return (
            <>
              {item.key === '' ?
                <button
                  style={{ paddingBottom: "1rem" }}
                  key={item.key}
                  className={`sidebar-item ${isActive ? "active" : ""}`}
                  onClick={() => handleMenuClick(item.key)}
                  title={item.label}
                >
                  <Icon className="sidebar-icon" size={20} style={{ fontSize: "20px" }} />
                </button> :
                item.key.includes("/logout") ?
                  <button
                    style={{ position: "absolute", bottom: "1rem" }}
                    key={item.key}
                    className={`sidebar-item ${isActive ? "active" : ""}`}
                    onClick={() => handleMenuClick(item.key)}
                    title={item.label}
                  >
                    <Icon className="sidebar-icon" size={18} style={{ fontSize: "18px" }} />
                  </button> :
                  <button
                    key={item.key}
                    className={`sidebar-item ${isActive ? "active" : ""}`}
                    onClick={() => handleMenuClick(item.key)}
                    title={item.label}
                  >
                    <Icon className="sidebar-icon" size={18} style={{ fontSize: "18px" }} />
                  </button>
              }
            </>
          )
        })}
      </div>
    </aside>
  )
}
