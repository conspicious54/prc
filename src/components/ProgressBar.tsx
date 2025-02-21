import React from 'react';
import { ProgressBarProps } from '../types';
import { Clock, Calendar, Trophy } from 'lucide-react';
import { useAuth } from '../hooks/useAuth';

export function ProgressBar({ percent, currentDay }: ProgressBarProps) {
  const { isVIP } = useAuth();

  return (
    <div className="container mx-auto px-4 -mt-8">
      <div className="bg-white rounded-xl shadow-lg p-8 max-w-4xl mx-auto backdrop-blur-lg bg-white/90">
        <div className="flex items-center justify-between mb-6">
          <div className="flex items-center gap-3">
            <Trophy className="w-6 h-6 text-blue-600" />
            <h3 className="text-xl font-bold text-gray-900">Challenge Progress</h3>
          </div>
          <div className="flex items-center gap-2 text-sm font-medium">
            <Calendar className="w-4 h-4 text-blue-600" />
            <span className="text-gray-600">
              {currentDay > 0 ? `Day ${currentDay} of 4` : 'Starting Soon'}
            </span>
          </div>
        </div>

        <div className="relative mb-8">
          <div className="h-2 bg-gray-200 rounded-full overflow-hidden">
            <div 
              className="h-full bg-gradient-to-r from-blue-500 to-blue-600 transition-all duration-1000 ease-out rounded-full"
              style={{ width: `${percent}%` }}
            />
          </div>
          
          <div className="absolute -top-1 left-0 right-0">
            {[1, 2, 3, 4].map((day) => {
              const markerPosition = ((day - 1) / 3) * 100;
              const isCompleted = currentDay >= day;
              const isCurrent = currentDay === day;
              
              return (
                <div
                  key={day}
                  className="absolute flex flex-col items-center"
                  style={{ 
                    left: `${markerPosition}%`,
                    transform: 'translateX(-50%)'
                  }}
                >
                  <div 
                    className={`w-4 h-4 rounded-full border-2 transition-all duration-300 ${
                      isCurrent 
                        ? 'bg-blue-600 border-blue-600 ring-4 ring-blue-100' 
                        : isCompleted
                          ? 'bg-blue-600 border-blue-600'
                          : 'bg-white border-gray-300'
                    }`}
                  />
                  <span className={`text-xs font-medium mt-2 transition-colors duration-300 ${
                    isCurrent 
                      ? 'text-blue-600 font-bold'
                      : isCompleted
                        ? 'text-blue-600'
                        : 'text-gray-500'
                  }`}>
                    Day {day}
                  </span>
                </div>
              );
            })}
          </div>
        </div>

        {!isVIP && (
          <div className="flex items-start gap-6 p-4 bg-amber-50 rounded-lg border border-amber-100">
            <div className="flex-shrink-0 p-2 bg-amber-100 rounded-full">
              <Clock className="w-5 h-5 text-amber-600" />
            </div>
            <div>
              <p className="text-amber-800 text-sm font-medium">
                ⚠️ Important: Recordings available for 48 hours
              </p>
              <p className="text-amber-600 text-sm mt-1">
                Non-VIP members can access recordings for 48 hours after each lesson.{' '}
                <a 
                  href="https://www.productresearchchallenge.com/upgrade-offer" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="font-semibold text-blue-600 hover:text-blue-800 underline"
                >
                  Upgrade to VIP
                </a>
                {' '}for lifetime access.
              </p>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}