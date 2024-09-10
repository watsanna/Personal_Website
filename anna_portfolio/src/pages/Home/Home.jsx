import React from 'react';
import anna_pic from './anna_pic.png'; 
import './Home.css';

const Home = () => (
  <>
    <div className="flex flex-col items-center text-center pt-12">
      
      
      <h1 className="font-great-vibes text-[8vw] md:text-[6vw] lg:text-[4vw]">
        Welcome! 
        <span className="block font-allura text-[5vw] md:text-[4vw] lg:text-[2vw]">
          I'm Annaliese
        </span>
      </h1>

     
      <div className="flex justify-center mt-6">
        <img 
          src={anna_pic} 
          alt="Annaliese Watson" 
          className="w-[40vw] md:w-[30vw] lg:w-[20vw] max-w-full h-auto border-4 border-[#b05b26c4] shadow-[0_0_50px_rgba(220,105,33,0.768)] rotate-y-15 transition-transform duration-300 mb-8 rounded-[5%]" 
        />
      </div>

     
      <div className="bg-white/40 rounded-xl p-6 md:p-5 w-[90%] md:w-[70%] max-w-full h-auto shadow-md mb-12 mx-auto">
        <p className="text-gray-900 font-serif text-[4vw] md:text-[2vw] lg:text-[1vw]">
          I have a Bachelor’s in Science and Technology with a concentration in Computational Science and Engineering, complemented by a minor in Dance, reflecting my unique blend of analytical rigor and artistic flair.
        </p>
        <p className="text-gray-900 font-serif text-[4vw] md:text-[2vw] lg:text-[1vw] mt-4">
          With a keen interest in UI/UX design, I am on the lookout for impactful roles in VR scene development or front-end positions, where I can seamlessly merge computational science with creativity.
        </p>
      </div>

      
    

    </div>
  </>
);

export default Home;
