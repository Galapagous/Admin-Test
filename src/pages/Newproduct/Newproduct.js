import React from "react"
import "./newproduct.css"

export default function Newproduct() {
  return (
    <div className="newProduct">
      <div className="newProduct">
        <span className="newProductTitle">New Product</span>
        <div className="newProductUplaod">
          <input type="file" />
        </div>
        <form className="newProductItems">
          <div className="newProductItem">
            <label for="Productname" className="newProductLabel">
              Name
            </label>
            <input type="text" for="Productname" placeholder="FullName" />
          </div>
          <div className="newProductItem">
            <label for="Email" className="newProductLabel">
              Stock
            </label>
            <input type="text" for="Email" placeholder="Example@gmail.com" />
          </div>

          <div className="newProductActive">
            <label>Active</label>
            <select className="newProductSelect" name="actice" id="active">
              <option value="yes">Yes</option>
              <option value="no">No</option>
            </select>
          </div>
          <button className="newProductCreate" type="submit">
            Create
          </button>
        </form>
      </div>
    </div>
  )
}
