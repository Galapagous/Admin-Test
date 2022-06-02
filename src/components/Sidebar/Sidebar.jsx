import React from "react"
import "./sidebar.css"
import HomeIcon from "@mui/icons-material/Home"
import TimelineIcon from "@mui/icons-material/Timeline"
import TrendingUpIcon from "@mui/icons-material/TrendingUp"
import GroupIcon from "@mui/icons-material/Group"
import InventoryIcon from "@mui/icons-material/Inventory"
import AttachMoneyIcon from "@mui/icons-material/AttachMoney"
import BarChartIcon from "@mui/icons-material/BarChart"
import EmailIcon from "@mui/icons-material/Email"
import FeedbackIcon from "@mui/icons-material/Feedback"
import ForumIcon from "@mui/icons-material/Forum"
import WorkOutlineIcon from "@mui/icons-material/WorkOutline"
import ReportIcon from "@mui/icons-material/Report"
import { Link } from "react-router-dom"

export default function Sidebar() {
  return (
    <div className="sidebar">
      <div className="sidebarWrapper">
        <div className="sidebarmenu">
          <h3 className="sidebarTitle">DASHBOARD</h3>
          <ul className="sidebarList">
            <li className="sidebarListItem active">
              <HomeIcon className="sidebarIcon" />
              <Link to="/">Home</Link>
            </li>
            <li className="sidebarListItem">
              <TimelineIcon className="sidebarIcon" />
              Analytics
            </li>
            <li className="sidebarListItem">
              <TrendingUpIcon className="sidebarIcon" />
              Sales
            </li>
          </ul>
        </div>
        <div className="sidebarmenu">
          <h3 className="sidebarTitle">QUICK MENU</h3>
          <ul className="sidebarList">
            <li className="sidebarListItem active">
              <GroupIcon className="sidebarIcon" />
              <Link to="/userlist">Users</Link>
            </li>
            <li className="sidebarListItem">
              <InventoryIcon className="sidebarIcon" />
              <Link to="/productList">Product</Link>
            </li>
            <li className="sidebarListItem">
              <AttachMoneyIcon className="sidebarIcon" />
              <Link to="/transactions">Transactions</Link>
            </li>
            <li className="sidebarListItem">
              <BarChartIcon className="sidebarIcon" />
              <Link to="/report">Report</Link>
            </li>
          </ul>
        </div>
        <div className="sidebarmenu">
          <h3 className="sidebarTitle">NOTIFICATION</h3>
          <ul className="sidebarList">
            <li className="sidebarListItem active">
              <EmailIcon className="sidebarIcon" />
              Mail
            </li>
            <li className="sidebarListItem">
              <FeedbackIcon className="sidebarIcon" />
              Feedback
            </li>
            <li className="sidebarListItem">
              <ForumIcon className="sidebarIcon" />
              Message
            </li>
          </ul>
        </div>
        <div className="sidebarmenu">
          <h3 className="sidebarTitle">STAFF</h3>
          <ul className="sidebarList">
            <li className="sidebarListItem active">
              <WorkOutlineIcon className="sidebarIcon" />
              Manage
            </li>
            <li className="sidebarListItem">
              <TimelineIcon className="sidebarIcon" />
              Analytics
            </li>
            <li className="sidebarListItem">
              <ReportIcon className="sidebarIcon" />
              Report
            </li>
          </ul>
        </div>
      </div>
    </div>
  )
}
