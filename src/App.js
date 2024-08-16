import './App.css';
import Button from 'react-bootstrap/Button';
import 'bootstrap/dist/css/bootstrap.min.css';
import  { ToastContainer, toast } from 'react-toastify';
import Home from './components/Home';

import Allcourses from './components/Allcourses';

function App() {

  const btnHandle=()=>{
    toast.success("This is my first message",{position:"top-center"});
  }


  return (
    <>
    <ToastContainer/>
      <Home/>
      <Allcourses/>

      
    </>
  );
}

export default App;
