import './App.css';
import Button from 'react-bootstrap/Button';
import 'bootstrap/dist/css/bootstrap.min.css';
import { ToastContainer, toast } from 'react-toastify';
import Home from './components/Home';
import Allcourses from './components/Allcourses';
import AddCourse from './components/AddCourse';
import Header from './components/Header';
import { Col, Container, Row } from 'reactstrap';
import Menus from './components/Menus';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

function App() {

  const btnHandle = () => {
    toast.success("This is my first message", { position: "top-center" });
  };

  return (
    <>
      <Router>
        <ToastContainer />
        <Container>
          <Header />
          <Row>
            <Col md={4}>
              <Menus />
            </Col>
            <Col md={8}>
              <Routes>
                <Route path='/' element={<Home />} exact />
                <Route path='/add-course' element={<AddCourse />} exact />
                <Route path='/view-courses' element={<Allcourses />} exact />
              </Routes>
            </Col>
          </Row>
        </Container>
      </Router>
    </>
  );
}

export default App;
