import React from "react";

export default function Player(props) {
  const handleChoose = (choose) => {
    props.setChooseImg(choose);
  };
  return (
    <div className="h-[80%] flex flex-col justify-center items-center">
      <div className="w-[15.5rem] relative flex justify-center flex-wrap flex-col">
        <img src={`./img/${props.chooseimg}.png`} alt="" className="h-25" />
        <img className="w-2/3" src="./img/player.png" alt="" />
        <div className="flex justify-center">
          <button onClick={() => handleChoose("bao")}>
            <img src="./img/bao.png" alt="" className="h-20" />
          </button>
          <button onClick={() => handleChoose("bua")}>
            <img src="./img/bua.png" alt="" className="h-20" />
          </button>
          <button onClick={() => handleChoose("keo")}>
            <img src="./img/keo.png" alt="" className="h-20" />
          </button>
        </div>
      </div>
    </div>
  );
}
