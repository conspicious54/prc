import { useState, useEffect } from 'react';

export interface CallStatus {
  isLive: boolean;
  countdown: string;
}

export function useCallStatus() {
  const [callStatus, setCallStatus] = useState<CallStatus>({ isLive: false, countdown: '' });

  useEffect(() => {
    const updateCallStatus = () => {
      const now = new Date();
      const pacificNow = new Date(now.toLocaleString('en-US', { timeZone: 'America/Los_Angeles' }));
      const day = pacificNow.getDay();
      const pacificHour = pacificNow.getHours();
      const pacificMinute = pacificNow.getMinutes();

      const isWeekday = day >= 1 && day <= 4;
      const isPreCallTime = pacificHour === 8 && pacificMinute >= 0;
      const isCallTime = pacificHour === 9 && pacificMinute < 60;
      const isActiveTime = isPreCallTime || isCallTime;

      if (isWeekday && isActiveTime) {
        setCallStatus({ isLive: true, countdown: '' });
        return;
      }

      // Reset everything on Sunday at midnight Pacific time
      if (day === 0 && pacificHour === 0 && pacificMinute === 0) {
        setCallStatus({ isLive: false, countdown: '' });
        return;
      }

      let nextCall = new Date(now);
      nextCall.setHours(9, 0, 0, 0);

      if (pacificHour >= 9 || !isWeekday) {
        do {
          nextCall.setDate(nextCall.getDate() + 1);
        } while (nextCall.getDay() === 0 || nextCall.getDay() === 5 || nextCall.getDay() === 6);
      }

      const pacificNextCall = new Date(nextCall.toLocaleString('en-US', { timeZone: 'America/Los_Angeles' }));
      const diff = pacificNextCall.getTime() - pacificNow.getTime();
      
      const hours = Math.floor(diff / (1000 * 60 * 60));
      const minutes = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));

      setCallStatus({
        isLive: false,
        countdown: `${hours}h ${minutes}m`
      });
    };

    updateCallStatus();
    const interval = setInterval(updateCallStatus, 60000);
    return () => clearInterval(interval);
  }, []);

  return callStatus;
}