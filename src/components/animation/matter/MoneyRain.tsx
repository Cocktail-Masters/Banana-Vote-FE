"use client";

import { useCallback, useEffect, useRef } from "react";
import { Engine, Render, Bodies, World, Runner, Body } from "matter-js";
// import banana from "@/assets/icons/banana_svgrepo.com.svg";
import banana from "@/assets/images/bumeok.jpg";

const MoneyRain = () => {
  const scene = useRef<HTMLDivElement>(null);
  const isPressed = useRef(false);
  const engine = useRef(Engine.create());
  const imgRef = useRef(null);

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

    World.add(engine.current.world, [
      Bodies.rectangle(cw / 2, -10, cw, 20, { isStatic: true }),
      Bodies.rectangle(-10, ch / 2, 20, ch, { isStatic: true }),
      Bodies.rectangle(cw / 2, ch + 10, cw, 20, { isStatic: true }),
      Bodies.rectangle(cw + 10, ch / 2, 20, ch, { isStatic: true }),
    ]);

    Runner.run(engine.current);
    Render.run(render);

    return () => {
      Render.stop(render);
      World.clear(engine.current.world, true);
      Engine.clear(engine.current);
      render.canvas.remove();
      // render.canvas = null;
      // render.context = null;
      render.textures = {};
    };
  }, []);

  const handleDown = (e: any) => {
    isPressed.current = true;
    handleAddCircle(e);
  };

  const handleUp = () => {
    isPressed.current = false;
  };

  const handleAddCircle = (e: any) => {
    const circleRadius = 10 + Math.random() * 5;
    const textureSize = circleRadius / 100;
    const bananaImageUrl =
      "https://cdn.pixabay.com/photo/2012/04/26/18/41/banana-42793_960_720.png";
    if (isPressed.current) {
      for (let i = 0; i < document.body.clientWidth; i += 100) {
        const randomY = Math.random() * 1000 - 1000;
        console.log(randomY);
        const ball = Bodies.circle(i, e.clientY - randomY, circleRadius, {
          mass: 10,
          restitution: 0.9,
          friction: 0.005, // 마찰
          render: {
            sprite: {
              texture: bananaImageUrl,
              xScale: textureSize,
              yScale: textureSize,
            },
          },
        });
        Body.rotate(ball, Math.PI * Math.random());
        World.add(engine.current.world, [ball]);
      }
    }
  };

  return (
    <div
      onMouseDown={handleDown}
      onMouseUp={handleUp}
      // onMouseMove={handleAddCircle}
    >
      <div ref={scene} style={{ width: "100%", height: "100%" }} />
    </div>
  );
};
export default MoneyRain;
