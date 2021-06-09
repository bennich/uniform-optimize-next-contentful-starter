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
  <input type="hidden" name="form-name" value="contact" />
</form>

    </>
  );
};