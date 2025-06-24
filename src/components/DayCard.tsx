import React, { useState } from 'react';
import { Clock, PlayCircle, Video, FileText, Calendar, CheckCircle } from 'lucide-react';
import { ChallengeDay, CallToActionProps } from '../types';
import { WorksheetsModal } from './WorksheetsModal';

interface DayCardProps {
  day: ChallengeDay;
  timeInfo: {
    time: string;
    day: string;
  };
  callToAction: CallToActionProps;
  isVIP: boolean;
}

export function DayCard({ day, timeInfo, callToAction, isVIP }: DayCardProps) {
  const { isLive, countdown, onClick } = callToAction;
  const [isWorksheetModalOpen, setIsWorksheetModalOpen] = useState(false);

  const getCallStatus = () => {
    const now = new Date();
    const pacificNow = new Date(now.toLocaleString('en-US', { timeZone: 'America/Los_Angeles' }));
    const currentDay = pacificNow.getDay(); // 0 = Sunday, 1 = Monday, etc.
    const pacificHour = pacificNow.getHours();
    
    // If it's Sunday, no calls have occurred yet
    if (currentDay === 0) {
      return { hasOccurred: false, isJoinable: false };
    }

    // Check if this day's call has already occurred (past 9 AM Pacific on that day)
    if (currentDay > day.number || (currentDay === day.number && pacificHour >= 10)) {
      return { hasOccurred: true, isJoinable: false };
    }

    // Check if this call is currently joinable (8-9 AM Pacific on the call day)
    const isJoinable = currentDay === day.number && 
      ((pacificHour === 8 && pacificHour < 9) || (pacificHour === 9 && pacificHour < 10));

    return { hasOccurred: false, isJoinable };
  };

  const callStatus = getCallStatus();

  const getRecordingLink = () => {
    const recordingLinks = {
      1: 'https://fast.wistia.com/embed/medias/h8nvqi77vw',
      2: 'https://fast.wistia.com/embed/medias/8t0s2885x7',
      3: 'https://fast.wistia.com/embed/medias/o63wwt698d',
      4: 'https://fast.wistia.com/embed/medias/o63wwt698d'
    };
    return recordingLinks[day.number as keyof typeof recordingLinks] || recordingLinks[2];
  };

  const handleWatchRecording = () => {
    if (callStatus.hasOccurred) {
      // Open the specific recording link for this day
      window.open(getRecordingLink(), '_blank');
    }
  };

  return (
    <>
      <div className="group bg-white rounded-2xl shadow-lg overflow-hidden transform transition-all duration-300 hover:-translate-y-1 hover:shadow-xl">
        <div className="bg-gradient-to-r from-blue-600 to-blue-700 p-6">
          <div className="flex items-center justify-between mb-4">
            <h2 className="text-3xl font-bold text-white">Day {day.number}</h2>
            <div className="flex items-center gap-2">
              <div className="flex items-center bg-white/20 px-3 py-1.5 rounded-full backdrop-blur-sm">
                <Calendar className="w-4 h-4 text-blue-100 mr-2" />
                <span className="text-sm text-blue-100">{timeInfo.day}</span>
              </div>
              <div className="flex items-center bg-white/20 px-3 py-1.5 rounded-full backdrop-blur-sm">
                <Clock className="w-4 h-4 text-blue-100 mr-2" />
                <span className="text-sm text-blue-100">{timeInfo.time}</span>
              </div>
            </div>
          </div>
          <h3 className="text-2xl font-semibold text-white mb-2">{day.title}</h3>
          <p className="text-blue-100">{day.description}</p>
        </div>
        
        <div className="p-6">
          <div className="space-y-4 mb-8">
            {day.points.map((point, i) => (
              <div key={i} className="flex items-start bg-blue-50 p-4 rounded-lg group-hover:bg-blue-100 transition-colors duration-300">
                <CheckCircle className="flex-shrink-0 w-6 h-6 text-blue-600 group-hover:scale-110 transition-transform" />
                <span className="ml-3 text-gray-700">{point}</span>
              </div>
            ))}
          </div>

          <div className="space-y-4">
            <button 
              onClick={callStatus.isJoinable ? onClick : undefined}
              className={`flex items-center justify-center w-full py-4 px-6 rounded-xl transition-all transform duration-300 shadow-md
                ${callStatus.isJoinable 
                  ? 'bg-gradient-to-r from-blue-600 to-blue-700 text-white hover:from-blue-700 hover:to-blue-800 hover:scale-[1.02] hover:shadow-lg cursor-pointer' 
                  : callStatus.hasOccurred
                    ? 'bg-gray-100 text-gray-500 cursor-not-allowed'
                    : 'bg-gray-100 text-gray-500 cursor-not-allowed'}`}
            >
              <PlayCircle className="w-6 h-6 mr-2" />
              {callStatus.hasOccurred 
                ? 'This Call Has Already Occurred'
                : callStatus.isJoinable 
                  ? 'Join Live Session'
                  : `Next Call in ${countdown}`}
            </button>
            
            <div className="grid grid-cols-2 gap-4">
              <button 
                onClick={handleWatchRecording}
                className={`flex items-center justify-center py-3 px-4 rounded-xl transition-all duration-300 group
                  ${(callStatus.hasOccurred && (isVIP || new Date().getTime() - new Date(callStatus.hasOccurred).getTime() < 48 * 60 * 60 * 1000))
                    ? 'bg-blue-50 text-blue-700 hover:bg-blue-100 cursor-pointer'
                    : 'bg-gray-100 text-gray-400 cursor-not-allowed'}`}
              >
                <Video className={`w-5 h-5 mr-2 ${callStatus.hasOccurred ? 'text-blue-600 group-hover:scale-110 transition-transform' : 'text-gray-400'}`} />
                <span className="font-medium">Watch Recording</span>
              </button>
              <button 
                onClick={() => callStatus.hasOccurred && setIsWorksheetModalOpen(true)}
                className={`flex items-center justify-center py-3 px-4 rounded-xl transition-all duration-300 group
                  ${callStatus.hasOccurred 
                    ? 'bg-blue-50 text-blue-700 hover:bg-blue-100'
                    : 'bg-gray-100 text-gray-400 cursor-not-allowed'}`}
              >
                <FileText className={`w-5 h-5 mr-2 ${callStatus.hasOccurred ? 'text-blue-600 group-hover:scale-110 transition-transform' : 'text-gray-400'}`} />
                <span className="font-medium">Get Worksheets</span>
              </button>
            </div>
          </div>
        </div>
      </div>

      <WorksheetsModal
        isOpen={isWorksheetModalOpen}
        onClose={() => setIsWorksheetModalOpen(false)}
        dayNumber={day.number}
      />
    </>
  );
}