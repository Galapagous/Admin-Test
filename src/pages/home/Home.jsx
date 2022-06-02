import Chart from "../../components/Chart/Chart"
import FeaturedItem from "../../components/FeaturedItem/FeaturedItem"
import "./home.css"
import { UserData } from "../../dummyData"
import WidgetSM from "../../components/WidgetSm/WidgetSM"
import WidgetLg from "../../components/WidgetLg/WidgetLg"

export default function Home() {
  return (
    <div className="home">
      <FeaturedItem />
      <Chart Udata={UserData} title="Musa Analytics" dataKey="ActiveUser" grid />
      <div className="homeWidget">
        <WidgetSM />
        <WidgetLg />
      </div>
    </div>
  )
}
