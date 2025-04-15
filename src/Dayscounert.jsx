import { useEffect, useState } from 'react';

export const daysCountdown = (targetDate) => {
  const [daysLeft, setDaysLeft] = useState({days:0});
  const [expired, setExpired] = useState(false);

  useEffect(() => {
    const target = new Date(targetDate); // Ensure this is a valid date

    // Debug: Check if the date is parsed correctly
    console.log('Target Date:', target);
    console.log('Current Date:', new Date());

    const interval = setInterval(() => {
      const now = new Date();
      const diff = target - now;

      if (diff <= 0) {
        setExpired(true);
        setDaysLeft(0);
        clearInterval(interval);
      } else {
        const days = Math.floor(diff / (1000 * 60 * 60 * 24)); // Use Math.floor to calculate the exact number of days
        setDaysLeft({days});
      }
    }, 1000); // Update every second

    return () => clearInterval(interval);
  }, [targetDate]);

  return { daysLeft, expired };
};
