/* eslint-disable no-unused-vars */
import { Alert } from 'bootstrap'
import {React} from 'react'
import { BrowserRouter, Routes,Route } from 'react-router-dom'
import A from './component/A'
import AccessingRows from './component/AgGrid/AccessingRows'
import GridANDColApi from './component/AgGrid/GridANDColApi'
import GroupCreation from './component/AgGrid/GroupCreation'
import TableCreation from './component/AgGrid/TableCreation'
import B from './component/B'
import Alerts from './component/Bootstrap/Alerts'
import First from './component/Bootstrap/First'
import Glyphicons from './component/Bootstrap/Glyphicons'
import MarPad from './component/Bootstrap/MarPad'
import RowsandColumns from './component/Bootstrap/RowsandColumns'
import Second from './component/Bootstrap/Second'
import SignUp from './component/Bootstrap/SignUp'
import Test from './component/Bootstrap/Test'
import Controlled from './component/Controlled'
import CreateUser from './component/CRUD/CreateUser'
import Navbar from './component/CRUD/Navbar'
import Update from './component/CRUD/Update'
import UserDetails from './component/CRUD/UserDetails'
import Demo from './component/DatePicker/Demo'
import A1 from './component/EmptyFold/A1'
import Abc from './component/EmptyFold/Abc'
import B1 from './component/EmptyFold/B1'
import C1 from './component/EmptyFold/C1'
import Checkbox from './component/EmptyFold/Checkbox'
import Drop from './component/EmptyFold/Drop'
import FormHandling from './component/EmptyFold/FormHandling'
import UseCallback from './component/EmptyFold/UseCallback'
import Usestate from './component/EmptyFold/Usestate'
import Button from './component/Example.jsx/Button'
import DataFilter from './component/Example.jsx/DataFilter'
import LinkFold from './component/Example.jsx/LinkFold'
import MediaQuery from './component/Example.jsx/MediaQuery'
import Registration from './component/Example.jsx/Registration'
import UpgradeIcon from './component/Example.jsx/UpgradeIcon'
import Input from './component/Input'
import Lifecycle from './component/Lifecycle'
import Myemployee from './component/Mycrud/Myemployee'
import Amzon from './component/NavBars/Amzon'
import Power from './component/Power'
import Props from './component/Props'
import DeletedData from './component/RealtimeProjects/NotebookProj/DeletedData'
import EditNote from './component/RealtimeProjects/NotebookProj/EditNote'
import Main from './component/RealtimeProjects/NotebookProj/Main'
import SavedData from './component/RealtimeProjects/NotebookProj/SavedData'
import Edit from './component/StudentCRUD/Edit'
import EnterStudent from './component/StudentCRUD/EnterStudent'
import NavBar from './component/StudentCRUD/NavBar'
import StudentsDetails from './component/StudentCRUD/StudentsDetails'
import User from './component/User'
import Home from './component/UserDetails/Home'
import HomePage from './component/UserDetails/HomePage'
import Login from './component/UserDetails/Login'
import Signup from './component/UserDetails/Signup'
import MasterGrid from './component/AgGrid/MasterGrid'
// import Input from './component/Input'

const App = () => {
  // const obj=[
  //   {
  //     name:"Html",
  //     id:123
  //   },
  //   {
  //     name:"css",
  //     id:234
  //   },
  //   {
  //     name:"js",
  //     id:235
  //   } 
  // ]
  return (
    <div>
      {/* <User/> */}
      {/* <Power/> */}
      {/* <Usestate/> */}
      {/* <Input/> */}


       {/* <BrowserRouter>
     <Navbar/>
      <Routes>
       <Route path="/createpath" element={<CreateUser/>}></Route>
       <Route path="/userpath" element={<UserDetails/>}></Route>
      <Route path="/update/:index" element={<Update/>}> </Route>
       </Routes> 
      </BrowserRouter> */}

    {/* <BrowserRouter>
    <NavBar/>
    <Routes>
      <Route path="/Enterstud" element={<EnterStudent/>}></Route>
      <Route path="/StudData" element={<StudentsDetails/>}></Route>
      <Route path='/update/:index' element={<Edit/>}></Route>
    </Routes>
    </BrowserRouter> */}





    {/* <B1/> <C1/> */}



{/* <BrowserRouter>
<Myemployee/>
<Routes>
  <Route path='/EDIT' element=""></Route>
 
</Routes>
</BrowserRouter> */}





{/* <BrowserRouter>
<Routes>
  <Route path="/" element={<Signup />}></Route>
  <Route path="/login" element={<Login/>}></Route>
  <Route path="/home" element={<HomePage/>}></Route>
</Routes>
</BrowserRouter> */}


{/* ------------------------------------------------------------------------------------------- */}
    {/* <BrowserRouter>

    <Routes>
        <Route path='/' element={<Main props="data"/>}></Route> 
        <Route path='/*' element={<SavedData />}></Route>
        <Route path='/edit/:index' element={<EditNote/>}></Route>
        <Route path='/delete' element={<DeletedData/>}></Route>
    </Routes>
    
    </BrowserRouter> */}






{/* <MasterGrid/> */}



























{/* <Registration/> */}
{/* <TableCreation/> */}
{/* <GridANDColApi/> */}
{/* <GroupCreation/> */}
<AccessingRows/>


{/* <Glyphicons/> */}

{/* <Test/> */}
{/* <First/> */}

{/* <Second/> */}
{/* <Alerts/> */}

{/* <RowsandColumns/> */}

{/* <MarPad/> */}
{/* <SignUp/> */}

{/* <Demo/> */}

{/* <UpgradeIcon/> */}
{/* <MediaQuery/> */}
{/* <LinkFold/> */}
{/* <DataFilter/> */}

{/* <Button/> */}
{/* <A1/> */}
{/* <Amzon/> */}
 {/* <Lifecycle/> */}
   {/* <A/> <B/> */}
{/* <Controlled/> */}
     {/* <UseCallback/> */}
{/* <Props data={obj}/> */}

  {/* <A data="hi"/> */}
  {/* <Abc/> */}
  {/* <Checkbox/> */}
  {/* <FormHandling/> */}

  {/* <Drop/> */}
    </div>
  )
}

export default App