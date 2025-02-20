import React from 'react';
import { Clock, PlayCircle, Calendar } from 'lucide-react';
import { CallToActionProps } from '../types';

interface HeroProps {
  currentMonth: string;
  callToAction: CallToActionProps;
}

export function Hero({ currentMonth, callToAction }: HeroProps) {
  const { isLive, countdown, onClick } = callToAction;

  return (
    <div 
      className="relative bg-cover bg-center py-12 md:py-16"
      style={{
        backgroundImage: 'linear-gradient(rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.8)), url("https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-1.2.1&auto=format&fit=crop&w=2000&q=80")',
        backgroundAttachment: 'fixed'
      }}
    >
      <div 
        className="absolute inset-0 bg-gradient-to-b from-blue-900/20 to-blue-900/40 mix-blend-multiply"
        aria-hidden="true"
      />
      
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <div className="flex flex-col items-center text-center">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 backdrop-blur-sm mb-6" role="status">
              {isLive ? (
                <>
                  <span className="relative flex h-3 w-3">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-red-400 opacity-75"></span>
                    <span className="relative inline-flex rounded-full h-3 w-3 bg-red-500"></span>
                  </span>
                  <span className="text-white font-medium">Live Now</span>
                </>
              ) : (
                <>
                  <Clock className="w-4 h-4 text-blue-200" aria-hidden="true" />
                  <span className="text-blue-200 font-medium">Next Session in {countdown}</span>
                </>
              )}
            </div>

            <h1 className="text-3xl md:text-5xl font-bold text-white mb-4 leading-tight">
              Welcome To {currentMonth}'s
              <span className="block mt-2 bg-gradient-to-r from-blue-400 to-blue-600 text-transparent bg-clip-text">
                Product Research Challenge
              </span>
            </h1>

            <p className="text-lg md:text-xl text-blue-100 mb-8 leading-relaxed max-w-3xl">
              Join us on this transformative journey where you'll discover how to find, validate, 
              and launch products that can generate over $100,000 in annual revenue.
            </p>

            <button 
              onClick={onClick}
              className={`group inline-flex items-center px-8 py-4 text-lg font-semibold rounded-full transition-all transform shadow-lg
                ${isLive 
                  ? 'text-white bg-blue-600 hover:bg-blue-700 hover:scale-105 hover:shadow-xl cursor-pointer' 
                  : 'text-blue-100 bg-white/10 backdrop-blur-sm cursor-not-allowed'}`}
              disabled={!isLive}
              aria-label={isLive ? "Join live session" : "Next session countdown"}
            >
              {isLive ? (
                <>
                  Watch Live
                  <PlayCircle className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" aria-hidden="true" />
                </>
              ) : (
                <>
                  Next Call in {countdown}
                  <Clock className="ml-2 w-5 h-5" aria-hidden="true" />
                </>
              )}
            </button>

            <div className="mt-8 flex items-center gap-6 text-blue-200">
              <div className="flex items-center gap-2">
                <Calendar className="w-5 h-5" aria-hidden="true" />
                <span>4 Live Sessions</span>
              </div>
              <div className="w-1 h-1 bg-blue-200 rounded-full" aria-hidden="true" />
              <div className="flex items-center gap-2">
                <Clock className="w-5 h-5" aria-hidden="true" />
                <span>1 Hour Each</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}