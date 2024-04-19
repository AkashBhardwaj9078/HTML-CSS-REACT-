import logo from './logo.svg';
import './App.css';
import Header from './components/Header';
import Sect from './components/Sect';
import Headertags from './components/Headertags';
import Food from './components/Food';
import Category from './components/Category';


function App() {
  return (
    <div className="App">
      
    <Header></Header>
    <Sect></Sect>
    <Headertags></Headertags>
    <Food></Food>
    <Category></Category>


    </div>
  );
}

export default App;
