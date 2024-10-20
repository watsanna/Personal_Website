import React, { useState } from 'react';

const Mode = () => {
  

  const [isDarkMode, setIsDarkMode] = useState(() => {
    const body = document.body;
    body.classList.add('dark-mode'); 
    return true; 
  });

  const toggleMode = () => {
    const body = document.body;
    if (isDarkMode) {
      body.classList.remove('dark-mode');
      body.classList.add('light-mode');
    } else {
      body.classList.remove('light-mode');
      body.classList.add('dark-mode');
    }
    setIsDarkMode(!isDarkMode);
  };

  return (
    <div className="absolute top-5 right-5 mt-5">
      <label className="flex items-center cursor-pointer">
        {/*<div className="mr-3 text-gray-700 font-bold">
          {isDarkMode ? 'DARK' : 'LIGHT'}
        </div>*/}
        <div className="relative">
          <input type="checkbox" className="sr-only" checked={isDarkMode} onChange={toggleMode} />
          <div className="block bg-gray-600 w-14 h-8 rounded-full"></div>
          <div
            className={`absolute left-1 top-1 w-6 h-6 rounded-full transition-transform duration-300 ease-in-out ${
              isDarkMode ? 'translate-x-6 bg-yellow-400' : 'bg-yellow-400'
            }`}
          >
            {isDarkMode ? '🌙' : '☀️'}
          </div>
        </div>
      </label>
    </div>
  );
};

export default Mode;
