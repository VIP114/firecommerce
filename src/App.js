import logo from './logo.svg';
import './App.css';
import HomePage from './pages/HomePage';
import {Route,BrowserRouter,Routes, Navigate} from "react-router-dom"
import LoginPage from './pages/LoginPage';
import RegisterPage from './pages/RegisterPage';
import ProductInfo from './pages/ProductInfo';
import CartPage from './pages/CartPage';
import  "./stylesheet/layout.css"

import './stylesheet/HomePage.css'
import './stylesheet/Authentication.css'
// 7096876247

import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
function App() {
  return (
    <div className="App">
    <ToastContainer/>      
    <BrowserRouter>
    <Routes>
      <Route path='/' exact element={<ProtectedRoutes><HomePage/></ProtectedRoutes>} />
      <Route path='/login' exact element={<LoginPage/>} />
      <Route path='/register' exact element={<RegisterPage/>} />
      <Route path='/productinfo/:productid' exact element={<ProtectedRoutes><ProductInfo/></ProtectedRoutes>} />
      <Route path='/cart' exact element={<ProtectedRoutes><CartPage/></ProtectedRoutes> } />
    </Routes>
    </BrowserRouter>

    </div>
  );
}
// done
export default App;

export const ProtectedRoutes=({children})=>{
  if (localStorage.getItem('currentUser')) {
    return children    
  }
  else{
    return <Navigate to='/login'/>
  }
}