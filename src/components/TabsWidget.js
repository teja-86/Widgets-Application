import React, { useState } from 'react';

const TabsWidget = () => {
  const [activeTab, setActiveTab] = useState('about');

  const renderContent = () => {
    switch (activeTab) {
      case 'about':
        return <p>This is the About Me section.</p>;
      case 'experiences':
        return <p>This is the Experiences section.</p>;
      case 'recommended':
        return <p>This is the Recommended section.</p>;
      default:
        return null;
    }
  };

  return (
    <div className="p-6 bg-gray-400 shadow-lg rounded-lg mb-6 max-w-xl mx-auto lg:mx-0">
      <div className="flex justify-around space-x-16 border-b-2 mb-4 bg-slate-800 text-white rounded-lg">
        <button
          className={`pb-2 px-4  rounded-lg transition-colors duration-300 ease-in-out ${
            activeTab === 'about'
              ? 'border-b-0 p-2 bg-gray-500 text-slate-900'
              : ' bg-slate-800 text-white hover:bg-gray-500'
          }`}
          onClick={() => setActiveTab('about')}
        >
          About Me
        </button>
        <button
          className={`pb-2 px-4 rounded-lg transition-colors duration-300 ease-in-out ${
            activeTab === 'experiences'
              ? 'border-b-0 p-2 bg-gray-500 text-slate-900'
              : 'hover:bg-gray-500'
          }`}
          onClick={() => setActiveTab('experiences')}
        >
          Experiences
        </button>
        <button
          className={`pb-2 px-4 rounded-lg transition-colors duration-300 ease-in-out ${
            activeTab === 'recommended'
              ? 'border-b-0 p-2 bg-gray-500 text-slate-900'
              : 'hover:bg-gray-500'
          }`}
          onClick={() => setActiveTab('recommended')}
        >
          Recommended
        </button>
      </div>
      <div className="text-gray-700">{renderContent()}</div>
    </div>
  );
};

export default TabsWidget;
