import './App.css';
import './App.css';
//import NavBar from './components/NavBar';
import SideBar from './components/SideBar';
import { BrowserRouter as Router } from 'react-router-dom';

function App() {
  return (
    <Router>
      <SideBar />
    </Router>
  );
}

export default App;
