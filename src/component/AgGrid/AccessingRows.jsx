import { AgGridReact } from 'ag-grid-react'
import React, { useCallback, useRef } from 'react'
import 'ag-grid-community/styles/ag-grid.css';
import 'ag-grid-community/styles/ag-theme-alpine.css'

const AccessingRows = () => {

    const gridApi=useRef()
    const columns=[
        {
            headerName:"SI no",
            field:"Sino",
            editable:false,
            // pinned:true,
        },
        {
            headerName:"Name",
            field:"name",
        },
        {
            headerName:"Age",
            field:"age"
        }

    ]
    const coloumnsExcluded=[
        {
            field:"Name",
        },{ field:"age"},{field:"phoneNum"},{field:"email"}

    ]
    const rowdata=[
        {
            Sino:"1",
            name:"sreenu",
            age:"21",
        },
        {
            Sino:"2",
            name:"Ramu",
            age:"22",
        },
        {
            Sino:"3",
            name:"Vaishu",
            age:"23",
        }

    ]
    const defaultColumns={
        editable:true,
        sortable:true,
         selectable:true,
        enableRowGroup:true,
        resizable:true,
    }

    const ex=useCallback(()=>{
        gridApi.current.api.setColumnDefs(coloumnsExcluded);
    })
    const In=useCallback(()=>{
        gridApi.current.api.setColumnDefs(columns)
    
    })
    console.log(gridApi.current)
  return (
    <div>
        <div>
        </div>
    <div className='ag-theme-alpine'  style={{width:"800px", height:"300px"}}>
       <AgGridReact rowData={rowdata} columnDefs={columns}  defaultColDef={defaultColumns}  rowGroupPanelShow="always"
         ref={gridApi}
       
       />
       <button onClick={ex}>Excluded</button>
        <button onClick={In}>Included</button>
    </div>
    </div>
  )
}

export default AccessingRows
