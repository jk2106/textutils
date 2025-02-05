import logo from './logo.svg';
import './App.css';
import NavBar from './components/NavBar';
import TextForm from './components/TextForm';
import About from './components/About';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  Routes
} from "react-router-dom";

let name = "Harry";
function App() {
  return (
    <>
    <Router>
    <NavBar title= {"JAPS"} aboutText="about Text util"/>
  {/* <NavBar/>  */}

    <div className='container'>
      <img src='logo192.png' alt='react'/>
      <h1>Hello {name}</h1>
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Architecto veritatis fugiat atque vel perferendis ea quidem, ipsam necessitatibus eius! Consequatur veritatis laudantium quo quidem quas consequuntur voluptate harum quod tempore.</p>
    </div>
    <Routes>
        <Route exact path="/About" element={<About />} />  
        <Route exact path="/" element={<TextForm heading="Fill the form" />} />  
      </Routes>
    {/* <div className="container">
      <TextForm heading="Fill the form"/>
    </div> */}
    {/* <div className="container">
      <About/>
    </div> */}
    </Router>
    </>
  );
}

export default App;
