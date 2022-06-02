import React from "react"
import { ReactDOM } from "react-dom"
import NotificationsNoneIcon from "@mui/icons-material/NotificationsNone"
import LanguageIcon from "@mui/icons-material/Language"
import SettingsIcon from "@mui/icons-material/Settings"
import Musa from "../../Images/MusaThree.png"

import "../Topbar/topbar.css"

export default function Topbar() {
  return (
    <div className="topbar">
      <div className="topbarwrapper">
        <div className="topleft">
          <div className="logo">
            <span>Muh'd Musa</span>
          </div>
        </div>
        <div className="topright">
          <div className="topIconsContainer">
            <div className="icon">
              <NotificationsNoneIcon />
              <span>3</span>
            </div>
            <div className="icon">
              <LanguageIcon />
              <span>3</span>
            </div>
            <div className="icon">
              <SettingsIcon />
              <span>3</span>
            </div>
          </div>
          <div className="topAvatar">
            <img src={Musa} alt="profile img" />
          </div>
        </div>
      </div>
    </div>
  )
}
