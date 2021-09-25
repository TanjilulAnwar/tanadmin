import "./productList.css"
import { DataGrid } from '@mui/x-data-grid';
import { DeleteOutline } from "@material-ui/icons";
import { productRows } from "../../dummyData";
import { Link } from "react-router-dom";
import {useState} from "react";
import React from "react";



export default function ProductList() {
   const[data, setData] = useState(productRows);

   const handleDelete = (id) => {
       setData(data.filter((item) => item.id !== id));
   }

   const columns = [
        { field: 'id', headerName: 'ID', width: 100 },
        { field: 'name', headerName: 'Product', width: 130 },
        { field: 'user', headerName: 'Product', width: 200, renderCell: (params)=>{
            return(
                <div className="productListItem">
                    <img className="productListImg" src={params.row.img} alt=""/>
                    {params.row.name}
                </div>
    
                
            )
        } },
        { field: 'stock', headerName: 'Stock', width: 130 },
        {
          field: 'status',
          headerName: 'Status',
          width: 130,
        },
        {
          field: 'price',
          headerName: 'Price',
          width: 160,
         
        },
        {
            field: 'action',
            headerName: 'Action',
            width: 160,
            renderCell: (params)=>{
                return(
                <React.Fragment>
                <Link to={"/product/"+params.row.id}>
                <button className="productListEdit">Edit</button>
                </Link>
                 <DeleteOutline className="productListDelete" onClick={()=>handleDelete(params.row.id)}/>
                 </React.Fragment>
    
                )
            } 
           
          },
      ];





    return (
        <div className="productList">
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
