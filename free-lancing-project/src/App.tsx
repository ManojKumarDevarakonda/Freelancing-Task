import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import Layout from "./layouts/Layout"
import Dashboard from "./pages/Dashboard"
import PersonalData from "./pages/PersonalData"
import Job from "./pages/Job"
import Benefits from "./pages/Benefits"
import Documents from "./pages/Documents"
import TeamDirectory from "./pages/TeamDirectory"
import TimeSheetChart from "./components/dashboard/Timesheets"
import Settings from "./pages/Settings"

function App() {
  return (
    <Router>
      <Layout>
        <Routes>
          <Route path="/" element={<Dashboard />} />
          <Route path="/personal-data" element={<PersonalData />} />
          <Route path="/timesheets" element={<TimeSheetChart />} />
          <Route path="/job" element={<Job />} />
          <Route path="/employee-benefits" element={<Benefits />} />
          <Route path="/employee-documents" element={<Documents />} />
          <Route path="/team-directory" element={<TeamDirectory />} />
          <Route path="/settings" element={<Settings />} />
        </Routes>
      </Layout>
    </Router>
  )
}

export default App
