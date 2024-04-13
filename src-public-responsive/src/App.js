import logo from './logo.svg';
import './App.css';



import Navbar from './components/Home';
import Center from "./components/Center.jsx"
import Sec from './components/sec.jsx';
import Footer from './components/Footer.jsx';
import Cardtags from './components/Cardtags.jsx';
import End from './components/EndFooter.jsx';

function App() {
  return (
    <div className="App">
   

      <Navbar/>
      <Center/>
      <Sec></Sec>
      <Footer></Footer>
      <Cardtags></Cardtags>
      <End></End>
  
    </div>
  );
}

export default App;
