import { Component, createSignal } from 'solid-js';

import Header from "./../Components/Header"
import LargeTitle from '../Components/LargeTitle';
import Box from '../Components/Box';
import BoxLink from '../Components/BoxLink';


const Contact: Component = () => {
  return (
    <div class="flex flex-col h-screen w-screen">
      <Header page="contact" />
      {/* This div used to center horizontally */}
      <div class="flex flex-col items-center divide-y">
        <div class="flex flex-col p-6 items-stretch w-full lg:w-1/3 text-left gap-3">
          <LargeTitle>Contact</LargeTitle>

          <Box>
            It's easy to contact us. Simply email us and we'll get back to you as soon as possible. If you're emailing about an issue, try to include as many details as possible to help us quickly get you the help you need.
          </Box>

          <BoxLink href="mailto:memeinator-support@joecardenas.dev">
            memeinator-support@joecardenas.dev
          </BoxLink>
        </div>
      </div>
    </div>
  );
};

export default Contact;
