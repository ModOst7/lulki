import React, { useState, useEffect } from 'react';
import logo from './logo.svg';
import './App.css';
import { createBrowserRouter, RouterProvider, Route, HashRouter, Routes } from "react-router-dom";
import Root from "./routes/root";
import Menu from "./routes/menu"
import LabOne from './routes/labOne/labOne';
import LabTwo from './routes/labTwo/labTwo';
import LabThree from './routes/labThree/labThree';

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
    <div >

      <HashRouter
        basename="/"
      >
        <Routes>
          <Route path="/" element={<Root />} />
          <Route path="menu" element={<Menu />} />
          <Route path="labOne" element={<LabOne />}></Route>
          <Route path="labTwo" element={<LabTwo />}></Route>
          <Route path="labThree" element={<LabThree />}></Route>
        </Routes>
      </HashRouter>
    </div>
  );
}

const scalable = (setScale: React.Dispatch<React.SetStateAction<number>>) => {
  const width = window.innerWidth;
  const height = window.innerHeight;

  const scaleWidth = width / 1920
  const scaleHeight = height / 969

  console.log(width, height)

  if (scaleWidth > scaleHeight) {
    setScale(scaleHeight)
  } else {
    setScale(scaleWidth)
  }


}

export default App;
