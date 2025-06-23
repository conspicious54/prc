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
      // Create a date for 9 AM Pacific Time on the specified day
      const date = new Date();
      
      // Find the next occurrence of this day
      const targetDay = days.indexOf(day) + 1; // Monday = 1, Tuesday = 2, etc.
      const currentDay = date.getDay();
      
      // Calculate days to add to get to the target day
      let daysToAdd = targetDay - currentDay;
      if (daysToAdd <= 0) {
        daysToAdd += 7; // Move to next week if the day has passed
      }
      
      date.setDate(date.getDate() + daysToAdd);
      
      // Set to 9 AM Pacific Time
      // First, create the date in Pacific timezone
      const pacificDate = new Date(date.toLocaleString('en-US', { timeZone: 'America/Los_Angeles' }));
      pacificDate.setHours(9, 0, 0, 0);
      
      // Convert back to user's local timezone for display
      const options: Intl.DateTimeFormatOptions = {
        hour: 'numeric',
        minute: 'numeric',
        hour12: true,
        timeZoneName: 'short'
      };
      
      // Create a date that represents 9 AM Pacific in the user's timezone
      const pacificTime = new Date();
      pacificTime.setTime(pacificDate.getTime());
      
      return {
        time: new Intl.DateTimeFormat('en-US', options).format(pacificTime),
        day
      };
    });
    setUserTime(convertedTimes);
  }, []);

  return userTime;
}