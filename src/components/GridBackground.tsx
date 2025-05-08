"use client";
import {useEffect, useRef, useState} from 'react';

const GridBackground = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [starsCount, setStarsCount] = useState(10);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    const baseScreenSize = 1920;
    
    const handleResize = () => {
      // Adjust star count based on screen width
      const newWidth = window.innerWidth;
      setStarsCount(Math.max(3, Math.floor(newWidth / 200))); // Fewer stars on smaller screens
      
      canvas.width = canvas.offsetWidth;
      canvas.height = canvas.offsetHeight;
    };

    handleResize();

    // Grid parameters
    const gridSize = 40;
    const gridColor = 'rgba(255, 255, 255, 0.2)';

    // Initialize stars array
    let stars: Array<{
      x: number;
      y: number;
      size: number;
      baseSpeed: number;
      tailLength: number;
      angle: number;
      brightness: number;
      fading: boolean;
      life: number;
    }> = [];

    const initStars = () => {
      stars = Array(starsCount).fill(null).map(() => ({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        size: Math.random() * 4 + 3,
        baseSpeed: Math.random() * 3 + 2,
        tailLength: Math.random() * 50 + 30,
        angle: Math.PI / 4,
        brightness: Math.random() * 0.5 + 0.5,
        fading: false,
        life: Math.random() * 150 + 100
      }));
    };

    initStars();

    const drawStar = (x: number, y: number, size: number, brightness: number) => {
      const gradient = ctx.createRadialGradient(
        x, y, size * 0.3,
        x, y, size
      );
      gradient.addColorStop(0, `rgba(255, 255, 255, ${brightness})`);
      gradient.addColorStop(1, 'rgba(255, 255, 255, 0)');
      
      ctx.fillStyle = gradient;
      ctx.beginPath();
      ctx.arc(x, y, size, 0, Math.PI * 2);
      ctx.fill();
    };

    const drawTail = (x: number, y: number, angle: number, length: number, width: number, brightness: number) => {
      const endX = x - Math.cos(angle) * length;
      const endY = y - Math.sin(angle) * length;
      
      const gradient = ctx.createLinearGradient(x, y, endX, endY);
      gradient.addColorStop(0, `rgba(255, 255, 255, ${brightness * 0.8})`);
      gradient.addColorStop(0.7, `rgba(200, 200, 255, ${brightness * 0.3})`);
      gradient.addColorStop(1, 'rgba(150, 150, 255, 0)');
      
      ctx.strokeStyle = gradient;
      ctx.lineWidth = width;
      ctx.lineCap = 'round';
      ctx.beginPath();
      ctx.moveTo(x, y);
      ctx.lineTo(endX, endY);
      ctx.stroke();
    };

    const draw = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      // Draw grid
      ctx.strokeStyle = gridColor;
      ctx.lineWidth = 1;
      for (let x = 0; x <= canvas.width; x += gridSize) {
        ctx.beginPath();
        ctx.moveTo(x, 0);
        ctx.lineTo(x, canvas.height);
        ctx.stroke();
      }
      for (let y = 0; y <= canvas.height; y += gridSize) {
        ctx.beginPath();
        ctx.moveTo(0, y);
        ctx.lineTo(canvas.width, y);
        ctx.stroke();
      }

      const sizeRatio = canvas.width / baseScreenSize;

      stars.forEach((star) => {
        const currentSpeed = star.baseSpeed * sizeRatio;
        
        star.x += Math.cos(star.angle) * currentSpeed;
        star.y += Math.sin(star.angle) * currentSpeed;
        star.life--;

        if (!star.fading && Math.random() > 0.97) star.fading = true;
        if (star.fading) star.brightness = Math.max(0, star.brightness - 0.015);

        if (star.brightness > 0.1) {
          drawTail(
            star.x, 
            star.y, 
            star.angle, 
            star.tailLength, 
            star.size * 0.8, 
            star.brightness
          );
          drawStar(star.x, star.y, star.size, star.brightness);
        }

        if (star.brightness <= 0.1 || star.life <= 0 ||
            star.x > canvas.width + 100 || star.y > canvas.height + 100) {
          Object.assign(star, {
            x: Math.random() * canvas.width,
            y: Math.random() * canvas.height,
            size: Math.random() * 4 + 3,
            baseSpeed: Math.random() * 3 + 2,
            tailLength: Math.random() * 50 + 30,
            angle: Math.PI / 4,
            brightness: Math.random() * 0.5 + 0.5,
            fading: false,
            life: Math.random() * 150 + 100
          });
        }
      });

      requestAnimationFrame(draw);
    };

    const animationId = requestAnimationFrame(draw);
    window.addEventListener('resize', handleResize);

    return () => {
      cancelAnimationFrame(animationId);
      window.removeEventListener('resize', handleResize);
    };
  }, [starsCount]); // Re-run effect when starsCount changes

  return (
    <canvas
      className="fixed inset-0 w-full h-full -z-10 pointer-events-none opacity-80 dark:opacity-60 transition-opacity duration-300"
      ref={canvasRef}
    />
  );
};

export default GridBackground;