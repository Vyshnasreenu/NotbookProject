import { AgGridReact } from 'ag-grid-react'
import React from 'react'

const MasterGrid = () => {
    const rowData=[
        {
          id:"1",
          courseCategory:"Open Elective",
          course:"Bsc",
        },
        {
            id:"2",
            courseCategory:"Close Elective",
            course:"Bcom"
        },
    
    ]
    const columns=[
        {
            headerName:"Sl no",
            field:"slno",
            valueGetter:"node.rowIndex+1",
            width:90
        },
        {
            headerName:"CourseCategory",
            field:"courseCategory",
            width:150,
            // cellRenderer:"agGroupCellRenderer"
               cellRenderer:'agGroupCellRenderer'
        },
        {
            headerName:"Course",
            field:'course',
            width:100
        }
    ]
    const defalutcol=[
        {
            flex:1
        }
    ]
      return (
        <div className='ag-theme-alpine' style={{height:"200px",width:"50%"}}>
          <AgGridReact 
          columnDefs={columns}
          rowData={rowData}
    defaultColDef={defalutcol}
          />
       
        </div>
      )
}

export default MasterGrid