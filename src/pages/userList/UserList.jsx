import "./userList.css"
import { DataGrid } from '@mui/x-data-grid';
import { DeleteOutline } from "@material-ui/icons";
import { userRows } from "../../dummyData";
import { Link } from "react-router-dom";
import {useState} from "react";
import React from "react";
  
  
  
export default function UserList() {

const [data, setData] = useState(userRows)

const handleDelete=(id)=>{
  setData(data.filter(item=>item.id!== id))
}

    const columns = [
        { field: 'id', headerName: 'ID', width: 100 },
        { field: 'username', headerName: 'User Name', width: 130 },
        { field: 'user', headerName: 'User Name', width: 200, renderCell: (params)=>{
            return(
                <div className="userListUser">
                    <img className="userListImg" src={params.row.avatar} alt=""/>
                    {params.row.username}
                </div>
    
                
            )
        } },
        { field: 'email', headerName: 'Email', width: 130 },
        {
          field: 'status',
          headerName: 'Status',
          width: 130,
        },
        {
          field: 'transaction',
          headerName: 'Transactions',
          width: 160,
         
        },
        {
            field: 'action',
            headerName: 'Action',
            width: 160,
            renderCell: (params)=>{
                return(
                <React.Fragment>
                <Link to={"/user/"+params.row.id}>
                <button className="userListEdit">Edit</button>
                </Link>
                 <DeleteOutline className="userListDelete" onClick={()=>handleDelete(params.row.id)}/>
                 </React.Fragment>
    
                )
            } 
           
          },
      ];



    return (
        <div className="userList">
        <DataGrid
        rows={data}
        disableSelectionOnClick
        columns={columns}
        pageSize={10}
        rowsPerPageOptions={[5]}
        checkboxSelection
      />
        </div>
    )
}

