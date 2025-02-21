import React from 'react';
import { Hero } from './components/Hero';
import { PreChallengeSteps } from './components/PreChallengeSteps';
import { ProgressBar } from './components/ProgressBar';
import { ZoomLink } from './components/ZoomLink';
import { DayCard } from './components/DayCard';
import { PassionProductFormula } from './components/PassionProductFormula';
import { LoginScreen } from './components/LoginScreen';
import { VIPBenefits } from './components/VIPBenefits';
import { useTimeConversion } from './hooks/useTimeConversion';
import { useProgress } from './hooks/useProgress';
import { useCallStatus } from './hooks/useCallStatus';
import { useAuth } from './hooks/useAuth';
import { challengeDays } from './data/challengeDays';

function App() {
  const { isAuthenticated, isVIP } = useAuth();
  const userTime = useTimeConversion();
  const progress = useProgress();
  const callStatus = useCallStatus();
  
  const currentMonth = new Date().toLocaleString('en-US', { month: 'long' });

  const handleJoinClick = () => {
    if (callStatus.isLive) {
      window.location.href = '#join-call';
    }
  };

  const callToAction = {
    ...callStatus,
    onClick: handleJoinClick
  };

  if (!isAuthenticated) {
    return <LoginScreen />;
  }

  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 to-white">
      <Hero currentMonth={currentMonth} callToAction={callToAction} />
      
      <div className="relative">
        <div className="absolute inset-x-0 top-0 h-32 bg-gradient-to-b from-black/50 to-transparent pointer-events-none" aria-hidden="true" />
        <ProgressBar {...progress} />
        <ZoomLink />
        {isVIP && <VIPBenefits />}
        <PreChallengeSteps />
      </div>
      
      <div className="relative py-16 overflow-hidden">
        <div className="absolute inset-0 bg-blue-50/30" aria-hidden="true" />
        <div className="absolute inset-y-0 left-0 w-1/2 bg-gradient-to-r from-blue-50 to-transparent" aria-hidden="true" />
        <div className="absolute inset-y-0 right-0 w-1/2 bg-gradient-to-l from-blue-50 to-transparent" aria-hidden="true" />
        
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Your Challenge Journey</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Follow along with our structured program designed to help you discover and validate your winning product idea.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
            {challengeDays.map((day, index) => (
              <DayCard
                key={day.number}
                day={day}
                timeInfo={userTime[index] || { time: '', day: '' }}
                callToAction={callToAction}
                isVIP={isVIP}
              />
            ))}
          </div>
        </div>
      </div>

      <PassionProductFormula />
    </div>
  );
}

export default App;