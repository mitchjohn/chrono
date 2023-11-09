import React, { useState, useEffect } from 'react';


export default function Chronometre() {
  const [secondes, setSecondes] = useState(0);
  const [minutes, setMinutes] = useState(0);
  const [isRunning, setIsRunning] = useState(false);
  const [countdownDuration, setCountdownDuration] = useState(0);

  useEffect(() => {
    let interval;

    if (isRunning) {
      interval = setInterval(() => {
        if (secondes === 0 && minutes === 0) {
          setIsRunning(false);
          clearInterval(interval);
        } else {
          if (secondes === 0) {
            setSecondes(59);
            setMinutes(minutes - 1);
          } else {
            setSecondes(secondes - 1);
          }
        }
      }, 1000);
    } else {
      clearInterval(interval);
    }

    return () => clearInterval(interval);
  }, [secondes, minutes, isRunning]);

  const handleStart = () => {
    if (countdownDuration > 0) {
      setIsRunning(true);
    }
  };

  const handlePause = () => {
    setIsRunning(false);
  };

  const handleStop = () => {
    setIsRunning(false);
    setCountdownDuration(0);
    setMinutes(0);
    setSecondes(0);
  };

  const handleAddTime = (minutesToAdd, secondsToAdd) => {
  const totalSecondsToAdd = minutesToAdd * 60 + secondsToAdd;
  const newTotalSeconds = countdownDuration + totalSecondsToAdd;
  const updatedMinutes = Math.floor(newTotalSeconds / 60);
  const updatedSeconds = newTotalSeconds % 60;

  setCountdownDuration(newTotalSeconds);
  setMinutes(updatedMinutes);
  setSecondes(updatedSeconds);
};


  return (
    <div>
      <p className="header">{minutes < 10 ? `0${minutes}` : minutes}:{secondes < 10 ? `0${secondes}` : secondes}</p>
      <button className="buttons"onClick={() => handleAddTime(1, 0)}>+1m</button>
      <button className="buttons"onClick={() => handleAddTime(0, 30)}>+30s</button>
      <button className="button"onClick={handleStart}>Play</button>
      <button className="button"onClick={handlePause}>Pause</button>
      <button className="button"onClick={handleStop}>Stop</button>
      <p>Durée du décompte : {countdownDuration} secondes</p>
    </div>
  );
}

