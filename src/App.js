import logo from './logo.svg';
import './App.css';
import { Route,Router,Routes } from 'react-router';
import { Link } from 'react-router-dom';
import Getall from './componenets/Getall';
import Save from './componenets/Save';

function App() {
  return (
    <div className="App">
     <h1>This is testing app  having two feature</h1>

     <div>
      <div style={{backgroundColor: 'lightgray',}}>
        <p>CLick here to for ssaving post</p>
        <Link to="/save">
      
        <button>Save</button>
        </Link> 
      </div>
      


      {/* this is next deive */}
      <div  style={{backgroundColor: 'lightyellow',}}>
        <p>CLick here to for get all post</p>
        <Link to="/getall">
        <button>
    Getall
        </button>
        </Link>
      </div>
     </div>
  <Routes>
      <Route path="/save" element={<Save/>}></Route>
      <Route path="/getall" element={<Getall/>}></Route>
      </Routes>
    </div>
  );
}

export default App;
