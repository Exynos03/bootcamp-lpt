import React, { useState, useEffect } from 'react';

export default function CountdownTimer({ targetDate }) {
  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());

  useEffect(() => {
    const timer = setTimeout(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);
    return () => clearTimeout(timer);
  });

  function calculateTimeLeft() {
    const difference = +new Date(targetDate) - +new Date();
    let timeLeft = {};

    if (difference > 0) {
      timeLeft = {
        days: Math.floor(difference / (1000 * 60 * 60 * 24)),
        hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
        minutes: Math.floor((difference / 1000 / 60) % 60),
        seconds: Math.floor((difference / 1000) % 60),
      };
    }

    return timeLeft;
  }

  return (
    <div className='timer timer-v2'>
        <div  className='time-display time-display-v2'>
            <p className='time time-v2'>Days</p>
            <p className='time time-v2'>Hours</p>
            <p className='time time-v2'>Minutes</p>
            <p className='time time-v2'>Seconds</p>
        </div>

        <div className='time-count time-count-v2'>
            <div>{timeLeft.days < 10 ? '0' + timeLeft.days : timeLeft.days}&nbsp;:</div>
            <div>&nbsp;{timeLeft.hours < 10 ? '0' + timeLeft.hours : timeLeft.hours}&nbsp;:</div>
            <div>&nbsp;{timeLeft.minutes < 10 ? '0' + timeLeft.minutes : timeLeft.minutes}&nbsp;:</div>
            <div>&nbsp;{timeLeft.seconds < 10 ? '0' + timeLeft.seconds : timeLeft.seconds}</div>
        </div>
    </div>
  );
}