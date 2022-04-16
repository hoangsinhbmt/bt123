import React, { useEffect, useState } from "react";
import Bot from "./Bot/Bot";
import Player from "./Player/Player";

const num = ["keo", "bua", "bao"];

export default function TroChoi() {
  const [randimg, setRandImg] = useState();
  const [chooseimg, setChooseImg] = useState();
  const [game, setGame] = useState(0);
  const [point, setPoint] = useState(0);
  const HandlePlay = () => {
    const randNum = Math.floor(Math.random() * 3);
    setRandImg(num[randNum]);
    setGame(game + 1);
  };
  useEffect(() => {
    console.log(123);
    if (
      (chooseimg === "keo" && randimg === "bao") ||
      (chooseimg === "bua" && randimg === "keo") ||
      (chooseimg === "bao" && randimg === "bua")
    ) {
      setPoint(point + 1);
    }
  },[randimg]);
  return (
    <div
      className=" bg-white h-screen w-screen bg-no-repeat bg-cover bg-top grid grid-cols-3"
      style={{
        backgroundImage: `url('./img/bgGame.png')`,
      }}
    >
      <Player chooseimg={chooseimg} setChooseImg={setChooseImg} />
      <div>
        <div className="text-yellow-500 font-black lg:text-5xl md:text-3xl text-xl text-center h-2/4 flex flex-col items-center justify-around">
          <h1>I'm iron man, I love you 3000 !!</h1>
          <h1 className="text-green-500">
            Số bàn thắng: <span className="text-yellow-400">{point}</span>
          </h1>
          <h1 className="text-green-500">
            Số bàn chơi: <span className="text-yellow-400">{game}</span>
          </h1>
        </div>
        <button
          className="bg-green-600 hover:bg-green-700 text-white font-bold md:text-lg text-base py-2 px-4 rounded"
          onClick={HandlePlay}
        >
          {" "}
          Play game
        </button>
      </div>
      <Bot randimg={randimg} />
    </div>
  );
}
