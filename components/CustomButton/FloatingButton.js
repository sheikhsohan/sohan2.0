"use client"
import React, { useState, useEffect } from 'react';
import './FloatingButton.css'; // Import CSS for styling

const FloatingButton = () => {
    const [isUpdating, setIsUpdating] = useState(false);
  
    useEffect(() => {
      const interval = setInterval(() => {
        setIsUpdating(true);
  
        // Simulate update process completion
        setTimeout(() => {
          setIsUpdating(false);
        }, 3000); // Change this to match your actual update process time
      }, 4000); // Show loader every 4 seconds, updating every 2 seconds
  
      return () => clearInterval(interval);
    }, []);
  
    return (
        <div className="floating-button-container">
        <div className="floating-button">
          {isUpdating ? (
            <div className="loader"></div>
          ) : (
            'Updating . . .'
          )}
        </div>
      </div>
    );
  };

export default FloatingButton;
