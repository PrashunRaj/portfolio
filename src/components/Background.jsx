import React, { useEffect, useState, useRef } from 'react';

const SVGNetworkBackground = () => {
  const [points, setPoints] = useState([]);
  const containerRef = useRef(null);
  
  useEffect(() => {
    const createPoints = () => {
      const numPoints = window.innerWidth > 768 ? 80 : 40;
      const newPoints = [];
      const width = window.innerWidth;
      const height = window.innerHeight;
      
      for (let i = 0; i < numPoints; i++) {
        newPoints.push({
          id: i,
          x: Math.random() * width,
          y: Math.random() * height,
          dx: (Math.random() - 0.5) * 1.2,
          dy: (Math.random() - 0.5) * 1.2
        });
      }
      
      setPoints(newPoints);
    };

    createPoints();

    const handleResize = () => {
      createPoints();
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  useEffect(() => {
    let animationId;
    
    const animate = () => {
      setPoints(currentPoints => {
        return currentPoints.map(point => {
          let { x, y, dx, dy } = point;
          
          x += dx;
          y += dy;
          
          if (x < 0 || x > window.innerWidth) dx = -dx;
          if (y < 0 || y > window.innerHeight) dy = -dy;
          
          x = Math.max(0, Math.min(window.innerWidth, x));
          y = Math.max(0, Math.min(window.innerHeight, y));
          
          return { ...point, x, y, dx, dy };
        });
      });
      
      animationId = requestAnimationFrame(animate);
    };
    
    animate();
    return () => cancelAnimationFrame(animationId);
  }, []);

  const getConnections = () => {
    const connections = [];
    const connectionDistance = window.innerWidth > 768 ? 200 : 150;
    
    points.forEach((point1, i) => {
      points.slice(i + 1).forEach(point2 => {
        const dx = point2.x - point1.x;
        const dy = point2.y - point1.y;
        const distance = Math.sqrt(dx * dx + dy * dy);
        
        if (distance < connectionDistance) {
          const opacity = (1 - distance / connectionDistance) * 0.4;
          connections.push({
            id: `${point1.id}-${point2.id}`,
            x1: point1.x,
            y1: point1.y,
            x2: point2.x,
            y2: point2.y,
            opacity
          });
        }
      });
    });
    
    return connections;
  };

  return (
    <div ref={containerRef} className="fixed inset-0 -z-10 bg-[#0a192f]">
      <svg width="100%" height="100%" className="absolute inset-0">
        {/* Connections */}
        {getConnections().map(connection => (
          <line
            key={connection.id}
            x1={connection.x1}
            y1={connection.y1}
            x2={connection.x2}
            y2={connection.y2}
            stroke="#64ffda" // Darker green color for lines
            strokeWidth="1.2" // Thicker lines for better visibility
            strokeOpacity={connection.opacity}
          />
        ))}
        
        {/* Points */}
        {points.map(point => (
          <circle
            key={point.id}
            cx={point.x}
            cy={point.y}
            r="1.5"
            fill="#2dffc0"
            fillOpacity="0.7"
          />
        ))}
      </svg>
    </div>
  );
};

export default SVGNetworkBackground;


