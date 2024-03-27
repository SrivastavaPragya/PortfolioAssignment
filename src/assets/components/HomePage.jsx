import React, { useEffect } from 'react';
import { Link, Route, Routes, useNavigate } from 'react-router-dom';
// Assuming you have components for each route


import Contact from './Contact';

const HomePage = () => {
   
  useEffect(() => {
    let canvas = document.getElementById('animation');
    let ctx = canvas.getContext('2d');
    let birds = [];
    const tot = 35;
    const radius = 140;

    class Bird {
      constructor() {
        this.pos = {
          x: Math.random() * canvas.width,
          y: Math.random() * canvas.height,
        };
        this.acc = {
          x: Math.random() * 4 - 2,
          y: Math.random() * 4 - 2,
        };
        this.color = `rgb(${((Math.random() * 127 + 128) | 0)}, ${((Math.random() * 127 + 128) | 0)}, ${((Math.random() * 127 + 128) | 0)})`;
      }

      connect() {
        birds.forEach(j => {
          let b = j.pos;
          let dist = Math.pow((b.x - this.pos.x), 2) + Math.pow((b.y - this.pos.y), 2);
          if (dist <= radius * radius) {
            ctx.beginPath();
            ctx.moveTo(this.pos.x, this.pos.y);
            ctx.lineTo(b.x, b.y);
            ctx.stroke();
            ctx.strokeStyle = 'gray'; 
            ctx.closePath();
          }
        });
      }

      draw() {
        ctx.beginPath();
        ctx.fillStyle = this.color;
        ctx.arc(this.pos.x, this.pos.y, 5, 0, Math.PI * 2);
        ctx.fill();
        ctx.stroke();
        ctx.closePath();
      }

      checkSides() {
        if (this.pos.x < 0 || this.pos.x > canvas.width) this.acc.x *= -1;
        if (this.pos.y < 0 || this.pos.y > canvas.height) this.acc.y *= -1;
      }

      update() {
        this.checkSides();
        this.pos.x += this.acc.x;
        this.pos.y += this.acc.y;
      }
    }

    function reset() {
      canvas.width = window.innerWidth;
 
      birds = []; // Clear existing birds
      for (let i = 0; i < tot; ++i) {
        birds.push(new Bird());
      }
    }

    function animate() {
      ctx.fillStyle = '#00273315';
      ctx.fillRect(0, 0, canvas.width, canvas.height);
      birds.forEach(bird => {
        bird.connect();
        bird.update();
        bird.draw();
      });
      requestAnimationFrame(animate);
    }

    reset();
    animate();
    window.onresize = reset;

    return () => {
      window.removeEventListener('resize', reset);
    };
  }, []);

  return (
    <div>
      
      <header className='Home' style={{marginTop:"12rem"}}>
        <canvas id="animation" height="350" style={{ width:"100%"}}></canvas>
        <div id="info">
        <img src="https://portfolio-image-store.s3.ap-south-1.amazonaws.com/1706283290608-n4hq7k" alt="Profile"/>
          <span>John doe
  

          </span>
         
        
        </div>
      </header>

      
    </div>
  );
};

export default HomePage;

