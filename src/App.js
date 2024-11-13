import logo from './logo.svg';
import './App.css';
import Header from './components/Header';
import Body from './components/Body'
import Footer from './components/Footer'
import { Carousel } from 'bootstrap';
import Restaurantcard from './components/Restaurantcard';
import { Outlet } from 'react-router-dom';


function App() {
  console.log("body component", <Body/>);
  return (
    <>
  {/* both the parties */}
    <Header/>
    {/* AAP : Carousel */} 
    {/* both the parties : cardcontainer, restaurantcard, searchbar,filters */}
    <Outlet/>
    {/* AAP */}
    <Footer/>
    {/* <Header></Header> */}
    {/* {Header()} */}
    </>
  );
}
// Header
// Body
      // Carousel
      // Searchbar       Filter
      // Cardcontainer
              // Restaurantcard
              // Restaurantcard
              // Restaurantcard
              // Restaurantcard
              // Restaurantcard
              // Restaurantcard
// Footer

export default App;
