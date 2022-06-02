import "./featuredItem.css"
import { ArrowUpward, ArrowDownward } from "@mui/icons-material"

export default function FeaturedItem() {
  return (
    <div className="featuredItems">
      <div className="featurecard">
        <span className="featuredItemTitle">Revenue</span>
        <div className="featuredItemMoney">
          <span className="money">$11,45</span>
          <span className="rate">
            -4.5 <ArrowDownward className="arrowIcon negative" />
          </span>
        </div>
        <span className="sub">Compared to last month</span>
      </div>
      <div className="featurecard">
        <span className="featuredItemTitle">Cost</span>
        <div className="featuredItemMoney">
          <span className="money">$21,45</span>
          <span className="rate">
            -7.5 <ArrowDownward className="arrowIcon negative" />
          </span>
        </div>
        <span className="sub">Compared to last month</span>
      </div>
      <div className="featurecard">
        <span className="featuredItemTitle">Sales</span>
        <div className="featuredItemMoney">
          <span className="money">$18,45</span>
          <span className="rate">
            +4.5 <ArrowUpward className="arrowIcon" />
          </span>
        </div>
        <span className="sub">Compared to last month</span>
      </div>
    </div>
  )
}
