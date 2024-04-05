import { useState } from 'react';
import './App.css';
import Childrenpropsdemo from './components/02day/Childrenpropsdemo';
import EventDemo from './components/02day/EventDemo';
import Listrendering from './components/02day/Listrendering';
import ConditionalRendering from './components/03day/ConditionalRendering';
import Statedemo from './components/03day/Statedemo';
import Statedemo1 from './components/03day/Statedemo1';
import FirstFunComp from './components/FirstFunComp';
import FunPropsdemo from './components/FunPropsdemo';
import Products from './components/04day/Products';
import ProductList from './components/04day/ProductList';
import Register from './components/04day/Register';


function App() {
    let [isLoggedIn,setIsLoggedIn]=useState(false)
  return (
      <div className='container mt-5'>
          {/* <h1>Hello React</h1>
          <h2>fdfdfd</h2>
          <FirstFunComp/><hr/>
          <FunPropsdemo username="Happy" address="Pune" mobile="9090090" />

          <Childrenpropsdemo empid="1001" ename="Smith">
              <h1>h1 tags</h1>
              <FunPropsdemo username="Happy" address="Pune" mobile="9090090" />
              <p>para tag</p>
          </Childrenpropsdemo>

          <Listrendering/> */}

          {/* <EventDemo/> */}
          {/* <Statedemo/> */}

          {/* <Statedemo1 address="Pune"/> */}

          {/* <button type="button"  class="btn btn-primary" onClick={()=>setIsLoggedIn(!isLoggedIn)}
          >
            {isLoggedIn ? "Logout":"Login"}
          </button>
          
          <ConditionalRendering login={isLoggedIn} username="Happy"/> */}

          {/* <Products/> */}
          {/* <ProductList/> */}

          <Register/>
      </div>
  );
}

export default App;
