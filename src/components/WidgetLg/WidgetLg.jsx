import "./widgetLg.css"
import customer1 from "../../Images/saka.png"
import customer2 from "../../Images/simbi.png"
import customer3 from "../../Images/solomon.png"
import customer4 from "../../Images/Omipidan.png"
import customer5 from "../../Images/samuel.png"
import customer6 from "../../Images/micheal.png"

export default function WidgetLg() {
  const Button = ({ type }) => {
    return (
      <div>
        <button className={"widgetLgButton " + type}>{type}</button>
      </div>
    )
  }
  return (
    <div className="widgetLG">
      <h3 className="widgetLgTitle">Latest Transactions</h3>
      <table className="widgetLgTable">
        <tr className="widgetLgTableRow">
          <th className="widgetLgTablehead">Customer</th>
          <th className="widgetLgTablehead">Date</th>
          <th className="widgetLgTablehead">Amount</th>
          <th className="widgetLgTablehead">Status</th>
        </tr>
        <tr className="widgetLgTableRow">
          <td className="widjetLgTableData">
            <div className="widgetLgTableImage">
              <img className="widgetLgimage" src={customer1} alt="customer" />
            </div>
            <span className="widjectLgCustomerName">Saka Omoyemi</span>
          </td>
          <td className="widjetTableData">23rd May 2022</td>
          <td className="widjetTableData">$700</td>
          <td className="widjetTableData">
            <Button type="Approved" className="widgetLgButton" />
          </td>
        </tr>
        <tr className="widgetLgTableRow">
          <td className="widjetLgTableData">
            <div className="widgetLgTableImage">
              <img className="widgetLgimage" src={customer2} alt="customer" />
            </div>
            <span className="widjectLgCustomerName">Simbi Bello</span>
          </td>
          <td className="widjetTableData">20th May 2022</td>
          <td className="widjetTableData">$150</td>
          <td className="widjetTableData">
            <Button type="Pending" />
          </td>
        </tr>
        <tr className="widgetLgTableRow">
          <td className="widjetLgTableData">
            <div className="widgetLgTableImage">
              <img className="widgetLgimage" src={customer3} alt="customer" />
            </div>
            <span className="widjectLgCustomerName">Solomon Temi</span>
          </td>
          <td className="widjetTableData">15th march 2022</td>
          <td className="widjetTableData">$300</td>
          <td className="widjetTableData">
            <Button type="Decline" />
          </td>
        </tr>
        <tr className="widgetLgTableRow">
          <td className="widjetLgTableData">
            <div className="widgetLgTableImage">
              <img className="widgetLgimage" src={customer4} alt="customer" />
            </div>
            <span className="widjectLgCustomerName">Omipidan Abdulganiu</span>
          </td>
          <td className="widjetTableData">19rd Mar 2022</td>
          <td className="widjetTableData">$800</td>
          <td className="widjetTableData">
            <Button type="Approved" />
          </td>
        </tr>
        <tr className="widgetLgTableRow">
          <td className="widjetLgTableData">
            <div className="widgetLgTableImage">
              <img className="widgetLgimage" src={customer5} alt="customer" />
            </div>
            <span className="widjectLgCustomerName">Samuel Ipinlaye</span>
          </td>
          <td className="widjetTableData">15rd May 2022</td>
          <td className="widjetTableData">$300</td>
          <td className="widjetTableData">
            <Button type="Pending" />
          </td>
        </tr>
        <tr className="widgetLgTableRow">
          <td className="widjetLgTableData">
            <div className="widgetLgTableImage">
              <img className="widgetLgimage" src={customer6} alt="customer" />
            </div>
            <span className="widjectLgCustomerName">Micheal Olutayo</span>
          </td>
          <td className="widjetTableData">10rd May 2022</td>
          <td className="widjetTableData">$100</td>
          <td className="widjetTableData">
            <Button type="Decline" />
          </td>
        </tr>
      </table>
    </div>
  )
}
