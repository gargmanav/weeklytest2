import './App.css';
import Cards from './components/cards/Cards';
import Fouter from './components/footerbottom/Fouter';
import Button from './components/header/button/Button';
import Logo from './components/header/logo/Logo';
import Navbar from './components/header/navbar/Navbar';





function App() {
  return (
    <div className="App">
      <div style={{position:'sticky',top:'0',backgroundColor:'white'}}>
      <div style={{color:'blue',display:'flex',justifyContent:'end'}}>
        <h3>Mob:</h3><p style={{display:'flex',alignItems:'center'}}>9828573900</p>
        <h3 style={{marginLeft:'15px'}}>Email:</h3><p style={{display:'flex',alignItems:'center',marginRight:'15px'}}>manavgarg1998@gmail.com</p>
      </div>
    <div style={{display:'flex' , justifyContent:'space-evenly',margin:'10px 10px'}}>
      <Logo/><Navbar/><Button/>
    </div>
    </div>
    <div className='tittle' style={{display:"flex",justifyContent:"center" , alignItems:"center"}}>
      <h1 style={{color:'#596AFF',fontSize:'40px'}}>Our Projects</h1>
    </div>
    <div className='cardo' style={{display:'flex',justifyContent:'space-around',flexWrap:'wrap'}}>
    <Cards img="Images/DWTC.jpg" name="DWTC"/>
    <Cards img="Images/AtlantisThePalm.jpg" name="AtlantisThePalm"/>
    <Cards img="Images/DxbAirport.jpg" name="Dxb Airport"/>
    <Cards img="Images/MauiRestaurant.jpg" name="Maui Restaurant"/>
    <Cards img="Images/Nail-paint bar.jpg" name="Nail-paint bar"/>
    <Cards img="Images/OfficeB.jpg" name="Office"/>
    <Cards img="Images/Offices.jpg" name="Offices"/>
    <Cards img="Images/residentialTower.jpg" name="Residential Tower"/>
    <Cards img="Images/Sofitel.jpg" name="Sofitel"/>
    <Cards img="Images/THE-GYM-Dubai.png" name="THE-GYM-Dubai"/>
    <Cards img="Images/Villa.jpg" name="Villa"/>
    <Cards img="Images/Warehouse.jpg" name="Warehouse"/>
    </div>
    <div className='footerbottom'>
      <Fouter/>
    </div>
    </div>
  );
}

export default App;
