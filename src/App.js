import logo from './logo.svg';
import './App.css';
import data from './data.js';

import PrductList from "./components/ProductList";
import H1 from "./components/H1"

function App() {
  return (
    <div className="App">
      <H1 title = "Каталог"/>
      <PrductList color="#ffffff" products = {data}/>
    </div>
  );
}

export default App;
