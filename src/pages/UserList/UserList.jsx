import "./userList.css"
import { DataGrid } from "@mui/x-data-grid"
import userEvent from "@testing-library/user-event"
import { DeleteForever } from "@mui/icons-material"
import { UserRows } from "../../dummyData"
import { Link } from "react-router-dom"
import { React, useState } from "react"

export default function UserList() {
  const [data, setData] = useState(UserRows)
  const columns = [
    { field: "id", headerName: "ID", width: 90 },
    {
      field: "User",
      headerName: "User",
      width: 200,
      editable: true,
      renderCell: (params) => {
        return (
          <div className="userlistParam">
            {<img className="userListImg" src={params.row.Avatar} alt="hello" />}
            {params.row.UserName}
          </div>
        )
      },
    },
    {
      field: "email",
      headerName: "Mail",
      width: 200,
      editable: true,
    },
    {
      field: "transaction",
      headerName: "Transactions",
      type: "number",
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
          <div className="userEdit">
            <Link to={"/user" + params.id}>
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
    <div className="userList" style={{ height: 400, width: "100%" }}>
      <DataGrid rows={data} disableSelectionOnClick columns={columns} pageSize={5} rowsPerPageOptions={[8]} checkboxSelection />
    </div>
  )
}
