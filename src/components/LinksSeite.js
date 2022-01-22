import React from "react";

function LinksSeite({ state, setState }) {
  const handleState = (item, index) => {
    const updateState = state[index];
    updateState.checkedIn = !updateState.checkedIn;
    const updateAllState = [...state];

    setState(updateAllState);
  };

  return (
    <div className="bg-slate-400 p-6 h-96 w-80 text-center">
        <h1 className="text-3xl text-gray-500"> LinksSeite </h1>
      {state.map((item, index) => {
        return (
          <ol key={index} className="text-2xl text-left text-slate-50">
            <p><input
              type="checkbox"
              value={item.checkedIn}
              onChange={() => handleState(item, index)}
              
            /> {item.name}</p>
            
          </ol>
        );
      })}
    </div>
  );
}

export default LinksSeite;