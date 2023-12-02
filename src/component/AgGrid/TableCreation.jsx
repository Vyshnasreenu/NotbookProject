
import React, { memo, useCallback, useEffect, useMemo, useRef, useState } from 'react';
import { render } from 'react-dom';
import { AgGridReact } from 'ag-grid-react';

import 'ag-grid-community/styles/ag-grid.css';
import 'ag-grid-community/styles/ag-theme-alpine.css';
 import 'ag-grid-enterprise';
const TableCreation = () => {

// const Mycomp=params=>{
//   const ourcomp=useRef(1)
//    return(
//        <>
//         <b>({ourcomp.current++})</b>
//         {params.value}
//        </>
//    )
// }
  
const columnDefs=[
  {
    field:"make"
  },
  {
    field:"model"
  },{
    field:"price"
  }
]

  const [rowData,setRowData] = useState([
    { id: "1", make: 'Toyota', model: 'Celica', price: 35000 },
    { id:"2", make: 'Ford', model: 'Mondeo', price: 32000 },
    { id:"3", make: 'Porsche', model: 'Boxter', price: 72000 },
  ]);
  // useEffect(() => {
  //   fetch('https://www.ag-grid.com/example-assets/row-data.json')
  //   .then(result => result.json())
  //   .then(rowData => setRowData(rowData))
  // }, []);

  const aggrid=useRef()
console.log(aggrid);



  const rowId=useCallback((params)=>{
     console.log(params)
     return params.data.id;
  })
  const columndefs =[
     {
       headerName:"GroupA",
         children:[
           { field: "athlet", columnGroupShow: 'closed'},
           { field: "rama"},
           { field: "ravana"}
         ]

     },
     {
      headerName: 'Sports Results',
      children: [
          { field: 'sport' },
          { field: 'total' },
          { field: 'gold' , },
          { field: 'silver', columnGroupShow: 'open' },
          { field: 'bronze', columnGroupShow: 'open' },
      ]
  }
  ];
  const rowdata=[
     { athlet :1, rama: 5, ravana: 9}
  ]
  
  // const push= useCallback((e)=>{
  //   // console.log(e)
  //   aggrid.current.api.deselectAll();
   
  // },[])

const defaultDef=useMemo(()=>({
  sortable:true,
  filter:true,
  editable:true,
  // cellRenderer: memo(Mycomp),
  enableRowGroup:true
}),)
  return (
    <div className="ag-theme-alpine" style={{ height: 400, width:1000 }}>
      <AgGridReact rowData={rowdata} 
      columnDefs={columndefs}   // these are bound props, so can use anything in React state or props

      //  ref={aggrid}                  //  useful for accessing the grid's API

      //  defaultColDef={defaultDef}

      //  getRowId={rowId}
       
      //  animateRows={true}

        // rowGroupPanelShow="always"

      //  rowSelection="multiple" // simple attributes, not bound to any state or prop
       ></AgGridReact>
      <button onClick={rowId}>PushME</button>
    </div>
  );
};

export default TableCreation;