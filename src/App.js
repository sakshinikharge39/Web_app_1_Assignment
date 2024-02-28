import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
// import Navbar from './components/Navbar/Navbar';
import Addsales from './components/AddSales/Addsales';
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Login from './components/Login/Login';
import Register from './components/Register/Register';




function App() {
  return (
    <>
    {/* <Navbar/> */}
    <BrowserRouter>
      <Routes>
        <Route path = '/' Component ={Addsales}></Route>
        <Route path = '/login' Component ={Login}></Route>
        <Route path = '/register' Component ={Register}></Route>
      </Routes>
    </BrowserRouter>
    </>
  );
}

export default App;