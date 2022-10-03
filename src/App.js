import React,{useState} from 'react';
import './App.css';
import Header from './component/header/Header';
import ItemList from './component/itemlist/ItemList';

function App() {
  const [item,setItem] = useState([]);
  return (
    <div className="App">
      <Header />
      <ItemList item={item} setItem={setItem}/>
    </div>
  );
}

export default App;
