import React from 'react';
import { FileText, Mail, Crown, Download, Star, Clock, Gift, ExternalLink } from 'lucide-react';

export function VIPBenefits() {
  return (
    <div className="container mx-auto px-4 mt-8 mb-12">
      <div className="relative overflow-hidden bg-gradient-to-br from-amber-50 via-white to-amber-50 rounded-2xl shadow-xl border border-amber-100">
        {/* Premium Background Pattern */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-amber-200/20 via-transparent to-transparent opacity-50"></div>
        
        {/* VIP Badge */}
        <div className="absolute -right-16 top-0 w-48 h-12 bg-gradient-to-r from-amber-500 to-amber-600 transform rotate-45 shadow-lg"></div>
        
        <div className="relative p-8">
          <div className="flex items-center gap-4 mb-8">
            <div className="p-3 bg-gradient-to-br from-amber-500 to-amber-600 rounded-xl shadow-lg">
              <Crown className="w-8 h-8 text-white" />
            </div>
            <div>
              <h2 className="text-2xl font-bold text-gray-900">VIP Member Benefits</h2>
              <p className="text-amber-700 mt-1">Exclusive access to premium features and resources</p>
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {/* Challenge Workbook */}
            <div className="group bg-white rounded-xl p-6 shadow-md hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0 p-3 bg-gradient-to-br from-amber-500 to-amber-600 rounded-lg shadow-md group-hover:scale-110 transition-transform">
                  <Download className="w-6 h-6 text-white" />
                </div>
                <div className="flex-1">
                  <h3 className="text-lg font-semibold text-gray-900 mb-2 flex items-center gap-2">
                    Challenge Workbook
                    <Star className="w-4 h-4 text-amber-500" />
                  </h3>
                  <p className="text-gray-600 mb-4">
                    Access our comprehensive workbook filled with strategies, templates, and exercises to guide your product research journey.
                  </p>
                  <a 
                    href="https://drive.google.com/file/d/1HTmFAYaBJTArl3OFff2jFD9uLicohYwA/view?usp=sharing"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center px-4 py-2 bg-gradient-to-r from-amber-500 to-amber-600 text-white rounded-lg hover:from-amber-600 hover:to-amber-700 transition-colors shadow-md group"
                  >
                    <FileText className="w-4 h-4 mr-2" />
                    Download Workbook
                    <ExternalLink className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                  </a>
                </div>
              </div>
            </div>

            {/* Partnership Proposal */}
            <div className="group bg-white rounded-xl p-6 shadow-md hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0 p-3 bg-gradient-to-br from-amber-500 to-amber-600 rounded-lg shadow-md group-hover:scale-110 transition-transform">
                  <Mail className="w-6 h-6 text-white" />
                </div>
                <div className="flex-1">
                  <h3 className="text-lg font-semibold text-gray-900 mb-2 flex items-center gap-2">
                    Partnership Opportunity
                    <Star className="w-4 h-4 text-amber-500" />
                  </h3>
                  <p className="text-gray-600 mb-4">
                    Submit your product idea directly to Travis for review. Include your Helium 10 data for faster consideration.
                  </p>
                  <a 
                    href="mailto:travis@passionproduct.com"
                    className="inline-flex items-center px-4 py-2 bg-gradient-to-r from-amber-500 to-amber-600 text-white rounded-lg hover:from-amber-600 hover:to-amber-700 transition-colors shadow-md group"
                  >
                    <Mail className="w-4 h-4 mr-2" />
                    Submit Proposal
                    <ExternalLink className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* VIP Perks Banner */}
          <div className="mt-8 bg-gradient-to-r from-blue-600 to-blue-700 rounded-xl p-6 text-white shadow-lg">
            <div className="flex items-start gap-4">
              <div className="flex-shrink-0 p-3 bg-white/10 rounded-lg">
                <Gift className="w-6 h-6 text-white" />
              </div>
              <div>
                <h3 className="text-lg font-semibold mb-2 flex items-center gap-2">
                  Exclusive VIP Access
                  <Clock className="w-4 h-4" />
                </h3>
                <p className="text-blue-100">
                  As a valued VIP member, you have lifetime access to all challenge recordings and resources. 
                  Watch and review the content whenever you need, helping you perfect your product research strategy.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}