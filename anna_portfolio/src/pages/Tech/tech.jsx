import React, { useState } from 'react';
import VRImage from './VR.jpeg';
import SLImage from './SL.jpeg';
import CBImage from './CB.jpeg';
import FRImage from './FR.jpeg';
import DWImage from './DW.jpeg';
import cb from './cyberbullying_research.pdf'; 
import vr from './VR_UI_research.pdf'; 
import sa from './swin_architecture.pdf';
import dr from './Digital Foundation_Recommender.pdf';
import dw from './dance_website.pdf';


const Tech = () => {
  const [isPdfOpen, setIsPdfOpen] = useState(false);
  const [selectedPdf, setSelectedPdf] = useState(null);

  const handleButtonClick = (pdf) => {
    setSelectedPdf(pdf);
    setIsPdfOpen(true);
  };

  const handleClosePdf = () => {
    setIsPdfOpen(false);
    setSelectedPdf(null);
  };

  return (
    <div className="flex justify-center w-full">
      <ul className="flex flex-wrap justify-center gap-6 w-full">
        <li className="w-full md:w-1/2 lg:w-1/3 p-4">
          <div className="bg-[#174260] rounded-lg shadow-lg flex flex-col overflow-hidden">
            <div className="h-40 w-full">
              <img src={VRImage} alt="VR Headset" className="h-full w-full object-cover"/>
            </div>
            <div className="p-4">
              <h2 className="text-white text-xl font-bold mb-4">
                Shader Development and User Interface Design for 3D Scientific Visualization in VR Headset
              </h2>
              <button 
                className="btn "
                onClick={() => handleButtonClick(vr)}
              >
                View Research Poster
              </button>
            </div>
          </div>
        </li>
  

        <li className="w-full md:w-1/2 lg:w-1/3 p-4">
          <div className="bg-[#174260] rounded-lg shadow-lg flex flex-col overflow-hidden">
            <div className="h-40 w-full">
              <img src={SLImage} alt="CB Research" className="h-full w-full object-cover"/>
            </div>
            <div className="p-4">
              <h2 className="text-white text-xl font-bold mb-4">
              Applying Swin Architecture to Diverse Sign Language Datasets
             
              </h2>
              <button 
                className="btn"
                onClick={() => handleButtonClick(sa)} 
              >
                View Research Poster
              </button>
            </div>
          </div>
        </li>
        

        <li className="w-full md:w-1/2 lg:w-1/3 p-4">
          <div className="bg-[#174260] rounded-lg shadow-lg flex flex-col overflow-hidden">
            <div className="h-40 w-full">
              <img src={CBImage} alt="CB Research" className="h-full w-full object-cover"/>
            </div>
            <div className="p-4">
              <h2 className="text-white text-xl font-bold mb-4">
                Cyberbullying Detection Utilizing Artificial Intelligence and Machine Learning
              </h2>
              <button 
                className="btn "
                onClick={() => handleButtonClick(cb)} 
              >
                View Research Poster
              </button>
            </div>
          </div>
        </li>




        <li className="w-full md:w-1/2 lg:w-1/3 p-4">
          <div className="bg-[#174260] rounded-lg shadow-lg flex flex-col overflow-hidden">
            <div className="h-40 w-full">
              <img src={FRImage} alt="CB Research" className="h-full w-full object-cover"/>
            </div>
            <div className="p-4">
              <h2 className="text-white text-xl font-bold mb-4">
              Digital Foundation Recommender
              </h2>
              <button 
                className="btn"
                onClick={() => handleButtonClick(dr)} 
              >
                View Research Poster
              </button>
            </div>
          </div>
        </li>



        <li className="w-full md:w-1/2 lg:w-1/3 p-4">
          <div className="bg-[#174260] rounded-lg shadow-lg flex flex-col overflow-hidden">
            <div className="h-40 w-full">
              <img src={DWImage} alt="CB Research" className="h-full w-full object-cover"/>
            </div>
            <div className="p-4">
              <h2 className="text-white text-xl font-bold mb-4">
              Dance Website - Software Engineering Project
              </h2>
              <button 
                className="btn "
                onClick={() => handleButtonClick(dw)} 
              >
                View Details
              </button>
            </div>
          </div>
        </li>

       
      </ul>

      
      {isPdfOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
          <div className="bg-white p-6 rounded-lg shadow-lg w-3/4 md:w-1/2">
            <embed src={selectedPdf} type="application/pdf" className="w-full h-96" />
            <button
              className="mt-4 bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600"
              onClick={handleClosePdf}
            >
              Close
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Tech;
