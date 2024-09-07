import './App.css'
import {Routes,Route, Navigate} from "react-router-dom";
import Login from './comp/Login';
import Signup from './comp/Signup';
import Home from './comp/Home';
function App() {
  return (
    <>
     <Routes>
     <Route path='/' element={<Navigate to = '/login'/>}/>
     <Route path='/login' element={<Login />}/>
     <Route path='/signup' element={<Signup />}/>
     <Route path='/home' element={<Home/>}/>
     </Routes>
    </>
  )
}

export default App
