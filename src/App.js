import RechtSeite from './components/LinksSeite';
import React, { useState } from 'react'
import LinksSeite from './components/RechtsSeite';

function App() {

  const [state, setState] = useState([
    {
      name: "",
      checkedIn: false,
    },
    {
      name: "Ahmet",
      checkedIn: false,
    },
    {
      name: "Ali",
      checkedIn: false,
    },
    {
      name: "Emin",
      checkedIn: false,
    },
    {
      name: "Galip",
      checkedIn: false,
    },
    {
      name: "Bahadir",
      checkedIn: false,
    },
  ]
  );
  return (
    <div className="App flex font-bold h-100 my-16 justify-around">

      <RechtSeite state={state} setState={setState}/>

      <LinksSeite  state={state} setState={setState} />

    </div>
  );
}

export default App;