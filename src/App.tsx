import { Component, createSignal } from 'solid-js';
import { Route, Routes } from 'solid-app-router'

import iPhone from "./iPhoneGradient.png"
import appStoreBadge from "./appStoreBadge.svg"

import Home from "./Pages/Home"

const App: Component = () => {
  const [transform, setTransform] = createSignal("md:translate-y-[0]");
  const [scale, setScale] = createSignal("scale-125")

  setTimeout(() => setTransform("md:translate-y-1/4"), 100)
  setTimeout(() => setScale("scale-100"), 100)

  return (
    <Routes>
      <Route path="/" element={<Home/>} />
    </Routes>
  );
};

export default App;
