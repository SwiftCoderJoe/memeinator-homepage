import { Component, createSignal } from 'solid-js';
import { Title } from '@solidjs/meta';

import Question from '../Components/Question';
import LargeTitle from '../Components/LargeTitle';

const FAQ: Component = () => {
  return <>
    <Title>FAQ</Title>
    <div class="flex flex-col h-screen w-screen">
      {/* This div used to center horizontally */}
      <div class="flex flex-col items-center divide-y">
        <div class="flex flex-col p-6 items-stretch w-full lg:w-1/3 text-left gap-3">
          <LargeTitle>FAQ</LargeTitle>
          <Question asking="What phones are supported?">
            As of now, Memeinator is only available on devices running iOS 15 or newer. The full list of supported devices can be found <a href="https://support.apple.com/guide/iphone/supported-models-iphe3fa5df43/ios" class="text-purple transition-all border-b border-white duration-200 hover:border-purple">here</a>.
          </Question>
          <Question asking="Is Memeinator Private?">
            Memeinator does track basic usage statistics, such as how long you use the app and what features you use most. None of this data is tied to you and it is always aggregated and anonymized. Nothing you type into Memeinator or Memeinator Keyboard <i>ever</i> leaves your device.
          </Question>
          <Question asking="I purchased Memeinator Pro, but it's not working. What should I do?">
            First, you can contact us using the links below to get help with your purchase. If this doesn't work or you don't want to do this, you can also request a refund. All purchases made on the Memeinator app are done through Apple. If Memeinator Pro is not working or is not up to your standards, you can always refund the purchase my going to the "More" tab, then clicking "Help", clicking on "Memeinator Pro" and then clicking "Request a Refund". Refunds are requested through Apple, so we can't guarantee that your refund will be accepted.
          </Question>
        </div>
      </div>
    </div>
  </>;
};

export default FAQ;
