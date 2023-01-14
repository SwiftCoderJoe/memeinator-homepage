import { Component, createSignal } from 'solid-js';
import { Title } from '@solidjs/meta';

import iPhone from "./../Media/memeinator.png"
import appStoreBadge from "./../Media/appStoreBadge.svg"

const Home: Component = () => {
  const [transform, setTransform] = createSignal("lg:translate-y-[0]");
  const [scale, setScale] = createSignal("scale-125")

  setTimeout(() => setTransform("lg:translate-y-1/4"), 100)
  setTimeout(() => setScale("scale-100"), 100)

  return <>
    <Title>Memeinator</Title>
    <div class="flex flex-col h-screen w-screen">
      <div class="p-3 flex-1 min-h-0 flex flex-col-reverse lg:gap-12 lg:flex-row justify-end lg:justify-around overflow-hidden">
        <img src={iPhone} alt="Memeinator app" class={`lg:h-full transform lg:scale-125 ${scale()} ${transform()} transition-all duration-1000`}/>
        <div class="flex flex-col justify-center gap-2 text-center lg:text-left">
          <h1 class="text-5xl lg:text-8xl text-purple">Welcome to Memeinator.</h1>
          <h1 class="text-3xl lg:text-4xl">An app for quickly making text fun.</h1>
          <a href="https://apps.apple.com/us/app/memeinator/id1594106750"><img src={appStoreBadge} alt="Get this app from the app store." class="inline h-12"/></a>
        </div>
      </div>
    </div>
  </>;
};

export default Home;
