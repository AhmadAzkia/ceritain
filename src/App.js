import './App.css';
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import Navbar from './components/Navbar';
import Main from './components/Jumbotron';
import Home from './Pages/Home';
import Login from './Pages/Login';
import { render } from "react-dom";
import { faHome } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

function App() {
  return (
    <Router>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/login' element={<Login />} />
        <FontAwesomeIcon icon={faHome} />
      </Routes>
    </Router>
  );
}
render(<App />, document.getElementById("root"));

export default App;
