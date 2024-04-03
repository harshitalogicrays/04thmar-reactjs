import './App.css';
import Childrenpropsdemo from './components/02day/Childrenpropsdemo';
import EventDemo from './components/02day/EventDemo';
import Listrendering from './components/02day/Listrendering';
import FirstFunComp from './components/FirstFunComp';
import FunPropsdemo from './components/FunPropsdemo';


function App() {
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

          <EventDemo/>
      </div>
  );
}

export default App;
