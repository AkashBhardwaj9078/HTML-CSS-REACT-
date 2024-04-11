import logo from './logo.svg';
import './App.css';
import Header from "./components/Header";
import Category from './components/Category';
import Toplist from './components/toplist';
import Online from './components/OnlineDelivery';



function App() {
 
  return (
    <div className="App">
      <Header></Header>
      <Category></Category>
      <Toplist></Toplist>
      <Online></Online>
     
    </div>
  );
}

export default App;
