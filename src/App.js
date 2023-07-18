import './App.css';
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import Home from './Pages/Home';
import Login from './Pages/Login';
import { render } from "react-dom";

function App() {
  return (
    <Router>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/login' element={<Login />} />
        <Route path='/register' element={<Login />} />
      </Routes>
    </Router>
  );
}
render(<App />, document.getElementById("root"));

export default App;
