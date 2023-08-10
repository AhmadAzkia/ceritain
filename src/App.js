import './App.css';
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import Home from './Pages/Home';
import Login from './Pages/Login';
import Register from './Pages/Register';
import { render } from "react-dom";
import Profile from "./Pages/Profile";
import KirimEmail from './Pages/Psikolog/KirimEmail';
import TentangKami from './Pages/TentangKami';
// Psikolog
import Psikolog from './Pages/Psikolog/Psikolog';
import RegisterPsikolog from './Pages/Psikolog/RegisterPsikolog';
import LoginPsikolog from './Pages/Psikolog/LoginPsikolog';
import ProfilePsikolog from './Pages/Psikolog/ProfilePsikolog';
import DetailsPsikolog from './Pages/Psikolog/DetailsPsikolog';

function App() {
  return (
    <Router>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/login' element={<Login />} />
        <Route path='/register' element={<Register />} />
        <Route path='/profile' element={<Profile />}/>
        <Route path='/tentangkami' element={<TentangKami />}/>

        {/* Psikolog */}
        <Route path='/psikolog' element={<Psikolog />}/>
        <Route path='/psikolog/profile' element={<ProfilePsikolog />}/>
        <Route path='/psikolog/detailspsikolog/:id' element={<DetailsPsikolog />}/>
        <Route path='/psikolog/admin/register' element={<RegisterPsikolog />}/>
        <Route path='/psikolog/admin/login' element={<LoginPsikolog />}/>
        <Route path='/Psikolog/KirimEmail' element={<KirimEmail />}/>
      </Routes>
    </Router>
  );
}
render(<App />, document.getElementById("root"));

export default App;
