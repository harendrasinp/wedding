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
      } else {
        // Calendar-based day difference
        const startOfToday = new Date(now.getFullYear(), now.getMonth(), now.getDate());
        const startOfTarget = new Date(target.getFullYear(), target.getMonth(), target.getDate());

        const days = Math.ceil((startOfTarget - startOfToday) / (1000 * 3600 * 24));

        const hours = target.getHours() - now.getHours();
        const minutes = target.getMinutes() - now.getMinutes();
        const seconds = target.getSeconds() - now.getSeconds();

        // Adjust remaining time accurately
        const totalDiff = diff;
        const hr = Math.floor((totalDiff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const min = Math.floor((totalDiff % (1000 * 60 * 60)) / (1000 * 60));
        const sec = Math.floor((totalDiff % (1000 * 60)) / 1000);

        setTimeLeft({ days, hr, min, sec });
      }
    }, 1000);

    return () => clearInterval(interval);
  }, [targetDate]);

  return { timeLeft, expired };
};
