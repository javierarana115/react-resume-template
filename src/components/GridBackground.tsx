"use client";
import {useEffect, useRef, useState} from 'react';

const GridBackground = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [starsCount, setStarsCount] = useState(30); // Increased base count

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    const handleResize = () => {
      const newWidth = window.innerWidth;
      setStarsCount(Math.max(15, Math.floor(newWidth / 50))); // Denser star distribution
      canvas.width = canvas.offsetWidth;
      canvas.height = canvas.offsetHeight;
    };

    handleResize();

    // Grid parameters
    const gridSize = 40;
    const gridColor = 'rgba(255, 255, 255, 0.2)';

    type Star = {
      x: number;
      y: number;
      size: number;
      brightness: number;
      flickerSpeed: number;
      targetBrightness: number;
      baseBrightness: number;
      speed: number; // New: movement speed (0 for stationary)
      angle: number; // New: movement direction
      isMoving: boolean; // New: flag for moving stars
    };

    let stars: Star[] = [];

    const initStars = () => {
      stars = Array(starsCount).fill(null).map(() => {
        const isMoving = Math.random() > 0.7; // 30% chance to be moving
        return {
          x: Math.random() * canvas.width,
          y: Math.random() * canvas.height,
          size: Math.random() * 4 + 1, // 1-5px size range
          brightness: Math.random() * 0.7 + 0.3,
          flickerSpeed: Math.random() * 0.03 + 0.02,
          targetBrightness: Math.random() * 0.7 + 0.3,
          baseBrightness: Math.random() * 0.5 + 0.3,
          speed: isMoving ? Math.random() * 0.3 + 0.1 : 0, // Very slow movement
          angle: Math.random() * Math.PI * 2, // Random direction
          isMoving
        };
      });
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

    const updateStar = (star: Star) => {
      // Update brightness with flicker effect
      if (Math.abs(star.brightness - star.targetBrightness) < 0.01) {
        star.targetBrightness = star.baseBrightness + (Math.random() * 0.5 - 0.25);
        star.targetBrightness = Math.max(0.1, Math.min(0.9, star.targetBrightness));
      }
      star.brightness += (star.targetBrightness - star.brightness) * star.flickerSpeed;

      // Update position if moving
      if (star.isMoving) {
        star.x += Math.cos(star.angle) * star.speed;
        star.y += Math.sin(star.angle) * star.speed;
        
        // Wrap around screen edges
        if (star.x > canvas.width + 10) star.x = -10;
        if (star.x < -10) star.x = canvas.width + 10;
        if (star.y > canvas.height + 10) star.y = -10;
        if (star.y < -10) star.y = canvas.height + 10;
      }
    };

    const drawGrid = () => {
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
    };

    const draw = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      drawGrid();

      stars.forEach((star) => {
        updateStar(star);
        drawStar(star.x, star.y, star.size, star.brightness);
      });

      requestAnimationFrame(draw);
    };

    const animationId = requestAnimationFrame(draw);
    window.addEventListener('resize', handleResize);

    return () => {
      cancelAnimationFrame(animationId);
      window.removeEventListener('resize', handleResize);
    };
  }, [starsCount]);

  return (
    <canvas
      className="fixed inset-0 w-full h-full -z-10 pointer-events-none opacity-80 dark:opacity-60 transition-opacity duration-300"
      ref={canvasRef}
    />
  );
};

export default GridBackground;