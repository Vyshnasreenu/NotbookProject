import { AgGridReact } from 'ag-grid-react'
import React, { useRef, useState } from 'react'
import 'ag-grid-community/styles/ag-grid.css';
import 'ag-grid-community/styles/ag-theme-alpine.css';
const GroupCreation = () => {
    const columns=[
        {
            headerName: "Group A",
            children:[
                {
                    id:1,
                    field:"MI",
                    // rowGroup:true
                },
                {
                    id:2,
                    field:"CSK",
                },
                {
                    id:3,
                    field:"RR"
                }
            ]
        },
        {
            headerName: "Group B",
            children:[
                {
                    id:4,
                    field:"DD",
                    // pinned:"left"
                    
                },
                {
                    id:5,
                    field:"KXIP",
                },
                {
                    id:6,
                    field:"SHD"
                }
            ]
        }
    ]
    const rows=[
        { MI: "mumbai indians", rowPinned:true, CSK:'chennai super kings', RR:' Rajastan royals',DD:"DelhiCaptials", KXIP: "Kings leven punjab", SHD:"Hyderbad"}
    ]
   const defaultColumns={
      resizable:true,
      editable:true,
      agTotalRowCountComponent:true,
    selectable:true
    //   enableRowGroup:true
    
   }
   const [gridoption,setGridOption]=useState({
     columnDefs:columns,
     rowData:rows,
     defaultColDef:defaultColumns,
    
   })

const cellclick=(params)=>{
     console.log("cell clicked!!",params)
    //  console.log(params.data)
}

    return(
        <div className='ag-theme-alpine' style={{height:300, width:"100%" }}>
            <AgGridReact 
            gridOptions={gridoption}  
            onCellClicked={cellclick}
            //    rowGroupPanelShow='always'
            />
          <button onClick>Click me</button>
        </div>
    )
}

export default GroupCreation