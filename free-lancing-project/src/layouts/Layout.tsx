import type React from "react"
import Sidebar from "../components/Sidebar"
import Header from "../components/Header"
import "./Layout.scss"

export default function Layout({ children }: { children: React.ReactNode }) {

  return (
    <div className="layout-container">
      <Sidebar/>
      <div className="layout-main">
        <Header />
        <main className="layout-content">{children}</main>
      </div>
    </div>
  )
}
