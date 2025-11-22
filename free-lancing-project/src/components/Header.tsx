import { Avatar } from "antd"
import "./Header.scss"
import { useLocation } from "react-router-dom"

export default function Header() {
  const location = useLocation()
  return (
    <header className="header">
      <div className="header-left">
        <h1 className="header-title">
          {location.pathname === "/"
            ? "Dashboard / Employee Overview"
            : location.pathname
                .replace(/^\/|\//g, " ")
                .replace(/-/g, " ")
                .replace(/\b\w/g, (c) => c.toUpperCase())}
        </h1>
      </div>
      <div className="header-right" onClick={() => window.location.href = "/personal-data"}>
        <Avatar src="https://i.pravatar.cc/150?img=5" size={30} />
      </div>
    </header>
  )
}
