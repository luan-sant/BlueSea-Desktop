import logo from "./logo.svg";
import "./App.css";
import {BrowserRouter, Route , path} from 'react-router-dom'
import Navbar from "./components/Navbar";
import Loginscreen from "./screens/Loginscreen";
import Registerscreen from "./screens/Registerscreen";
import 'antd/dist/antd.css';
import Landingpage from "./screens/Landingpage";
import Adminscreen from "./screens/Adminscreen";

function App() {
  return (
    <div className="App">
      <Navbar />
      <BrowserRouter>
      
         <Route path="/" exact component={Landingpage}/>
         <Route path="/login" component={Loginscreen}/>
         <Route path="/register" component={Registerscreen}/>
         <Route path="/home" component={Adminscreen}/>
      </BrowserRouter>
    </div>
  );
}

export default App;
