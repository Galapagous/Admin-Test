import "./Products.css"
import Chart from "../../components/Chart/Chart"
import { ProductData } from "../../dummyData"
import { Link } from "react-router-dom"
import { Backup, PanoramaSharp } from "@mui/icons-material"

export default function Products() {
  return (
    <div className="productItems">
      <div className="productTop">
        <span className="productTitle"> Products</span>
        <Link to="/Newproduct">
          <button className="productCreate">Create</button>
        </Link>
      </div>
      <div className="productBottom">
        <div className="productBottomLeft">
          <Chart Udata={ProductData} title="Last 3 months sales" dataKey="Sales" grid />
        </div>
        <div className="productBottomRight">
          <div className="productBottomRightHead">
            <img className="productBottomImg" src="https://images.unsplash.com/photo-1601004890684-d8cbf643f5f2?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8ZnJ1aXR8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60" alt="berry" />
            <span className="ProductBottomRightTittle">Berry Pod</span>
          </div>
          <div className="productBottomRightTail">
            <div className="bottomItems">
              <span className="bottomTitle">ID:</span>
              <span className="bottomText">234</span>
            </div>
            <div className="bottomItems">
              <span className="bottomTitle">Sale:</span>
              <span className="bottomText">2,340</span>
            </div>
            <div className="bottomItems">
              <span className="bottomTitle">Active:</span>
              <span className="bottomText include">yes</span>
            </div>
            <div className="bottomItems">
              <span className="bottomTitle">In Stock:</span>
              <span className="bottomText none">no</span>
            </div>
          </div>
        </div>
      </div>
      <div className="productItemsDown">
        <form className="productDownForm">
          <div className="productDownLeft">
            <div className="productDownFormItem">
              <label className="formLabel">Product Name</label>
              <input type="text" placeholder="Berry Pod" />
            </div>
            <div className="productDownFormItem">
              <label for="stock" className="formLabel">
                In Stock
              </label>
              <select for="name" name="stock" id="stock">
                <option value="yes">Yes</option>
                <option value="no">No</option>
              </select>
            </div>
            <div className="productDownFormItem">
              <label for="active" className="formLabel">
                Active
              </label>
              <select for="active" name="active" id="active">
                <option value="yes">Yes</option>
                <option value="no">No</option>
              </select>
            </div>
          </div>
          <div className="productDownRight">
            <div className="downRightsection">
              <img className="downRightImg" src="https://images.unsplash.com/photo-1601004890684-d8cbf643f5f2?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8ZnJ1aXR8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60" />
              <label htmlFor="file">
                <Backup className="downUpload" />
              </label>
              <input type="file" id="file" style={{ display: "none" }} />
            </div>
            <div className="downLeftsection">
              <button className="downLeftButton">Update</button>
            </div>
          </div>
        </form>
      </div>
    </div>
  )
}
