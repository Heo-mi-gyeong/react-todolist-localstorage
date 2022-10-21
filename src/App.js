import React from 'react';
import './App.css';
import Header from './component/header/Header';
import ItemList from './component/itemlist/ItemList';

function App() {

  return (
    <div className="App">
      <Header />
      <ItemList/>
    </div>
  );
}

export default App;
