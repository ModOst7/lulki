import React, { useState, useEffect } from 'react';
import logo from './logo.svg';
import './App.css';
import { createBrowserRouter, RouterProvider, Route, HashRouter, Routes } from "react-router-dom";
import Root from "./routes/root";
import Menu from "./routes/menu"
import LabOne from './routes/labOne/labOne';
import LabOne1 from './routes/labOne/labOne1';
import LabOne2 from './routes/labOne/labOne2';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
  },
]);

function App() {

  const [scale, setScale] = useState(1)
  useEffect(() => {
    scalable(setScale)
    window.onresize = () => {
      scalable(setScale)
    }
  }, [])
  return (
    <div style={{ "transform": `scale(${scale})`, width: 1920, height: 970, transformOrigin: "top left" }}>
      <React.StrictMode>
        <HashRouter
          basename="/"
        >
          <Routes>
            <Route path="/" element={<Root />} />
            <Route path="menu" element={<Menu />} />
            <Route path="labOne" element={<LabOne />} >
              <Route path="/labOne/1" element={<LabOne1 />} />
              <Route path="/labOne/2" element={<LabOne2 />} />
            </Route>
          </Routes>
        </HashRouter>
      </React.StrictMode>
    </div>
  );
}

const scalable = (setScale: React.Dispatch<React.SetStateAction<number>>) => {
  const width = window.innerWidth;
  const height = window.innerHeight;

  const scaleWidth = width / 1920
  const scaleHeight = height / 970

  console.log(scaleWidth, scaleHeight)

  if (scaleWidth > scaleHeight) {
    setScale(scaleHeight)
  } else {
    setScale(scaleWidth)
  }


}

export default App;
