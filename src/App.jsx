import "./App.css";

import React, { useState, useEffect } from "react";

function App() {
  const [size, setSize] = useState({
    width: window.innerWidth,
    height: window.innerHeight,
  });

  const [screenSize, setScreenSize] = useState({
    width: window.screen.width,
    height: window.screen.height,
  });

  useEffect(() => {
    const handleResize = () => {
      setSize({
        width: window.innerWidth,
        height: window.innerHeight,
      });
      setScreenSize({
        width: window.screen.width,
        height: window.screen.height,
      });
    };

    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, []);
  function getApproximateInches(width, height) {
    const diagonalPixels = Math.sqrt(width ** 2 + height ** 2);
    return (diagonalPixels / 110).toFixed(1);
  }

  const screenInches = getApproximateInches(
    screenSize.width,
    screenSize.height
  );

  return (
    <>
      <div className="main">
        <h1 className="title"> : اندازه پنجره مرورگر شما</h1>
        <h1 className="wid">عرض: {size.width}</h1>
        <h1 className="hait">ارتفاع: {size.height}</h1>
        <h1 className="total">
          {size.width} x {size.height}
        </h1>
      </div>
      <div className="main">
        <h1 className="title"> : اندازه صفحه نمایش دستگاه شما</h1>
        <h1 className="wid2">عرض : {screenSize.width}</h1>
        <h1 className="hait2">طول : {screenSize.height}</h1>
        <h1 className="total2">
          {screenSize.width} x {screenSize.height}
        </h1>
      </div>
      <div className="main">
        <h1 className="title"> : اینچ تقریبی صفحه نمایش شما </h1>
        <h1>{screenInches}</h1>
      </div>
    </>
  );
}

export default App;
