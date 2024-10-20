import React, { useState } from 'react';
import VRImage from './VR.jpeg';
import SLImage from './SL.jpeg';
import CBImage from './CB.jpeg';
import FRImage from './FR.jpeg';
import DWImage from './DW.jpeg';
import AAImage from './app.jpeg';
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
                View Research Posters
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
              <a href="https://www.mdpi.com/2079-9292/13/8/1509" target="_blank" rel="noopener noreferrer">
                <button className="btn">
                  View Paper
                </button>
              </a>

              
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


        <li className="w-full md:w-1/2 lg:w-1/3 p-4">
          <div className="bg-[#174260] rounded-lg shadow-lg flex flex-col overflow-hidden">
            <div className="h-40 w-full">
              <img src={AAImage} alt="UI" className="h-full w-full object-cover"/>
            </div>
            <div className="p-4">
              <h2 className="text-white text-xl font-bold mb-4">
              UI/UX Project: Silent Voice - an app to learn sign language
              </h2>

              <a href="https://www.figma.com/proto/9wZsmrcCnRat0lAvTtnIXF/UI%2FUX-Final-Project?page-id=38%3A2786&node-id=41-2787&starting-point-node-id=41%3A2787&scaling=scale-down&content-scaling=fixed&show-proto-sidebar=1&t=01AXWs7XXw5DNThB-1" target="_blank" rel="noopener noreferrer">
                <button className="btn">
                View Prototype
                </button>
              </a>

              <a href="https://www.figma.com/proto/9wZsmrcCnRat0lAvTtnIXF/UI%2FUX-Final-Project?page-id=0%3A1&node-id=712-2605&viewport=-1090%2C-3331%2C0.4&t=WC0iK27RXWLuwR3d-1&scaling=contain&content-scaling=fixed&starting-point-node-id=712%3A2605" target="_blank" rel="noopener noreferrer">
                <button className="btn">
                View Presentation
                </button>
              </a>

              
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
