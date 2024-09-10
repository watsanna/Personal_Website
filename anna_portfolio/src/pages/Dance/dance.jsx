import React from 'react';
import './dance.css';
import contemp from './contemp.jpg';
import lyrical from './lyrical.jpg';
import tap from './tap.jpg';

const Dance = () => {
  return (
    <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3 p-4 justify-center mx-auto">
      <div className="flip-card">
        <div className="flip-card-inner">
          <div className="flip-card-front">
            <img src={lyrical} alt="lyrical" />
            <p className="flip-card-text">
              Why I Dance?
            </p>
          </div>
          <div className="flip-card-back">
            <p className="skills">
              Dance is my way of expressing myself. It allows me to speak from the heart, communicating to others through art and movement.
            </p>
          </div>
        </div>
      </div>

      <div className="flip-card">
        <div className="flip-card-inner">
          <div className="flip-card-front">
            <img src={tap} alt="tap" />
            <p className="flip-card-text">
              My Journey
            </p>
          </div>
          <div className="flip-card-back">
            <p className="skills">Levites Dance Ministry <br/> 2005 - 2022 <br/> Minister, Team Leader</p>
            <p className="skills">Lyn Dance Company <br/> 2020 - Present <br/> Choreographer</p>
            <p className="skills">Kean Dance Theatre <br/> Treasurer 2021 - 2023 <br/> President 2023 - 2025</p>
            <p className="skills">Kean University <br/> Dance Minor <br/> 2021 - 2024</p>
          </div>
        </div>
      </div>

      <div className="flip-card">
        <div className="flip-card-inner">
          <div className="flip-card-front">
            <img src={contemp} alt="contemp" />
            <p className="flip-card-text">
              Genres
            </p>
          </div>
          <div className="flip-card-back">
            <p className="skills">Modern</p>
            <p className="skills">Tap</p>
            <p className="skills">Folk</p>
            <p className="skills">Jazz</p>
            <p className="skills">Contemporary</p>
            <p className="skills">Latin</p>
            <p className="skills">Liturgical</p>
            <p className="skills">Acrobatics</p>
            <p className="skills">Hiphop</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dance;
