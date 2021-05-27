import React from 'react';
import { useUniformTracker } from '@uniformdev/optimize-tracker-react';

export const DevLanguages = () => {

  const { tracker } = useUniformTracker();

  const OnEnrichmentClick = async (EnrichmentLanguage) => {
      const tracked = await tracker.addEnrichment({
        name: 'Language',
        value: EnrichmentLanguage,
      })
      
      console.log(tracked);
  };

  const OnEnrichmentClickFireEvent = async (event: string) => {
    const eventFired = await tracker?.addEvent({
        label: 'EventTestLabel', 
        category: 'EventTestCategory',
        value: 'EventTestValue',
    })
  };


    return (
      <>
    <section className="bg-white border-b py-8">
      <div className="container mx-auto flex flex-wrap pt-4 pb-12">
    <div className="w-full md:w-1/3 p-6 flex flex-col flex-grow flex-shrink">
      <div className="flex-1 bg-white rounded-t rounded-b-none overflow-hidden shadow space-y-2 pt-2">
        <div className="flex-none mt-auto bg-white rounded-b rounded-t-none overflow-hidden">
          <div className="mt-3 mb-3 flex items-center justify-start">
            Typescript
          </div>
        </div>
        <a href="#" className="flex flex-wrap no-underline hover:no-underline">
          <div className="w-full font-bold text-xl text-gray-800 px-6">We would like to know your preferences</div>
        </a>
        <div className="text-gray-800 px-6 pb-6 text-sm">
        <button
                  type="button"
                  onClick={ () => OnEnrichmentClick('Typescript')}
                  className="mx-auto lg:mx-0 hover:underline bg-white text-gray-800 font-bold rounded-full my-6 py-4 px-8 shadow-lg"
                >
                  Typescript
                </button>
        </div>
      </div>
    </div>

    <div className="w-full md:w-1/3 p-6 flex flex-col flex-grow flex-shrink">
      <div className="flex-1 bg-white rounded-t rounded-b-none overflow-hidden shadow space-y-2 pt-2">
        <div className="flex-none mt-auto bg-white rounded-b rounded-t-none overflow-hidden">
          <div className="mt-3 mb-3 flex items-center justify-start">
            Javascript
          </div>
        </div>
        <a href="#" className="flex flex-wrap no-underline hover:no-underline">
          <div className="w-full font-bold text-xl text-gray-800 px-6">We would like to know your preferences</div>
        </a>
        <div className="text-gray-800 px-6 pb-6 text-sm">
        <button
                  type="button"
                  onClick={ () => OnEnrichmentClick('Javascript')}
                  className="mx-auto lg:mx-0 hover:underline bg-white text-gray-800 font-bold rounded-full my-6 py-4 px-8 shadow-lg"
                >
                  Javascript
                </button>
        </div>
      </div>
    </div>

    <div className="w-full md:w-1/3 p-6 flex flex-col flex-grow flex-shrink">
      <div className="flex-1 bg-white rounded-t rounded-b-none overflow-hidden shadow space-y-2 pt-2">
        <div className="flex-none mt-auto bg-white rounded-b rounded-t-none overflow-hidden">
          <div className="mt-3 mb-3 flex items-center justify-start">
            Trigger Event Signal
          </div>
        </div>
        <a href="#" className="flex flex-wrap no-underline hover:no-underline">
          <div className="w-full font-bold text-xl text-gray-800 px-6">Trigger Event Signal</div>
        </a>
        <div className="text-gray-800 px-6 pb-6 text-sm">
        <button
                  type="button"
                  onClick={ () => OnEnrichmentClickFireEvent('EventTestLabel')}
                  className="mx-auto lg:mx-0 hover:underline bg-white text-gray-800 font-bold rounded-full my-6 py-4 px-8 shadow-lg"
                >
                  C#
                </button>
        </div>
      </div>
    </div>
    </div>
    </section>
    </>
  );
};