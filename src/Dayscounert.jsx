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
        const days = Math.ceil(diff / (1000 * 60 * 60 * 24));
        setDaysLeft({ days });
      }
    };

    // Call initially
    calculateDaysLeft();

    // Calculate time until next midnight
    const now = new Date();
    const nextMidnight = new Date();
    nextMidnight.setHours(24, 0, 0, 0); // Set to midnight
    const timeUntilMidnight = nextMidnight - now;

    let interval;

    const timeout = setTimeout(() => {
      calculateDaysLeft();

      // Start interval every 24 hours after first midnight
      interval = setInterval(() => {
        calculateDaysLeft();
      }, 24 * 60 * 60 * 1000); // 24 hours
    }, timeUntilMidnight);

    // Cleanup function
    return () => {
      clearTimeout(timeout);
      if (interval) clearInterval(interval);
    };
  }, [targetDate]);

  return { daysLeft, expired };
};
