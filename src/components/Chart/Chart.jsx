import "./chart.css"
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from "recharts"

export default function Chart({ title, Udata, dataKey, grid }) {
  const data = [
    {
      name: "Jan",
      ActiveUser: 4000,
    },
    {
      name: "Feb",
      ActiveUser: 3000,
    },
    {
      name: "Mar",
      ActiveUser: 2000,
    },
    {
      name: "Apr",
      ActiveUser: 2780,
    },
    {
      name: "May",
      ActiveUser: 1890,
    },
    {
      name: "Jun",
      ActiveUser: 2390,
    },
    {
      name: "Jul",
      ActiveUser: 3490,
    },
    {
      name: "Aug",
      ActiveUser: 3490,
    },
    {
      name: "Sep",
      ActiveUser: 3110,
    },
    {
      name: "Oct",
      ActiveUser: 3380,
    },
    {
      name: "Nov",
      ActiveUser: 3600,
    },
    {
      name: "Dec",
      ActiveUser: 3759,
    },
  ]
  return (
    <div className="chart">
      <h3 className="chartTitle">{title}</h3>
      <ResponsiveContainer width="100%" aspect={4 / 1}>
        <LineChart data={Udata}>
          <XAxis dataKey="name" stroke="#5550bd" />
          <Line type="monotone" dataKey={dataKey} stroke="#5550bd" />
          <Tooltip />
          {grid && <CartesianGrid stroke="#eodfdf" strokeDasharray="5 5" />}
        </LineChart>
      </ResponsiveContainer>
      <div className="chartDiagram"></div>
    </div>
  )
}
