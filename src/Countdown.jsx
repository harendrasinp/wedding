// src/hooks/useCountdown.js
import { useEffect, useState } from 'react';

export const useCountdown = (targetDate) => {
  const [timeLeft, setTimeLeft] = useState({ hr: 0, min: 0, sec: 0 });
  const [expired, setExpired] = useState(false);

  useEffect(() => {
    const target = new Date(targetDate).getTime();

    const interval = setInterval(() => {
      const now = Date.now();
      const diff = target - now;

      if (diff <= 0) {
        setExpired(true);
        clearInterval(interval);
      } else {
        const hours = Math.floor(diff / (1000 * 60 * 60));
        const minutes = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((diff % (1000 * 60)) / 1000);
        setTimeLeft({ hr: hours, min: minutes, sec: seconds });
      }
    }, 1000);

    return () => clearInterval(interval);
  }, [targetDate]);

  return { timeLeft, expired };
};

