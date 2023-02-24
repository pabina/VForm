import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import {MyForm} from './pages/Form';
import View from './pages/view';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'react-toastify/dist/ReactToastify.css';


const App = () => {

  
  return (
<>


   
    <Router>  
<Routes>
<Route path="/" element={<MyForm />} />
<Route path="/view" element={<View/>} />

</Routes>
    </Router>
    </>
   
  )
}

export default App
