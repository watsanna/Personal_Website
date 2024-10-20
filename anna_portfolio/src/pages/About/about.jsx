import React, { useState } from 'react';
import './about.css'; 
import resume from './Annaliese_Watson_Resume.pdf.pdf';

const About = () => {
  
  const [activeIndex, setActiveIndex] = useState(0);

 

const toggleAccordion = (index) => {
  setActiveIndex(activeIndex === index ? null : index);
};

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
    <>

     
     <div className="bg-white/40 rounded-xl p-6 md:p-5 w-[90%] md:w-[70%] max-w-full h-auto shadow-md mb-12 mx-auto">
        <p className="text-gray-900 font-serif text-[4vw] md:text-[2vw] lg:text-[1vw]">
        My journey in the tech and design industry has equipped me with proven leadership skills, meticulous attention to detail, and proficiency in front-end development.
        </p>
        <p className="text-gray-900 font-serif text-[4vw] md:text-[2vw] lg:text-[1vw] mt-4">
        I am eager to contribute innovative solutions, collaborate with diverse teams, and drive excellence in every project. When I'm not coding, you can find me exploring the latest design trends, dancing to my favorite tunes, or playing the violin. Let's connect and create something amazing together!
        </p>
      </div>



      <div className="resume-actions flex justify-center mb-12">
  
  <button 
    className="btn"
    onClick={() => handleButtonClick(resume)}  
  >
    View Resume
  </button>
</div>


{isPdfOpen && (
  <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
    <div className=" iframe-container bg-white p-6 rounded-lg shadow-lg w-3/4 md:w-1/2">
      <iframe src={selectedPdf} type="application/pdf" className="w-full h-96" />
      <button
        className="mt-4 bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600"
        onClick={handleClosePdf}
      >
        Close
      </button>
    </div>
  </div>
)}



      <div className='container'>
        <div className='container-slides'>
          <ul className='slides'>
            <li className={`slide brand1 ${activeIndex === 0   ? 'active' : ''}`}>
              <a href="#" className="action" onClick={(e) => { e.preventDefault(); toggleAccordion(0); }}>
                <span>Education</span>
              </a>
              {activeIndex === 0 && (
                <div className="slide-content">
                <h1></h1>

                <div className="container-skills"> 
                <p>
                  Kean University '25 <br />
                  Master of Science in Science and Technology <br />
                  Concentration: Computational Science and Engineering <br />
                  
                </p>
              </div>

                
                <div className="container-skills">
                <p>
                  Kean University '24 <br />
                  Bachelor of Science in Science and Technology <br />
                  Concentration: Computational Science and Engineering <br />
                  Minor: Dance <br />
                  Magna Cum Laude & Honors Distinction in Research
                </p>
              </div>

              </div>
              
              )}
            </li>

            <li className={`slide brand2 ${activeIndex === 1 ? 'active' : ''}`}>
              <a href="#" className="action" onClick={(e) => { e.preventDefault(); toggleAccordion(1); }}>
                <span>Work Experience</span>
              </a>
              {activeIndex === 1 && (
                <div className="slide-content">
                
                 <h1></h1>
                  
                  <div className="container-skills"> 
                  <p>
                  IT Support Techncian - Student Leader <br />
                  Kean Univeristy Kean IT <br />
                  Sept 2022 - May 2024
                </p>
                </div>

                <div className="container-skills"> 
                  <p>
                  IT Intern <br />
                  ATL <br />
                  June - July 2023
                </p>
                </div>

                <div className="container-skills"> 
                  <p>
                  Risk Officer Intern<br />
                  NHT <br />
                  Jul - Aug 2022
                </p>
                </div>
  
                </div>
              )}
            </li>

            <li className={`slide brand3 ${activeIndex === 2 ? 'active' : ''}`}>
              <a href="#" className="action" onClick={(e) => { e.preventDefault(); toggleAccordion(2); }}>
                <span>Skills</span>
              </a>
              {activeIndex === 2 && (
                <div className="slide-content">
                  <h2 className="text-white-900 font-serif text-[4vw] md:text-[2vw] lg:text-[1vw]">Core Skills</h2>

                  

                  <p className='container-skills'>Leadership</p>
                  <p className='container-skills'>Creative</p>
                  <p className='container-skills'>Team Work</p>
                  <p className='container-skills'>Meticulous</p>
                  <p className='container-skills'>Organized</p>
                  <p className='container-skills'>Problem Solving</p>
                  <p className='container-skills'>Risk Management</p>
                  

                  <h2 className="text-white-900 font-serif text-[4vw] md:text-[2vw] lg:text-[1vw]"> Technical Skills</h2>

                  <p className='container-skills'>HTML</p>
                  <p className='container-skills'>CSS</p>
                  <p className='container-skills'>Javascript</p>
                  <p className='container-skills'>Java </p>
                  <p className='container-skills'>Python</p>
                  <p className='container-skills'>C#</p>
                  <p className='container-skills'>C++</p>
                  <p className='container-skills'>SQL</p>

                  <br/>
                  <p className='container-skills'>React</p>
                  <p className='container-skills'>Angular</p>
                  <p className='container-skills'>Node.js</p>
                  <p className='container-skills'>Responsive Web Design</p>
                  <p className='container-skills'>GraphQl</p>
                  <p className='container-skills'>API </p>
                  
                  

                  <br/>
                  <p className='container-skills'>Git</p>
                  <p className='container-skills'>Figma</p>
                  <p className='container-skills'>Canva</p>
                  <p className='container-skills'>Unity</p>
                  <p className='container-skills'>Visual Studio</p>
                  <p className='container-skills'>VSC</p>

                  <br/>
                  <p className='container-skills'>Mac OS</p>
                  <p className='container-skills'>Windows OS</p>
                  <p className='container-skills'>Linux</p>
                  <p className='container-skills'>Shader Programming</p>
                  <p className='container-skills'>MS Office Suite</p>
                  

                   </div>
              )}
            </li>

            <li className={`slide brand4 ${activeIndex === 3 ? 'active' : ''}`}>
              <a href="#" className="action" onClick={(e) => { e.preventDefault(); toggleAccordion(3); }}>
                <span>Extra Curricular</span>
              </a>
              {activeIndex === 3 && (


                <div className="slide-content">

                  <h2 className="text-white-900 font-serif text-[4vw] md:text-[2vw] lg:text-[1vw]">Research Projects</h2>

                  <div className="container-skills"> 
                  <p>
                    
                     <li>Shader Development and User Interface Design for 3D Scientific Visualization in VR Headset ('21-'24) </li> <br />
                     <li>Applying Swin Architecture to Diverse Sign Language Datasets ('23-'24) </li> <br/>
                     <li>Cyberbullying Detection Utilizing Artificial Intelligence and Machine Learning ('22-'23) </li> <br />
                     <li>Digital Foundation Recommender ('23)</li> <br />
                     
                     
                     <button class="btn">View More Details on Projects</button>

                  
                  
                </p>
                </div>
                <br/>

                

                <h2 className="text-white-900 font-serif text-[4vw] md:text-[2vw] lg:text-[1vw]">Dance</h2>
                <div className="container-skills"> 
                  <p>
                  <li> Kean Dance Theatre - President ('23-'25) Treasurer ('21-'23) </li> <br />
                  <li> Lyn Dance Company </li> <br />
                  
                  <button class="btn">View More Details on Dance Experience</button>
                </p>
                </div>
                 

                <h2 className="text-white-900 font-serif text-[4vw] md:text-[2vw] lg:text-[1vw]">Other</h2>
                <div className="container-skills"> 
                  <p>
                  <li> American Sign Language - Beginner </li> <br />
                  Violinist NJIO Orchestra '23-'24- Beginner <br />
                </p>
                </div>
                
                <h1></h1>
                 
                </div>
                
              )}
            </li>

            
          </ul>
        </div>
      </div>
        
    
    
    </>
  );
};

export default About;
