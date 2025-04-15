import { useEffect, useState } from 'react';

export const daysCountdown = (targetDate) => {
  const [daysLeft, setDaysLeft] = useState({ days: 0 });
  const [expired, setExpired] = useState(false);

  useEffect(() => {
    const target = new Date(targetDate);

    const calculateDaysLeft = () => {
      const now = new Date();
      const diff = target - now;

      if (diff <= 0) {
        setExpired(true);
        setDaysLeft({ days: 0 });
      } else {
        const days = Math.ceil(diff / (1000 * 60 * 60 * 24)); // ceil to reduce only once per day
        setDaysLeft({ days });
      }
    };

    // Call immediately once
    calculateDaysLeft();

    // Calculate milliseconds till next midnight
    const now = new Date();
    const nextMidnight = new Date();
    nextMidnight.setHours(24, 0, 0, 0); // midnight of next day
    const timeUntilMidnight = nextMidnight - now;

    const timeout = setTimeout(() => {
      calculateDaysLeft();

      const interval = setInterval(() => {
        calculateDaysLeft();
      }, 24 * 60 * 60 * 1000); // Every 24 hours

      // Clear interval on unmount
      return () => clearInterval(interval);
    }, timeUntilMidnight);

    return () => clearTimeout(timeout);
  }, [targetDate]);

  return { daysLeft, expired };
};
