import './app.scss';
import Footer from './components/Footer'
import 'bootstrap/dist/css/bootstrap.min.css'
import Signup from './Signup'
import Login from './Login'
import AboutUs from './components/AboutUs.jsx'
import Fitness from './components/Fitness'
import Discussion from './components/Discussion.jsx'
import Home from './Home.jsx'
import Note from "./components/Note"
import Navbar from "./components/Navbar.jsx";
import { BrowserRouter, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <div className="Navbar">
          <Navbar />
          <Routes>
            <Route path='/home' element={<Home />}></Route>
            <Route path='/register' element={<Signup />}></Route>
            <Route path='/login' element={<Login />}></Route>
            <Route path='/aboutus' element={<AboutUs />}></Route>
            <Route path='/fitness' element={<Fitness />}></Route>
            <Route path='/discussion' element={<Discussion />}></Route>
            <Route path='/note' element={<Note />}></Route>
          </Routes>
        </div>
        <div>
        <Footer />
        </div>
      </div>
    </BrowserRouter>
  )
}

export default App
