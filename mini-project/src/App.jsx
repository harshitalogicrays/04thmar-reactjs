// import './App.css'

import { Container } from "react-bootstrap";
import { Route, Routes } from "react-router-dom";
import { ToastContainer } from "react-toastify"
import 'react-toastify/dist/ReactToastify.css';
import Home from "./pages/Home";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Pagenotfound from "./pages/Pagenotfound";
import Products from "./features/Products";
import { DefaultLayout } from "./features/hiddenLinks";

function App() {

  return (
<>
<ToastContainer
position="bottom-left"
autoClose={2000}
hideProgressBar={true}
newestOnTop={false}
closeOnClick
rtl={false}
pauseOnFocusLoss
draggable
pauseOnHover
theme="colored"
/>

    <Routes>
      <Route path='/' element={<DefaultLayout><Home/></DefaultLayout>}/>
      <Route path='/login' element={<Login/>}/>
      <Route path='/register' element={<Register/>}/>
      <Route path='/products' element={<DefaultLayout><Products/></DefaultLayout>}/>
      <Route path='*' element={<Pagenotfound/>}/>
    </Routes>
</>
  )
}

export default App
