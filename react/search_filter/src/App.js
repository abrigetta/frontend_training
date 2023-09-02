
import { useState } from 'react';
import './App.css';

function App() {
  const list = ["Cake",
    "Donut",
    "Chips",
    "Cookies",
    "Icecream",
    "Chocolate",
    "Muffin"];
   const listitems=list.map((list) => <li>{list}</li>);

  const [filterList,setFilterList] = useState(list);
  const handleSearch = (event)=>{
    if(event.target.list===""){
      
      return list;

    }else if(list.filter()){

    }
  }

  return (
    <div className="app">
      <div>
      <input type="text" placeholder="Search..." onchange={handleSearch}></input>
      </div>
    </div>
  );

}
export default App
