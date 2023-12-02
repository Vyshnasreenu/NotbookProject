import { AgGridReact } from 'ag-grid-react'
import React, { useRef } from 'react'

const GridANDColApi = () => {
    const GridApi=useRef()
    console.log(GridApi)
    const mylisten=()=>{
        const api=GridApi.current
        console.log(api)
        if(api===null ){ return;}

        GridApi.api.deselectAll();
        // GridApi.columnApi.resetColumnState();
    }
   const gridOptions={
      // pagination:true,
    onRowClicked: event => {console.log("OnRowClickedevent")},
      
   }
  return (
    <div>
        <button onClick={mylisten}>Do something</button>
        <AgGridReact
        //   ref={GridApi}
        //   onGridReady={onready}
        gridOptions={gridOptions}
        />
    </div>
  )
}

export default GridANDColApi