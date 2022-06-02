import "./productList.css"
import { DataGrid } from "@mui/x-data-grid"
import { DeleteForever } from "@mui/icons-material"
import { ProductRows } from "../../dummyData"
import { Link } from "react-router-dom"
import { React, useState } from "react"

export default function ProductList() {
  const [data, setData] = useState(ProductRows)
  const columns = [
    { field: "id", headerName: "ID", width: 90 },
    {
      field: "product",
      headerName: "Product",
      width: 200,
      renderCell: (params) => {
        return (
          <div className="productlistParam">
            {<img className="productListImg" src={params.row.Img} alt="hello" />}
            {params.row.ProductName}
          </div>
        )
      },
    },
    {
      field: "stock",
      headerName: "Stock",
      width: 200,
      editable: true,
    },
    {
      field: "status",
      headerName: "Status",
      width: 170,
      editable: true,
    },
    {
      field: "action",
      headerName: "Action",
      width: 170,
      renderCell: (params) => {
        function handleDelete(id) {
          setData(
            data.filter((item) => {
              return item.id != id
            })
          )
        }
        return (
          <div className="productEdit">
            <Link to="/product">
              <button className="editButton">Edit</button>
            </Link>

            <DeleteForever
              className="deleteButton"
              onClick={() => {
                handleDelete(params.id)
              }}
            />
          </div>
        )
      },
    },
  ]
  return (
    <div className="productList">
      <span className="productListTitle">Product List</span>
      <div className="productListItems" style={{ height: 400, width: "100%" }}>
        <DataGrid rows={data} disableSelectionOnClick columns={columns} pageSize={5} rowsPerPageOptions={[8]} checkboxSelection />
      </div>
    </div>
  )
}
