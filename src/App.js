import './App.css';
import About from './Components/About';
import Home from './Components/Home';
import {Routes,Route} from "react-router-dom"
import Navbar from './Components/Navbar';
import Products from './Components/Product';
function App() {
  return (
    <div className="App">
      <Navbar/>
      <Routes>
        <Route path={"/"} element={<Home/>}></Route>
        <Route path={"/about"} element={<About/>}></Route>
        <Route path={"/product/:id"} element={<Products/>}></Route>

      </Routes>
      
    </div>
  );
}

export default App;
