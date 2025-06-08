import './App.css'

import React, { useState, useEffect } from 'react';

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

    window.addEventListener('resize', handleResize);

    
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <>
      <div class="main">
        <h1 class="title"> : اندازه پنجره مرورگر شما</h1>
        <h1 class="wid">عرض: {size.width}</h1>
        <h1 class="hait">ارتفاع: {size.height}</h1>
        <h1 class="total">{size.width} x {size.height}</h1>
      </div>
      <div class="main">
        <h1 class="title"> : اندازه صفحه نمایش دستگاه شما</h1>
        <h1 class="wid2">عرض : {screenSize.width}</h1>
        <h1 class="hait2">طول : {screenSize.height}</h1>
        <h1 class="total2">{screenSize.width} x {screenSize.height}</h1>
      </div>
    </>
  );
}


export default App
