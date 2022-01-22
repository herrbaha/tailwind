import RechtSeite from './components/LinksSeite';
import React, { useState } from 'react'
import LinksSeite from './components/RechtsSeite';

function App() {

  const [state, setState] = useState([
    {
      name: "Edward",
      checkedIn: false,
    },
    {
      name: "Paula",
      checkedIn: false,
    },
    {
      name: "Elisa",
      checkedIn: false,
    },
    {
      name: "Birgit",
      checkedIn: false,
    },
    {
      name: "Baha",
      checkedIn: false,
    },
    {
      name: "Inantsch",
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