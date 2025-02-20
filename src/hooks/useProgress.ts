import { useState, useEffect } from 'react';

export interface Progress {
  percent: number;
  currentDay: number;
}

export function useProgress() {
  const [progress, setProgress] = useState<Progress>({ percent: 0, currentDay: 0 });

  useEffect(() => {
    const updateProgress = () => {
      const now = new Date();
      const pacificNow = new Date(now.toLocaleString('en-US', { timeZone: 'America/Los_Angeles' }));
      const day = pacificNow.getDay();
      const hour = pacificNow.getHours();
      const minute = pacificNow.getMinutes();
      
      // Reset progress on Sunday at midnight Pacific time
      if (day === 0 && hour === 0 && minute === 0) {
        setProgress({ percent: 0, currentDay: 0 });
        return;
      }
      
      // Reset progress before Monday 9 AM
      if (day === 1 && hour < 9) {
        setProgress({ percent: 0, currentDay: 0 });
        return;
      }

      // Calculate current day (1-4)
      let currentDay = day;
      if (currentDay > 4) currentDay = 4;
      
      // Calculate progress percentage
      let progressPercent = 0;
      
      if (hour >= 9) {
        // Base progress for completed days
        const completedDays = currentDay - 1;
        const baseProgress = (completedDays / 3) * 100;
        
        // Progress within current day
        const dayProgress = ((hour - 9) + (minute / 60)) / 24;
        const currentDayContribution = (dayProgress / 3) * 100;
        
        progressPercent = Math.min(100, baseProgress + currentDayContribution);
      }

      setProgress({
        percent: Math.max(0, Math.min(100, progressPercent)),
        currentDay: currentDay > 4 ? 4 : currentDay
      });
    };

    updateProgress();
    const interval = setInterval(updateProgress, 60000);
    return () => clearInterval(interval);
  }, []);

  return progress;
}