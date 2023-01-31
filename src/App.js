
import './App.css';
import {BrowserRouter, Routes, Route} from "react-router-dom"
import Login from './logInpage/login';
import Register from './registerpage.jsx/register';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Register/>}/>
          <Route path='/login' element={<Login/>}/>
        </Routes>
      </BrowserRouter>
     
    </div>
  );
}

export default App;
