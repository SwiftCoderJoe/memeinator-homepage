import { Component } from 'solid-js';
import { Title } from '@solidjs/meta';

import Question from '../Components/Question';
import Box from '../Components/Box';
import BoxLink from '../Components/BoxLink';
import LargeTitle from '../Components/LargeTitle';

const Privacy: Component = () => {
  return <>
    <Title>Privacy</Title>
    <div class="flex flex-col h-screen w-screen">
      <div class="flex flex-col items-center divide-y">
        <div class="flex flex-col p-6 items-stretch w-full lg:w-1/3 text-left gap-3">
          <LargeTitle>The Main Ideas</LargeTitle>
          <Box>
            <ul style="list-style-type:disc;list-style-position: inside;">
              <li>
                <i>All</i> data collection on Memeinator is <i>opt-in</i>. If you don't want data collected, that's alright! Just turn it off in settings. 
              </li>

              <li>
                We only collect data related to usage of the app, not anything specific to you. Information collected could include which functions you use most often within the app, but would <i>never</i> include what text you put into the app.
              </li>

              <li>
                Your data is only used to see what parts of our app our users use the most and what we should focus on in the future. This data is not tied to you, and is instead viewed as aggregated trends. That being said, we use <a href="https://firebase.google.com/docs/analytics/" class="text-purple transition-all border-b border-white duration-200 hover:border-purple">Google Analytics for Firebase</a> to view this data, so you may also be subject to their policies.
              </li>
            </ul>
          </Box>
        </div>
        
        <div class="flex flex-col p-6 items-stretch w-full lg:w-1/3 text-left gap-3">
          <LargeTitle>Full Document</LargeTitle>
          <strong>Privacy Policy</strong> 
          <p>
            JC Development, LLC built Memeinator and the Memeinator Homepage. These SERVICES are provided by JC Development, LLC at no cost and are intended for use as is.
          </p>
          <p>
            This page is used to inform visitors regarding our policies with the collection, use, and disclosure of Personal Information.
          </p>
          <p>
            If you choose to use Memeinator or the Memeinator Homepage, then you agree to the collection and use of information in relation to this policy. The Personal Information that we collect is used for providing and improving Memeinator and the Memeinator Homepage. We will not use or share your information with anyone except as described in this Privacy Policy.
          </p>
          <p>
            <strong>Information Collection and Use</strong>
          </p>
          <p>
            For a better experience while using Memeinator and the Memeaintor Homepage, we use third-party services that may collect information used to identify you. The information that we request will be retained by us and used as described in this privacy policy.
          </p>
            <div>
              <p>
                Links to the privacy policies of third-party service providers used by Memeinator and the Memeinator Homepage:
              </p> 
              <ul>
                <li>
                  <a href="https://firebase.google.com/policies/analytics" target="_blank" rel="noopener noreferrer" class="text-purple transition-all border-b border-white duration-200 hover:border-purple">Google Analytics for Firebase</a>
                </li>
                <li>
                  <a href="https://firebase.google.com/support/privacy/" target="_blank" rel="noopener noreferrer" class="text-purple transition-all border-b border-white duration-200 hover:border-purple">Firebase Crashlytics</a>
                </li>
              </ul>
            </div>
            <p>
              <strong>Security</strong>
            </p>
            <p>
              We value your trust in providing us your Personal Information, thus we are striving to use commercially acceptable means of protecting it. But remember that no method of transmission over the internet, or method of electronic storage is 100% secure and reliable, and we cannot guarantee its absolute security.
            </p>
            <p>
              <strong>Links to Other Sites</strong>
            </p>
            <p>
              Memeinator and the Memeinator Homepage may contain links to other sites. If you click on a third-party link, you will be directed to that site. Note that these external sites are not operated by us. Therefore, we strongly advise you to review the Privacy Policy of these websites. We have no control over and assume no responsibility for the content, privacy policies, or practices of any third-party sites or services.
            </p>
            <p>
              <strong>Children's Privacy</strong>
            </p>
            <div>
              <p>
                These Services do not address anyone under the age of 13. We do not knowingly collect personally identifiable information from children under 13 years of age. In the case we discover that a child under 13 has provided us with personal information, we immediately delete this from our servers. If you are a parent or guardian and you are aware that your child has provided us with personal information, please contact us so that we will be able to do the necessary actions.
              </p>
            </div>
            <p>
              <strong>Changes to This Privacy Policy</strong>
            </p>
            <p>
              We may update our Privacy Policy from time to time. Thus, you are advised to review this page periodically for any changes. We will notify you of any changes by posting the new Privacy Policy on this page.
            </p>
            <p>This policy is effective as of 2022-06-27</p> <p><strong>Contact Us</strong></p> <p>
              If you have any questions or suggestions about our Privacy Policy, do not hesitate to contact us at memeinator-privacy@joecardenas.dev
            </p>
        </div>
      </div>
    </div>
  </>;
};

export default Privacy;
