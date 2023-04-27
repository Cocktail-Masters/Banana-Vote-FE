"use client";

import { RefObject, useEffect, useRef } from "react";
import { Engine, Render, Bodies, World, Runner, Body } from "matter-js";

const BananaRain = ({ scene }: { scene: RefObject<HTMLDivElement> }) => {
  const isPressed = useRef(false);
  const engine = useRef(Engine.create());

  useEffect(() => {
    const cw = document.body.clientWidth;
    const ch = document.body.clientHeight;
    if (scene.current === null) return;
    const render = Render.create({
      element: scene.current,
      engine: engine.current,
      options: {
        width: cw,
        height: ch,
        wireframes: false,
        background: "transparent",
      },
    });

    Engine.update(engine.current, 1000 / 30);

    // 시간 스케일을 0.5로 설정하여 물리 시뮬레이션을 느리게 실행
    engine.current.timing.timeScale = 0.6;

    Runner.run(engine.current);
    Render.run(render);
    handleDown();
    return () => {
      Render.stop(render);
      World.clear(engine.current.world, true);
      Engine.clear(engine.current);
      render.canvas.remove();
      render.textures = {};
    };
  }, []);

  const handleDown = () => {
    isPressed.current = true;
    handleAddCircle();
  };

  const handleUp = () => {
    isPressed.current = false;
  };

  const handleAddCircle = () => {
    const circleRadius = 10 + Math.random() * 5;
    const textureSize = circleRadius / 100;
    const bananaImageUrl =
      "https://cdn.pixabay.com/photo/2012/04/26/18/41/banana-42793_960_720.png";
    if (isPressed.current) {
      for (let i = 0; i < document.body.clientWidth; i += 50) {
        const randomY = Math.random() * 2000;
        console.log(randomY);
        const ball = Bodies.circle(
          i,
          -document.body.clientHeight - randomY,
          circleRadius,
          {
            mass: 1,
            restitution: 0.9,
            friction: 0.005, // 마찰
            render: {
              sprite: {
                texture: bananaImageUrl,
                xScale: textureSize,
                yScale: textureSize,
              },
            },
          }
        );
        Body.rotate(ball, Math.PI * Math.random());
        World.add(engine.current.world, [ball]);
      }
    }
  };

  return (
    <>
      <div
        className="h-full w-full"
        // onMouseDown={handleDown}
        // onMouseUp={handleUp}
      ></div>
    </>
  );
};
export default BananaRain;
