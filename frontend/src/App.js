import { Fragment } from 'react';
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import Dashboard from './pages/Dashboard';
import Login from './pages/Login';
import Register from './pages/Register';
import Header from './components/Header';

function App() {
  return (
    <div className='container'>
      <Header/>
      <Routes>
        <Route path='/' element={<Dashboard/>}></Route>
        <Route path='/register' element={<Register/>}></Route>
        <Route path='/login' element={<Login/>}></Route>
      </Routes>
    </div>
    
  );
}

export default App;
