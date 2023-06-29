
import "./App.css";
import Footer from "./Components/Footer";
import NavBar from "./Components/NavBar";
import About from "./Pages/About";
import Contacts from "./Pages/Contacts";
import Home from "./Pages/Home";
import Port from "./Pages/Port"

function App() {
  return (
    <div className="App">
      {/* <NavBar /> */}
      {/* {<Home/>
     <Port/>} */}
     <About/>
     <Contacts/>
      {/* <Footer/> */}
    </div>
  );
}

export default App;
