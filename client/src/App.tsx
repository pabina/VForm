import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import {MyForm} from './pages/Form';
import { ToastContainer } from 'react-toastify';
import View from './pages/view';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'react-toastify/dist/ReactToastify.css';


const App = () => {

  
  return (
<>

<ToastContainer
    position="top-right"
    autoClose={5000}
    hideProgressBar={false}
    newestOnTop={false}
    closeOnClick
    rtl={false}
    pauseOnFocusLoss
    draggable
    pauseOnHover
    />
    <ToastContainer />

   
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
