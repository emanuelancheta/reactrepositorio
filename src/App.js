import React from "react";
import "./App.css";
import NavBar from "./components/NavBar/NavBar";
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import "bootstrap/dist/css/bootstrap.min.css";


const App = () => {
  return (
    <div>
    <NavBar/>
    <ItemListContainer/>
    </div>
  );
}

export default App;
