// import './App.css'

import { Container } from "react-bootstrap";
import { Route, Routes } from "react-router-dom";
import { ToastContainer } from "react-toastify"
import 'react-toastify/dist/ReactToastify.css';
import Home from "./pages/Home";

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
transition: Flip
/>
  
  <Container>
    <Routes>
      <Route path='/' element={<Home/>}/>
    </Routes>
  </Container>
</>
  )
}

export default App
