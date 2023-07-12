import './App.css';
import Navbar from './components/Navbar';
import Main from './components/Main';

function App() {
  return (
    <div>
      <Navbar />
      <div className='content'>
          <Main />
      </div>
    </div>
  );
}

export default App;
