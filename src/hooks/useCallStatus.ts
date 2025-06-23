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

      // Check if it's a weekday (Monday-Thursday) and during call time
      const isWeekday = day >= 1 && day <= 4;
      const isPreCallTime = pacificHour === 8 && pacificMinute >= 0; // 8 AM Pacific for pre-call
      const isCallTime = pacificHour === 9 && pacificMinute < 60; // 9 AM Pacific for call
      const isActiveTime = isPreCallTime || isCallTime;

      if (isWeekday && isActiveTime) {
        setCallStatus({ isLive: true, countdown: '' });
        return;
      }

      // Calculate next call time - find next weekday at 9 AM Pacific
      let nextCallPacific = new Date(pacificNow);
      nextCallPacific.setHours(9, 0, 0, 0);

      // If we're past 9 AM Pacific today or it's not a weekday, move to next weekday
      if (pacificHour >= 9 || !isWeekday) {
        do {
          nextCallPacific.setDate(nextCallPacific.getDate() + 1);
        } while (nextCallPacific.getDay() === 0 || nextCallPacific.getDay() === 5 || nextCallPacific.getDay() === 6);
      }

      // Calculate the time difference
      const diff = nextCallPacific.getTime() - pacificNow.getTime();
      
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