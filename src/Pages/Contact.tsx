import { Component, createSignal } from 'solid-js';
import { Title } from '@solidjs/meta';

import LargeTitle from '../Components/LargeTitle';

const Contact: Component = () => {
  return <>
    <Title>Contact</Title>
    <div class="flex flex-col h-screen w-screen">
      {/* This div used to center horizontally */}
      <div class="flex flex-col items-center divide-y">
        <div class="flex flex-col p-6 items-stretch w-full lg:w-1/3 text-left gap-3">
          <LargeTitle>Contact</LargeTitle>

          <form action="" class="flex flex-col items-stretch">
            <label for="name">Name</label>
            <input type="text" name="name" id="name" class="border rounded-md text-lg lg:text-xl p-1"/>
            <label for="subject">Subject</label>
            <input type="text" name="subject" id="subject" class="border rounded-md text-lg lg:text-xl p-1"/>
            <label for="email">Email</label>
            <input type="email" name="email" id="email" class="border rounded-md text-lg lg:text-xl p-1"/>
            <label for="message">Message</label>
            <textarea rows="10" name="message" id="message" class="border rounded-md text-md lg:text-lg p-1"/>
            <div class="flex flex-row justify-center p-3">
              <button type="submit" class="border border-white bg-slate-200 p-2 text-2xl rounded-md transition-all duration-200 hover:border-black">
                Submit
              </button>
            </div>
            
          </form>
        </div>
      </div>
    </div>
  </>;
};

export default Contact;
