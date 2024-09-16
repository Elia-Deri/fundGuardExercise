import React from "react";

export function useInitPage(
  moveDelta: (dx: number, dy: number) => void,
  setWeather: React.Dispatch<React.SetStateAction<number | undefined>>
) {
  const keyDownListener = (e: KeyboardEvent) => {
    const keyCode = e.code;

    switch (keyCode) {
      case "KeyW":
      case "ArrowUp":
        moveDelta(0, -100);
        break;
      case "KeyA":
      case "ArrowLeft":
        moveDelta(-100, 0);
        break;
      case "KeyD":
      case "ArrowRight":
        moveDelta(100, -0);
        break;
      case "KeyS":
      case "ArrowDown":
        moveDelta(0, 100);
        break;
      default:
        break;
    }
  };

  React.useEffect(() => {
    window.addEventListener("keydown", keyDownListener);

    try {
      fetch(
        "https://weatherstack.glitch.me/current?access_key=5f58d7a0eecd822f4bd469586df5585c&query=tel%20aviv"
      )
        .then((res) => {
          if (res.ok) {
            return res.json();
          } else {
            throw new Error("אין מידע מהשרת");
          }
        })
        .then((value) => {
          setWeather(Number(value.current.temperature));
        });
    } catch (error) {
      console.log(error);
      setWeather(undefined);
    }

    return () => window.removeEventListener("keydown", keyDownListener);
  }, []);
}
