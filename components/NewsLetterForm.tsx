import React from 'react';
import { useUniformTracker } from '@uniformdev/optimize-tracker-react';

export const NewsLetterForm = () => {

  const { tracker } = useUniformTracker();

  // const OnEnrichmentClick = async (EnrichmentLanguage) => {
  //     const tracked = await tracker.addEnrichment({
  //       name: 'Language',
  //       value: EnrichmentLanguage,
  //     })
      
  //     console.log(tracked);
  // };

  // const OnEnrichmentClickFireEvent = async (event: string) => {
  //   const eventFired = await tracker?.addEvent({
  //       label: 'EventTestLabel', 
  //       category: 'EventTestCategory',
  //       value: 'EventTestValue',
  //   })
  // };


    return (
      <>
<form name="contact" method="POST" data-netlify="true" content-type="application/x-www-form-urlencoded" action="/">
  <p>
    <label>Your Name: <input type="text" name="name" /></label>   
  </p>
  <p>
    <label>Your Email: <input type="email" name="email" /></label>
  </p>
  <p>
    <label>Your Role: <select name="role[]" multiple>
        <option value="leader">Leader</option>
        <option value="follower">Follower</option>
      </select></label>
  </p>
  <p>
    <label>Message: <textarea name="message" defaultValue={""} /></label>
  </p>
  <p>
    <button type="submit">Send</button>
  </p>
</form>

    </>
  );
};