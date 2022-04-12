import React from "react";
import Bot from "./Bot/Bot";
import Player from "./Player/Player";

export default function TroChoi() {
  const handlePlay = () => {
    console.log(123);
  };
  return (
    <div
      className=" bg-white h-screen w-screen bg-no-repeat bg-cover bg-top grid grid-cols-3"
      style={{
        backgroundImage: `url('./img/bgGame.png')`,
      }}
    >
      <Player />
      <div>
        <div className="text-yellow-500 font-black lg:text-5xl md:text-3xl text-xl text-center h-2/4 flex flex-col items-center justify-around">
          <h1>I'm iron man, I love you 3000 !!</h1>
          <h1 className="text-green-500">
            Số bàn thắng: <span className="text-yellow-400">123</span>
          </h1>
          <h1 className="text-green-500">
            Số bàn chơi: <span className="text-yellow-400">123</span>
          </h1>
        </div>
        <button
          className="bg-green-600 hover:bg-green-700 text-white font-bold md:text-lg text-base py-2 px-4 rounded"
          onClick={handlePlay}
        >
          {" "}
          Play game
        </button>
      </div>
      <Bot/>
    </div>
  );
}
