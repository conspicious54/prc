import React from 'react';
import { ExternalLink, Users, AlertCircle, CheckCircle } from 'lucide-react';

export function PreChallengeSteps() {
  return (
    <div className="bg-gradient-to-b from-white to-blue-50/50">
      <div className="container mx-auto px-4 py-12">
        <div className="max-w-4xl mx-auto">
          <div className="flex items-center justify-center gap-3 mb-8">
            <AlertCircle className="w-6 h-6 text-blue-600" />
            <h2 className="text-2xl font-bold text-gray-900 text-center">
              Complete These Steps First
            </h2>
          </div>
          
          <div className="space-y-6">
            <div className="group bg-white rounded-xl p-6 shadow-lg shadow-blue-100/50 hover:shadow-xl hover:shadow-blue-100/50 transition-all duration-300 transform hover:-translate-y-1">
              <div className="flex items-start">
                <div className="flex-shrink-0 bg-gradient-to-br from-blue-600 to-blue-700 rounded-full w-8 h-8 flex items-center justify-center text-white font-bold shadow-inner">
                  1
                </div>
                <div className="ml-4 flex-1">
                  <div className="flex items-start justify-between">
                    <div>
                      <h3 className="text-lg font-semibold text-gray-900 mb-2">Sign up for Helium 10</h3>
                      <p className="text-gray-600 mb-4 leading-relaxed">
                        Helium 10 is our recommended product research tool that will make your journey significantly easier. 
                        We've negotiated a special 50% discount for challenge participants.
                      </p>
                    </div>
                    <CheckCircle className="w-6 h-6 text-green-500 opacity-0 group-hover:opacity-100 transition-opacity" />
                  </div>
                  <a 
                    href="https://h10code.com" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="inline-flex items-center px-6 py-2.5 bg-gradient-to-r from-blue-600 to-blue-700 text-white rounded-full font-medium hover:from-blue-700 hover:to-blue-800 transition-all transform hover:scale-[1.02] shadow-md hover:shadow-lg group"
                  >
                    Get 50% Off Helium 10
                    <ExternalLink className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                  </a>
                </div>
              </div>
            </div>

            <div className="group bg-white rounded-xl p-6 shadow-lg shadow-blue-100/50 hover:shadow-xl hover:shadow-blue-100/50 transition-all duration-300 transform hover:-translate-y-1">
              <div className="flex items-start">
                <div className="flex-shrink-0 bg-gradient-to-br from-blue-600 to-blue-700 rounded-full w-8 h-8 flex items-center justify-center text-white font-bold shadow-inner">
                  2
                </div>
                <div className="ml-4 flex-1">
                  <div className="flex items-start justify-between">
                    <div>
                      <h3 className="text-lg font-semibold text-gray-900 mb-2">Join our Skool Community</h3>
                      <p className="text-gray-600 mb-4 leading-relaxed">
                        Connect with fellow entrepreneurs in our exclusive Skool group. Share your progress, 
                        get feedback, and collaborate with others on the same journey.
                      </p>
                    </div>
                    <CheckCircle className="w-6 h-6 text-green-500 opacity-0 group-hover:opacity-100 transition-opacity" />
                  </div>
                  <a 
                    href="https://www.skool.com/amazon-fba-entrepreneurs-group-9436" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="inline-flex items-center px-6 py-2.5 bg-gradient-to-r from-blue-600 to-blue-700 text-white rounded-full font-medium hover:from-blue-700 hover:to-blue-800 transition-all transform hover:scale-[1.02] shadow-md hover:shadow-lg group"
                  >
                    <Users className="w-4 h-4 mr-2" />
                    Join the Community
                    <ExternalLink className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}