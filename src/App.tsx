import { Component, createSignal, lazy } from 'solid-js';
import { Route, Routes, A } from '@solidjs/router'

const Home = lazy(() => import("./Pages/Home"))
const FAQ = lazy(() => import("./Pages/FAQ"))
const Contact = lazy(() => import("./Pages/Contact"))
const Privacy = lazy(() => import("./Pages/Privacy"))

import Nav from "./Components/Nav"

const App: Component = () => {
  return <>
    <Nav></Nav>
    <Routes>
      <Route path="/" element={<Home/>} />
      <Route path="/faq" element={<FAQ/>}></Route>
      <Route path="/contact" element={<Contact/>}></Route>
      <Route path="/privacy" element={<Privacy/>}></Route>
    </Routes>
  </>;
};

export default App;