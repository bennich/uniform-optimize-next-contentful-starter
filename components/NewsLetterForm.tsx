import React from 'react';
import { useUniformTracker } from '@uniformdev/optimize-tracker-react';
import {analytics} from '../lib/local-tracker' 
import WaveSplitter from './WaveSplitter';

export const NewsLetterForm = () => {

  const { tracker } = useUniformTracker();

   const OnFormSubmit = async (interest: string) => {
     const eventLabel = 'Newsletter submission';
     const eventCategory = 'Forms';
     const eventvalue = interest;

     const eventFired = await tracker?.addEvent({
         label: eventLabel, 
         category: eventCategory,
         value: eventvalue,
     })

     analytics.track('Newsletter submission');

   };


    return (
      <>
      <WaveSplitter />
    <section className="container mx-auto text-center py-6 mb-12">
      <h1 className="w-full my-2 text-5xl font-bold leading-tight text-center text-white">Subscribe to UniformConfs newsletter</h1>
      <div className="w-full mb-4">
        <div className="h-1 mx-auto bg-white w-1/6 opacity-25 my-0 py-0 rounded-t" />
      </div>
      <h2 className="my-4 text-3xl leading-tight">Tell us what you are most interested in!</h2>
      <br />
      <div>
          <form name="newsletter" method="POST" data-netlify="true" content-type="application/x-www-form-urlencoded" action="/" onSubmit={ () => OnFormSubmit('Typescript')}>
            <p>
              <label>Your Name: <input type="text" name="name" /></label>   
            </p>
            <p>
              <label>Your Email: <input type="email" name="email" /></label>
            </p>
            <p>
              <label>I want to hear more about: 
                <select name="demo_interest">
                  <option value="cpf">I'm interested in speaking</option>
                  <option value="marketer">Marketing sessions</option>
                  <option value="dev">Developer sessions</option>
                </select>
              </label>
            </p>
            <p>
              <button type="submit" className="mx-auto mt-3 lg:mx-0 hover:underline bg-white text-gray-800 font-bold rounded-full my-6 py-4 px-8 shadow-lg">Send</button>
            </p>
            <input type="hidden" name="form-name" value="newsletter" />
          </form>
        </div>
    </section>
       
    </>
  );
};