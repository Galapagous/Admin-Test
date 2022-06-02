import "./user.css"
import { PermIdentity, Cake, PhoneInTalk, Mail, LocationOn, Publish, NoEncryption } from "@mui/icons-material"
import { Link } from "react-router-dom"

export default function User() {
  return (
    <div className="user">
      <div className="userCreateContainer">
        <h1 className="userTitle">Edit User</h1>
        <Link to="/Newuser">
          <button className="userAddButton">Create</button>
        </Link>
      </div>
      <div className="userInfoContainer">
        <div className="userData">
          <div className="userDataTop">
            <img className="userDataImg" src="https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTU3fHxwZW9wbGV8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60" alt="avatar" />
            <div className="userDataInfo">
              <span className="userDataName">Muh'd Musa</span>
              <span className="userDataJob">MERN Stack</span>
            </div>
          </div>
          <div className="userDataBottom">
            <span className="userDataBottomtitle">Bio</span>
            <div className="userDataBottomInfo">
              <PermIdentity className="userDataBottomIcon" />
              <span className="infoId">musa099</span>
            </div>
            <div className="userDataBottomInfo">
              <Cake className="userDataBottomIcon" />
              <span className="infoId">10/05/1985</span>
            </div>
            <span className="userDataBottomtitle">Contact</span>
            <div className="userDataBottomInfo">
              <PhoneInTalk className="userDataBottomIcon" />
              <span className="infoId">+23481232803</span>
            </div>
            <div className="userDataBottomInfo">
              <Mail className="userDataBottomIcon" />
              <span className="infoId">galapagous09@gmail.com</span>
            </div>
            <div className="userDataBottomInfo">
              <LocationOn className="userDataBottomIcon" />
              <span className="infoId">Ota Nigeria</span>
            </div>
          </div>
        </div>
        <div className="userUpdate">
          <span className="userUpdateTitle">Edit</span>
          <form className="userUpdateForm">
            <div className="userUpdateLeft">
              <div className="userUpdateItem">
                <label className="userUpdateLabel">UserName</label>
                <input type="text" placeholder="musa099" />
              </div>
              <div className="userUpdateItem">
                <label className="userUpdateLabel">Birthday</label>
                <input type="text" placeholder="10/05/1985" />
              </div>
              <div className="userUpdateItem">
                <label className="userUpdateLabel">Phone</label>
                <input type="text" placeholder="+23481232803" />
              </div>
              <div className="userUpdateItem">
                <label className="userUpdateLabel">Email</label>
                <input type="text" placeholder="galapagous09@gmail.com" />
              </div>
              <div className="userUpdateItem">
                <label className="userUpdateLabel">Location</label>
                <input type="text" placeholder="Ota Nigeria" />
              </div>
            </div>
            <div className="userUpdateRight">
              <div className="userUpdateUpload">
                <img className="userUpdateimg" src="https://images.unsplash.com/photo-1532073150508-0c1df022bdd1?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTgyfHxwZW9wbGV8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60" alt="profile pix" />
                <label htmlFor="file">
                  <Publish className="userUploadIcon" />
                </label>
                <input type="file" id="file" style={{ display: "none" }} />
              </div>
              <button className="userUploadButton">Update</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  )
}
