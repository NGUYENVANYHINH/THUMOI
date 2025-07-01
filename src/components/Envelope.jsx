import React, { useState } from 'react';
import './Envelope.css';

const Envelope = ({ onOpen, onPlayMusic }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [isFadingOut, setIsFadingOut] = useState(false);

  const handleOpen = () => {
    onPlayMusic(); // Play music immediately
    setIsOpen(true); // Start flap animation

    // Wait for the flap animation to finish before fading out
    setTimeout(() => {
      setIsFadingOut(true);
      // Wait for fade out animation to finish before calling onOpen
      setTimeout(() => {
        onOpen();
      }, 800);
    }, 1000);
  };

  return (
    <div className={`envelope-wrapper ${isFadingOut ? 'fade-out' : ''}`} onClick={handleOpen}>
      <div className={`envelope ${isOpen ? 'open' : ''}`}>
        <div className="flap front"></div>
        <div className="flap top"></div>
        <div className="letter">
          <p className="text-center text-lg font-semibold text-gray-600">
            Nhấn để mở
          </p>
        </div>
      </div>
    </div>
  );
};

export default Envelope; 