import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Routes,Route } from "react-router-dom";
import Home from './Home';
import Contact from './Contact';
import About from './About';
import Error from './Error';
function App() {
  return (
    <div className="App">
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<Home></Home>}/>
      <Route path="/about" element={<About></About>}/>
      <Route path="/contact" element={<Contact></Contact>}/>
      <Route path ="*" element ={<Error></Error>}/>
    </Routes>
    
    </BrowserRouter>
    </div>
  );
}

export default App;
