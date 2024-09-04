import React from 'react';
import TabsWidget from './components/TabsWidget';
import GalleryWidget from './components/GalleryWidget';

const App = () => {
  return (
    <div className="min-h-screen bg-gray-100 flex justify-center">
      <div className="flex w-full max-w-6xl">
        <div className="hidden md:block md:w-1/2"></div>
        <div className="w-full md:w-1/2 p-4 space-y-6">
          <TabsWidget />
          <GalleryWidget />
        </div>
      </div>
    </div>
  );
};

export default App;
