import { Row, Col } from "antd"
import CurrentMonth from "../components/dashboard/CurrentMonth"
import Timesheets from "../components/dashboard/Timesheets"
import TeamDirectory from "../components/dashboard/TeamDirectory"
import TasksOverview from "../components/dashboard/TasksOverview"
import "./Dashboard.scss"

export default function Dashboard() {
  return (
    <div className="dashboard">
      <Row gutter={[24, 24]} style={{ width:"100%", height:"auto"}}>
        <Col xs={24} sm={24} md={10} lg={10}>
          <CurrentMonth />
        </Col>
        <Col xs={24} sm={24} md={14} lg={14}>
          <Timesheets />
        </Col>
      </Row>
      <Row gutter={[24, 24]} style={{width:"100%", height:"auto"}}>
        <Col xs={24} sm={24} md={10} lg={10}>
          <TeamDirectory />
        </Col>
        <Col xs={24} sm={24} md={14} lg={14}>
          <TasksOverview />
        </Col>
      </Row>
    </div>
  )
}
