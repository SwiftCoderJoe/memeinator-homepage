import { Component, createSignal } from 'solid-js';

import iPhone from "./../Media/iPhoneGradient.png"
import appStoreBadge from "./../Media/appStoreBadge.svg"

import Header from "./../Components/Header"

const Home: Component = () => {
  const [transform, setTransform] = createSignal("md:translate-y-[0]");
  const [scale, setScale] = createSignal("scale-125")

  setTimeout(() => setTransform("md:translate-y-1/4"), 100)
  setTimeout(() => setScale("scale-100"), 100)

  return (
    <div class="flex flex-col h-screen w-screen">
      <Header page="home" />
      <div class="p-3 flex-1 min-h-0 flex flex-col-reverse md:flex-row justify-end md:justify-around overflow-hidden">
        <img src={iPhone} alt="Memeinator app" class={`md:h-full transform md:scale-125 ${scale()} ${transform()} transition-all duration-1000`}/>
        <div class="flex flex-col justify-center gap-2 text-center md:text-left">
          <h1 class="text-5xl md:text-8xl text-purple">Welcome to Memeinator.</h1>
          <h1 class="text-3xl md:text-4xl">An app for quickly making text fun.</h1>
          <a href="https://swiftcoderjoe.github.io"><img src={appStoreBadge} alt="Get this app from the app store." class="inline h-12"/></a>
        </div>
      </div>
    </div>
  );
};

export default Home;
