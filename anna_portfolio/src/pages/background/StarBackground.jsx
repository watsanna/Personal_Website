import React, { useEffect } from 'react';
import '../background/back.css';

const StarBackground = () => {
  useEffect(() => {
    const canvas = document.getElementById('starsCanvas');
    const ctx = canvas.getContext('2d');
    let stars = [];
    const numStars = 200;

    const resizeCanvas = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
      stars = [];
      for (let i = 0; i < numStars; i++) {
        const x = Math.random() * window.innerWidth;
        const y = Math.random() * window.innerHeight;
        const z = Math.random() * window.innerWidth;
        stars.push(new Star(x, y, z));
      }
    };

    function Star(x, y, z) {
      this.x = x;
      this.y = y;
      this.z = z;
      this.size = Math.random() * 0.9 + 1.0; // Smaller stars, range between 0.1 and 1.0
      this.brightness = Math.random() * 0.8 + 0.2; 

      this.move = function () {
        const speed = 0.25; // control speed
        
        const targetX = window.innerWidth / 2;
        const targetY = 0; 

        const directionX = targetX - this.x;
        const directionY = targetY - this.y;
        const distance = Math.sqrt(directionX ** 2 + directionY ** 2);

        const normalizedX = directionX / distance;
        const normalizedY = directionY / distance;

        this.x += normalizedX * speed;
        this.y += normalizedY * speed;

        if (distance < 1) {
          this.x = Math.random() * window.innerWidth;
          this.y = window.innerHeight;
          this.z = Math.random() * window.innerWidth;
        }
      };

      this.show = function () {
        const x = (this.x - window.innerWidth / 2) * (window.innerWidth / this.z);
        const y = (this.y - window.innerHeight / 2) * (window.innerWidth / this.z);
        const rad = this.size * (window.innerWidth / this.z);
        drawStar(ctx, x + window.innerWidth / 2, y + window.innerHeight / 2, 5, rad, rad / 2, `rgba(255, 255, 255, ${this.brightness})`);
      };
    }

    function drawStar(ctx, cx, cy, spikes, outerRadius, innerRadius, color) {
      let rot = Math.PI / 2 * 3;
      let x = cx;
      let y = cy;
      let step = Math.PI / spikes;

      ctx.beginPath();
      ctx.moveTo(cx, cy - outerRadius)
      for (let i = 0; i < spikes; i++) {
        x = cx + Math.cos(rot) * outerRadius;
        y = cy - Math.sin(rot) * outerRadius;
        ctx.lineTo(x, y)
        rot += step

        x = cx + Math.cos(rot) * innerRadius;
        y = cy - Math.sin(rot) * innerRadius;
        ctx.lineTo(x, y)
        rot += step
      }
      ctx.lineTo(cx, cy - outerRadius)
      ctx.closePath();
      ctx.fillStyle = color;
      ctx.fill();
    }

    function draw() {
      ctx.clearRect(0, 0, window.innerWidth, window.innerHeight); 
      for (let star of stars) {
        star.show();
        star.move();
      }
    }

    function animate() {
      draw();
      requestAnimationFrame(animate);
    }

    resizeCanvas();
    animate();

    window.addEventListener('resize', resizeCanvas);

    return () => {
      window.removeEventListener('resize', resizeCanvas);
    };
  }, []);

  return <canvas id="starsCanvas"></canvas>;
};


export default StarBackground;

