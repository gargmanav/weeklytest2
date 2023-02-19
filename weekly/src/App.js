import './App.css';
import Button from './components/header/button/Button';
import Logo from './components/header/logo/Logo';
import Navbar from './components/header/navbar/Navbar';




function App() {
  return (
    <div className="App" style={{display:'flex' , justifyContent:'space-evenly',margin:'10px 10px'}}>
      <Logo/><Navbar/><Button/>
    </div>
  );
}

export default App;
