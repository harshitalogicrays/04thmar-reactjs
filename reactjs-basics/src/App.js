import './App.css';
import FirstFunComp from './components/FirstFunComp';
import FunPropsdemo from './components/FunPropsdemo';


function App() {
  return (
      <div>
          {/* <h1>Hello React</h1>
          <h2>fdfdfd</h2>
          <FirstFunComp/><hr/> */}
          <FunPropsdemo username="Happy" address="Pune" mobile="9090090" />
      </div>
  );
}

export default App;
