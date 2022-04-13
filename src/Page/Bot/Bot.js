import React from "react";

export default function Bot(props) {
  return (
    <>
      <div className="h-[75%] flex flex-col justify-center items-center">
        <div className="w-[15.5rem] relative flex flex-wrap justify-center">
          <img src={`./img/${props.randimg}.png`} alt="" className="h-25" />

          <img className="w-2/3 mb-4" src="./img/playerComputer.png" alt="" />
        </div>
      </div>
    </>
  );
}
