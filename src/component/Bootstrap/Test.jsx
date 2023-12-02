import {React} from 'react'
import ss from './Testing.css'
const Test = () => {
  return (
    <div>
        {/* <div className='container'>
            <table className='table table-default table-hover'>
              <thead>
              <tr>
                <th>Name</th>
                <th>Age</th>
                <th>Edit</th>
              </tr>
              </thead>
              <tbody>
              <tr>
                <td>sreenu</td>
                <td>21</td>
              </tr>
             <tr>
                <td>Ramu</td>
                <td>23</td>
             </tr>
              </tbody>
            </table>
        </div> */}

        {/* ---------- */}
    {/* <div className='container'>
    <div className='jumbotron'>
       <h1>Hello World!!!!</h1>
       <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Odit, odio commodi distinctio impedit corporis omnis veniam iure labore, natus tenetur velit sed. Eligendi impedit doloribus doloremque. Deleniti ratione aut aliquam?</p>
     </div>
    </div> */}

    {/* -------------------- */}
    {/* <div className="progress">
  <div className="progress-bar progress-bar bg-success progress-bar " role="progressbar" aria-valuenow="80"
  aria-valuemin="0" aria-valuemax="100" style={{width:"60%"}}>
    60% Full
  </div>
  <div className="progress-bar progress-bar bg-warning progress-bar " role="progressbar" aria-valuenow="80"
  aria-valuemin="0" aria-valuemax="100" style={{width:"15%"}}>
     15% Warning
  </div>
  <div className="progress-bar progress-bar bg-danger progress-bar " role="progressbar" aria-valuenow="80"
  aria-valuemin="0" aria-valuemax="100" style={{width:"20%"}}>
    20% Danger
  </div>
</div> */}



    {/*---------------------------PAGINATION-----------  */}
     {/* it is used you have websit with lot of pages and some sort of pagination of each page,  */}
     {/*  active  and disbled classes there.. */}


    {/* <div className='container' >
         <ul className='pagination'>
          <li><a href="#">1</a></li>
          <li className='active' ><a href="#">2</a></li>
          <li className='disabled'><a href="#">3</a></li>
          <li><a href="#">4</a></li>
         </ul>
    </div> */}

{/* --------------------PAGER------------------ */}
{/* it is add the previous and next buttons */}

   {/* <div className='container'>
    <ul className='pager'>
       <li><a href="#">Previous</a></li>
       <li><a href="#">Next</a></li>
    </ul>
   </div> */}

{/* ------------------Dropdowns---------------- */}


    {/* <div className='dropdown'>
    <button type="button" className='btn btn-primary dropdown-toggle' data-toggle="dropdown">Click On </button>
      <ul className='dropdown-menu dropdown-menu-right'>
        <li><a href="">Link1</a></li>
        <li><a href="">Link2</a></li>
        <li><a href="">Link3</a></li>  
      </ul>
</div> */}
      {/* <div className='container'>
        <h1>collapsible button</h1>
        <button type="button" data-toggle="collapse" data-target="#demo" className='btn btn-info'>Collapsible</button>
        <div className='collapse' id="demo">
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi veritatis ex incidunt repudiandae maiores ipsum officia assumenda consequuntur, blanditiis asperiores quas saepe odit possimus praesentium sapiente veniam quae quia aliquid?</p>
        </div>
      </div> */}



      {/* -----------COLLAPSE---------- */}
      {/* IT IS USED TO WHENEVER U HIDE OR SHOW THE SOME SMALL AMOUNT CONTENT */}


      {/* <div className="container">
  <h2>Simple Collapsible</h2>
  <p>Click on the button to toggle between showing and hiding content.</p>
  <button type="button" className="btn btn-info" data-toggle="collapse" data-target="#demo">Simple collapsible</button>
  <div id="demo" className="collapse">
    Lorem ipsum dolor sit amet, consectetur adipisicing elit,
    sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
    quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
  </div>
</div> */}



{/* -------------------- NAV TABS & PILLS  */}
   {/* <div className='container'>
  <ul className='nav nav-pills'>
  <li className='active'><a href="">Home</a></li>
    <li><a href="">Link2</a></li>
  <li><a href="">Link5</a></li>
 <li><a href="#">Link6</a></li>
 </ul>
 
 </div> */}

{/* ---------------Navbars --------- */}
{/* it is used placed the navbar at the top of the page...  and navbar extend the collaps depending on screen size */}
      <nav className='navbar navbar-inverse'>
        <div className='container-fluid'>
        <div className='navbar-header'>
          <a href="#" className='navbar-brand'>WQEBSS!</a>
        </div>
        <ul className='nav nav-pills '>
          <li className='active'><a href="$">home</a></li>
          <li><a href="&">page2</a> </li>
          <li><a href="@">page3</a></li>
          <li><a href="#">page4</a></li>
        </ul>
        <div className=' d-flex justify-content-between'>
            <input type="text" name="" id="" className='form-control' placeholder='search..'/>
            <button className='btn btn-danger'>Submit</button>
        </div>
          <ul className='list-inline  nav navbar-right' >
           <li> <a href='#' style={{fontSize:"14px",color:"green"}}><span className='glyphicon glyphicon-user'> SignUp</span></a></li>
           <li> <a href='' style={{fontSize:"14px",color:"green"}}><span className='glyphicon glyphicon-log-in'> Login</span></a></li>
          </ul>

        </div>
        </nav>

    </div>
  )
}

export default Test