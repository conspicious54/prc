import { useState, useEffect } from 'react';

interface TimeInfo {
  time: string;
  day: string;
}

export function useTimeConversion() {
  const [userTime, setUserTime] = useState<TimeInfo[]>([]);

  useEffect(() => {
    const days = ['Monday', 'Tuesday', 'Wednesday', 'Thursday'];
    const convertedTimes = days.map(day => {
      const date = new Date();
      while (date.getDay() !== days.indexOf(day) + 1) {
        date.setDate(date.getDate() + 1);
      }
      date.setHours(9, 0, 0);
      const options: Intl.DateTimeFormatOptions = {
        hour: 'numeric',
        minute: 'numeric',
        hour12: true,
        timeZoneName: 'short'
      };
      return {
        time: new Intl.DateTimeFormat('en-US', options).format(date),
        day
      };
    });
    setUserTime(convertedTimes);
  }, []);

  return userTime;
}