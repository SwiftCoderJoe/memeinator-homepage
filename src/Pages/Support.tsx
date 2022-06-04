import { Component, createSignal } from 'solid-js';

import Header from "./../Components/Header"

const Home: Component = () => {
  return (
    <div class="flex flex-col h-screen w-screen">
      <Header page="support" />
      <div class="flex flex-col p-6 items-center">
          <div class="flex flex-col items-stretch lg:w-1/3 text-left gap-3">
            <div class="flex flex-row justify-center"><div class="bg-slate-200 rounded-md p-6 w-min text-5xl lg:text-8xl">FAQ</div></div>
            <div class="flex flex-col divide-solid p-3 gap-3 border rounded-md">
                <p class="text-lg lg:text-2xl border-b">I purchased Memeinator Pro, but it's not working. What should I do?</p>
                <p class="text-md lg:text-xl font-light">First, you can contact us using the links below to get help with your purchase. If this doesn't work or you don't want to do this, you can also request a refund. All purchases made on the Memeinator app are done through Apple. If Memeinator Pro is not working or is not up to your standards, you can always refund the purchase my going to the "More" tab, then clicking "Help", clicking on "Memeinator Pro" and then clicking "Request a Refund". Refunds are requested through Apple, so we can't guarantee that your refund will be accepted.</p>
            </div>
          </div>
          

      </div>
    </div>
  );
};

export default Home;
