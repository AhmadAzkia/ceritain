import './App.css';
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import Home from './Pages/Home';
import Login from './Pages/Login';
import Register from './Pages/Register';
import { render } from "react-dom";
import Psikolog from './Pages/Psikolog';
import Profile from "./Pages/Profile";
import Upload from "./Pages/upload";
import RegisterPsikolog from './Pages/RegisterPsikolog';

function App() {
  return (
    <Router>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/login' element={<Login />} />
        <Route path='/register' element={<Register />} />
        <Route path='/psikolog' element={<Psikolog />}/>
        <Route path='/profile' element={<Profile />}/>
        <Route path='/upload' element={<Upload />}/>
        <Route path='/psikolog/admin/register' element={<RegisterPsikolog />}/>
      </Routes>
    </Router>
  );
}
render(<App />, document.getElementById("root"));

export default App;
