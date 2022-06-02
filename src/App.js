import React from "react"
import Sidebar from "./components/Sidebar/Sidebar"
import Topbar from "./components/Topbar/Topbar"
import "./app.css"
import Home from "./pages/home/Home"
import UserList from "./pages/UserList/UserList"
import Product from "./pages/Products/Products"
import Transaction from "./pages/Transactions/Transactions"
import Report from "./pages/Reports/Report"
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom"
import User from "./pages/User/User"
import NewUser from "./pages/NewUser/NewUser"
import ProductList from "./pages/ProductList/ProductList"
import Newproduct from "./pages/Newproduct/Newproduct"

function App() {
  return (
    <Router>
      <Topbar />
      <div className="container">
        <Sidebar />
        <div className="home">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/userlist" element={<UserList />} />
            <Route path="/product" element={<Product />} />
            <Route path="/productList" element={<ProductList />} />
            <Route path="/transactions" element={<Transaction />} />
            <Route path="/report" element={<Report />} />
            <Route path="/user:userId" element={<User />} />
            <Route path="/Newuser" element={<NewUser />} />
            <Route path="/Newproduct" element={<Newproduct />} />
          </Routes>
        </div>
      </div>
    </Router>
  )
}

export default App
