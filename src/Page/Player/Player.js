import React from "react";

export default function Player() {
  return (
    <div className="h-[80%] flex flex-col justify-center items-center">
      <div className="w-[15.5rem] relative flex justify-center">
        <img
          className="w-2/3"
          src="./img/player.png"
          alt=""
        />
      </div>
    </div>
  );
}
