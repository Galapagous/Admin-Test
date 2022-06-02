import "./newUser.css"

export default function NewUser() {
  return (
    <div className="newUser">
      <span className="newUserTitle">New User</span>
      <form className="newUserItems">
        <div className="newUserItem">
          <label for="Username" className="newUserLabel">
            FullName
          </label>
          <input type="text" for="Username" placeholder="FullName" />
        </div>
        <div className="newUserItem">
          <label for="Email" className="newUserLabel">
            Email
          </label>
          <input type="text" for="Email" placeholder="Example@gmail.com" />
        </div>
        <div className="newUserItem">
          <label for="Password" className="newUserLabel">
            Password
          </label>
          <input type="text" for="Password" placeholder="Password" />
        </div>
        <div className="newUserItem">
          <label for="Phone" className="newUserLabel">
            Phone
          </label>
          <input type="text" for="Phone" placeholder="+234812345678" />
        </div>
        <div className="newUserItem">
          <label for="Address" className="newUserLabel">
            Address
          </label>
          <input type="text" for="Address" placeholder="Address" />
        </div>
        <div className="newUserGender">
          <span>Gender</span>
          <label>Male</label>
          <input id="gender" name="gender" value="male" type="radio" />
          <label>Female</label>
          <input id="gender" name="gender" value="female" type="radio" />
          <label>Others</label>
          <input id="gender" name="gender" value="Others" type="radio" />
        </div>
        <div className="newUserActive">
          <label>Active</label>
          <select className="newUserSelect" name="actice" id="active">
            <option value="yes">Yes</option>
            <option value="no">No</option>
          </select>
        </div>
        <button className="newUserCreate" type="submit">
          Create
        </button>
      </form>
    </div>
  )
}
