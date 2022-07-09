import { Component, createSignal } from 'solid-js';
import { Route, Routes } from 'solid-app-router'

import iPhone from "./iPhoneGradient.png"
import appStoreBadge from "./appStoreBadge.svg"

import Home from "./Pages/Home"
import FAQ from "./Pages/FAQ"
import Contact from "./Pages/Contact"
import Privacy from './Pages/Privacy';

const App: Component = () => {
  const [transform, setTransform] = createSignal("md:translate-y-[0]");
  const [scale, setScale] = createSignal("scale-125")

  setTimeout(() => setTransform("md:translate-y-1/4"), 100)
  setTimeout(() => setScale("scale-100"), 100)

  return (
    <Routes>
      <Route path="/" element={<Home/>} />
      <Route path="/faq" element={<FAQ/>}></Route>
      <Route path="/contact" element={<Contact/>}></Route>
      <Route path="/privacy" element={<Privacy/>}></Route>
    </Routes>
  );
};

export default App;
