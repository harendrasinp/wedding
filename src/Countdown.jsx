// src/hooks/useCountdown.js
import { useEffect, useState } from 'react';

export const useCountdown = (targetDate) => {
  const [timeLeft, setTimeLeft] = useState({ days: 0, hr: 0, min: 0, sec: 0 });
  const [expired, setExpired] = useState(false);

  useEffect(() => {
    const target = new Date(targetDate);

    const interval = setInterval(() => {
      const now = new Date();
      const diff = target - now;

      if (diff <= 0) {
        setExpired(true);
        clearInterval(interval);
        setTimeLeft({ days: 0, hr: 0, min: 0, sec: 0 });
      } else {
        // Calendar-day based days left (changes at midnight)
        const todayMidnight = new Date(now.getFullYear(), now.getMonth(), now.getDate());
        const targetMidnight = new Date(target.getFullYear(), target.getMonth(), target.getDate());
        const days = Math.floor((targetMidnight - todayMidnight) / (1000 * 60 * 60 * 24));

        // Time left till target date
        const hr = Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const min = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
        const sec = Math.floor((diff % (1000 * 60)) / 1000);

        setTimeLeft({ days, hr, min, sec });
      }
    }, 1000);

    return () => clearInterval(interval);
  }, [targetDate]);

  return { timeLeft, expired };
};
