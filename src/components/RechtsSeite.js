import React from "react";

function RechtsSeite({ state }) {
  const links = state.filter((item) => item.checkedIn === true);
  return (
    <div className="bg-slate-400 p-6 h-96 w-80 text-center">
      <h1 className="text-3xl text-gray-500">RechtsSeite</h1>
      {links.map((item, index) => (
        <ol key={index} className="text-2xl text-left text-slate-50">
          {index + 1} : {item.name}{" "}
        </ol>
      ))}
    </div>
  );
}

export default RechtsSeite;