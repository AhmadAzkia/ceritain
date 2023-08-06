import './App.css';
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import Home from './Pages/Home';
import Login from './Pages/Login';
import Register from './Pages/Register';
import { render } from "react-dom";
import Profile from "./Pages/Profile";

// Psikolog
import Psikolog from './Pages/Psikolog/Psikolog';
import RegisterPsikolog from './Pages/Psikolog/RegisterPsikolog';
import LoginPsikolog from './Pages/Psikolog/LoginPsikolog';
import ProfilePsikolog from './Pages/Psikolog/ProfilePsikolog';

function App() {
  return (
    <Router>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/login' element={<Login />} />
        <Route path='/register' element={<Register />} />
        <Route path='/profile' element={<Profile />}/>

        {/* Psikolog */}
        <Route path='/psikolog' element={<Psikolog />}/>
        <Route path='/psikolog/profile' element={<ProfilePsikolog />}/>
        <Route path='/psikolog/admin/register' element={<RegisterPsikolog />}/>
        <Route path='/psikolog/admin/login' element={<LoginPsikolog />}/>
      </Routes>
    </Router>
  );
}
render(<App />, document.getElementById("root"));

export default App;
