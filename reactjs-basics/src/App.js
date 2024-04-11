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
import FormValidations from './components/05day/FormValidations';
import ParentComp from './components/05day/ParentComp';
import CSSinReact from './components/05day/CSSinReact';

import cssmodule from './app.module.css'
import ReactHookFormDemo from './components/06day/ReactHookFormDemo';
import UseCallbackDemo from './components/06day/UseCallbackDemo';
import UseRefDemo from './components/07day/UseRefDemo';
import Refdemo from './components/07day/Refdemo';
import MyFirstClassComp from './components/07day/MyFirstClassComp';
import ForminClassComp from './components/08day/ForminClassComp';
import ComponentLifeCycleMethods from './components/08day/ComponentLifeCycleMethods';
import PureComponentDemo from './components/08day/PureComponentDemo';

function App() {
    let [isLoggedIn,setIsLoggedIn]=useState(false)
  return (
      <div className='container mt-5'>
         {/* <h1 className={cssmodule.error}>Hello React - css module</h1> */}
          {/*
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

          {/* <Register/> */}

          {/* <FormValidations/> */}

          {/* <ParentComp/> */}

          {/* <CSSinReact/> */}

          {/* <ReactHookFormDemo/> */}

          {/* <UseCallbackDemo/> */}
          {/* <UseRefDemo/> */}
          {/* <Refdemo/> */}


          {/* <MyFirstClassComp loggedIn={isLoggedIn} marks={100}/> */}

          {/* <ForminClassComp/> */}

          {/* <button type="button"  class="btn btn-primary" onClick={()=>setIsLoggedIn(!isLoggedIn)}
          >
            {isLoggedIn ? "Logout":"Login"}
          </button>

          {isLoggedIn ?<ComponentLifeCycleMethods/> : ''} */}
          
          <PureComponentDemo/>
      </div>
  );
}

export default App;
