import "./widgetSm.css"
import Waqas from "../../Images/alfa.jpg"
import Musa2 from "../../Images/dayo.jpg"
import Musa3 from "../../Images/chavan.png"
import Musa1 from "../../Images/david.png"
import MusaThree from "../../Images/MusaThree.png"
import { VisibilitySharp } from "@mui/icons-material"

export default function WidgetSM() {
  return (
    <div className="widgetSM">
      <span className="userSmallTitle">New Join Members</span>
      <ul className="userSmallList">
        <li className="userSmallLiistItem">
          <img src={Waqas} alt="new user" className="widgetImage" />
          <div className="userSmallDetails">
            <span className="userSmallName">Abul Waqas</span>
            <span className="userSmallCareer">Software Engineer</span>
          </div>
          <button className="add">
            <VisibilitySharp className="visibility" />
            Display
          </button>
        </li>
        <li className="userSmallLiistItem">
          <img src={Musa3} alt="new user" className="widgetImage" />
          <div className="userSmallDetails">
            <span className="userSmallName">Salami Abdurahman</span>
            <span className="userSmallCareer">Web Developer</span>
          </div>
          <button className="add">
            <VisibilitySharp />
            Display
          </button>
        </li>
        <li className="userSmallLiistItem">
          <img src={Musa2} alt="new user" className="widgetImage" />
          <div className="userSmallDetails">
            <span className="userSmallName">Balogun Tosin</span>
            <span className="userSmallCareer">Dev-Ops</span>
          </div>
          <button className="add">
            <VisibilitySharp />
            Display
          </button>
        </li>
        <li className="userSmallLiistItem">
          <img src={Musa1} alt="new user" className="widgetImage" />
          <div className="userSmallDetails">
            <span className="userSmallName">Nwachukwu Promise</span>
            <span className="userSmallCareer">Cyber Security</span>
          </div>
          <button className="add">
            <VisibilitySharp />
            Display
          </button>
        </li>
        <li className="userSmallLiistItem">
          <img src={MusaThree} alt="new user" className="widgetImage" />
          <div className="userSmallDetails">
            <span className="userSmallName">Micheal Jonathan</span>
            <span className="userSmallCareer">System Admin</span>
          </div>
          <button className="add">
            <VisibilitySharp />
            Display
          </button>
        </li>
      </ul>
    </div>
  )
}
