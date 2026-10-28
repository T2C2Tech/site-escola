import React, { useEffect, useState } from 'react';

export default function FloatingBubbles() {
  const [bubbles, setBubbles] = useState([]);

  useEffect(() => {
    // Gerar bolhas aleatórias
    const list = Array.from({ length: 14 }).map((_, i) => ({
      id: i,
      size: Math.floor(Math.random() * 45) + 25,
      left: Math.floor(Math.random() * 95),
      delay: (Math.random() * 8).toFixed(1),
      duration: (Math.random() * 6 + 10).toFixed(1),
    }));
    setBubbles(list);
  }, []);

  return (
    <div className="fixed inset-0 pointer-events-none overflow-hidden z-0">
      {bubbles.map(b => (
        <div
          key={b.id}
          className="magic-bubble"
          style={{
            width: `${b.size}px`,
            height: `${b.size}px`,
            left: `${b.left}%`,
            animationDelay: `${b.delay}s`,
            animationDuration: `${b.duration}s`,
          }}
        />
      ))}
    </div>
  );
}
