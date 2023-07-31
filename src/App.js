import './App.css';
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import Home from './Pages/Home';
import Login from './Pages/Login';
import Register from './Pages/Register';
import { render } from "react-dom";
import Doctor from './Pages/Doctor';
import Profile from "./Pages/Profile";

function App() {
  return (
    <Router>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/login' element={<Login />} />
        <Route path='/register' element={<Register />} />
        <Route path='/doctor' element={<Doctor />}/>
        <Route path='/profile' element={<Profile />}/>
      </Routes>
    </Router>
  );
}
render(<App />, document.getElementById("root"));

export default App;
