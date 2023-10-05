import { useEffect, useRef, useState } from "react";
import { Game } from "./script.js";

export default function SpaceEnemys() {
  const [displayGame, setDisplayGame] = useState(false);

  const canvasRef = useRef(null);
  useEffect(() => {
    window.addEventListener("load", function () {
      const canvas = document.getElementById("canvas1");
      const ctx = canvas.getContext("2d");
      canvas.width = 600;
      canvas.height = 800;
      ctx.fillStyle = "white";
      ctx.strokeStyle = "white";
      ctx.font = "30px Impact";

      const game = new Game(canvas);

      let lastTime = 0;
      function animate(timeStamp) {
        let deltaTime = timeStamp - lastTime;
        lastTime = timeStamp;

        ctx.clearRect(0, 0, canvas.width, canvas.height);
        game.render(ctx, deltaTime);
        requestAnimationFrame(animate);
      }
      animate(0);
    });
  });
  return (
    <div
      className={` border flex flex-col justify-between p-4 rounded-lg shadow-md`}
    >
      <h3 className="m-auto md:w-1/2 text-xl mb-3 p-2 text-center border-b-4 border-gray-600 bg-gray-200 ">
        Projeto: Space Enemys
      </h3>
      <div className="flex flex-col w-80 md:w-auto justify-between">
        <canvas
          ref={canvasRef}
          style={{ background: "url(/background.png" }}
          className={`  boder border-s-4 border-black relative 
        `}
          id="canvas1"
        ></canvas>
        <img className="hidden" src="/beetlemorph.png" id="beetlemorph"></img>
        <img className="hidden" src="/player.png" id="player"></img>
        <img className="hidden" src="/player_jets.png" id="player_jets"></img>
      </div>
    </div>
  );
}
