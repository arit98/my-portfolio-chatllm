"use client";

import { useEffect, useState } from 'react';

export const SpaceBackground = () => {
  const [stars, setStars] = useState<Array<{ id: number; size: number; left: number; top: number; delay: number }>>([]);
  
  useEffect(() => {
    // Generate random stars
    const generateStars = () => {
      const newStars = [];
      for (let i = 0; i < 200; i++) {
        newStars.push({
          id: i,
          size: Math.random() * 2,
          left: Math.random() * 100,
          top: Math.random() * 100,
          delay: Math.random() * 3
        });
      }
      setStars(newStars);
    };

    generateStars();
  }, []);

  return (
    <div className="space-background">
      <div className="stars">
        {stars.map((star) => (
          <div
            key={star.id}
            className="star"
            style={{
              width: `${star.size}px`,
              height: `${star.size}px`,
              left: `${star.left}%`,
              top: `${star.top}%`,
              animation: `twinkle 3s infinite ${star.delay}s`
            }}
          />
        ))}
      </div>
      
      {/* Planets */}
      {/* <div 
        className="planet"
        style={{
          width: '100px',
          height: '100px',
          right: '15%',
          top: '20%',
        }}
      /> */}
      {/* <div 
        className="planet"
        style={{
          width: '150px',
          height: '150px',
          left: '10%',
          bottom: '15%',
          backgroundImage: 'linear-gradient(to bottom right, #ff4e50, #f9d423)',
        }}
      /> */}

      {/* Asteroids */}
      <div 
        className="asteroid"
        style={{
          width: '30px',
          height: '30px',
          right: '30%',
          top: '40%',
          animationDelay: '0s',
        }}
      />
      <div 
        className="asteroid"
        style={{
          width: '20px',
          height: '20px',
          left: '25%',
          top: '30%',
          animationDelay: '2s',
        }}
      />
    </div>
  );
}