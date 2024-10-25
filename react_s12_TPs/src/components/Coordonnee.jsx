import React, { useEffect, useState } from "react";
export default function Coordonnee() {
  const [x, setX] = useState(0);
  const [y, setY] = useState(0);

  useEffect(() => {
    window.addEventListener("mousemove", handleMouseMove);
    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  function handleMouseMove(event) {
    setX(event.clientX);
    setY(event.clientY);
  }
  return (
    <>
      <h4 className="title">recuperation des coordonnes de la souris</h4>
      <h5>
        {" "}
        coordonnes x:{x} y: {y}
      </h5>
    </>
  );
}
