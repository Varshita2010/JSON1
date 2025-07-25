import logo from './logo.svg';
import './App.css';
import Sample from './Sample';
import Badge from './Badge';
import Timer from './Timer';
import { useState } from 'react';
import Home from './Components/Home';
import About from './Components/About';
import Contact from './Components/Contact';
import { Link,Route,Router, Routes } from 'react-router-dom';
function App() {
  const  [status,setStatus]=useState(true)
  return (
    <div className="App">

      {/* <Badge/> 
      <button onClick={()=>setStatus(!status)}>Toggle</button>
      {status ? <Timer/>:<Sample/>}
    */}
     {/* setup Links */}
     <Link to='/home' className='link'>Home</Link>
     <Link to='/about' className='link'>About</Link>
     <Link to='/contact' className='link'>Contact</Link>
     <Routes>
         <Route path='/home' element={<Home/>}></Route>
         <Route path='/about' element={<About/>}></Route>
         <Route path='/contact' element={<Contact/>}></Route>
     </Routes>


      </div>
  );
}

export default App;
