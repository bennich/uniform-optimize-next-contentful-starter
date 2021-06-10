import React from 'react';
import { useUniformTracker } from '@uniformdev/optimize-tracker-react';
import {analytics} from '../lib/local-tracker' 

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
                <select name="interest">
                  <option value="cpf">I'm interested in speaking</option>
                  <option value="marketer">Marketing sessions</option>
                  <option value="dev">Developer sessions</option>
                </select>
              </label>
            </p>
            <p>
              <button type="submit">Send</button>
            </p>
            <input type="hidden" name="form-name" value="newsletter" />
          </form>
        </div>
    </>
  );
};