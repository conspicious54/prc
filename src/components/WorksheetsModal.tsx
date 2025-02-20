import React from 'react';
import { X, ExternalLink } from 'lucide-react';

interface WorksheetLink {
  title: string;
  url: string;
  description?: string;
}

interface WorksheetsModalProps {
  isOpen: boolean;
  onClose: () => void;
  dayNumber: number;
}

const worksheetsByDay: Record<number, WorksheetLink[]> = {
  1: [
    {
      title: "Get 50% Off Helium10",
      url: "https://h10code.com/",
      description: "Essential tool for Amazon product research"
    }
  ],
  2: [
    {
      title: "Exploding Topics",
      url: "https://explodingtopics.com/?via=travis",
      description: "Discover trending products and niches"
    },
    {
      title: "Get 50% Off Helium10",
      url: "https://h10code.com/",
      description: "Essential tool for Amazon product research"
    }
  ],
  3: [
    {
      title: "2025 TrendHunter Report",
      url: "https://go.trendhunter.com/2025-trend-report?_gl=1*w004a5*_gcl_au*MTM3NjIwMzc1Mi4xNzM5OTg0OTM1*_ga*NDI3MDk5OTI4LjE3Mzk5ODQ5MzY.*_ga_QB9B65FF8H*MTczOTk4NDkzNS4xLjAuMTczOTk4NDkzNS42MC4wLjA",
      description: "Latest trends and market insights for 2025"
    },
    {
      title: "2024 TrendHunter Report",
      url: "https://go.trendhunter.com/2024-trend-report?_gl=1*fls7av*_gcl_aw*R0NMLjE2OTcxMjczMzQuQ2p3S0NBanc2OW1vQmhCZ0Vpd0FVRkN4Mk1HY2NueldGcE5kMm9CY0VQODdNRlFBX2ZVVVFLT2dKd1Nwbmo5SU94Uzc1ejQzMU9ROFNSb0MxSDBRQXZEX0J3RQ..*_gcl_au*NDg0NDIwODg1LjE2OTcxMjczMzQuMTI1NTM5NTU0MS4xNjk3MTI3MzcwLjE2OTcxMjc0MTU.*_ga*NDg5MzYyOTU4LjE2OTcxMjczMzQ.*_ga_QB9B65FF8H*MTY5NzEyNzMzMy4xLjEuMTY5NzEyNzQxNi41OC4wLjA.&_ga=2.95178270.360386938.1697127334-489362958.1697127334&_gac=1.113312501.1697127334.CjwKCAjw69moBhBgEiwAUFCx2MGccnzWFpNd2oBcEP87MFQA_fUUQKOgJwSpnj9IOxS75z431OQ8SRoC1H0QAvD_BwE",
      description: "Current market trends and opportunities"
    },
    {
      title: "2023 TrendHunter Report",
      url: "https://go.trendhunter.com/2023-Trend-Report?_gl=1*1xuege7*_gcl_aw*R0NMLjE2ODkxOTkyNDkuQ2owS0NRanducm1sQmhESEFSSXNBREo1Yl9rTkpvRFR0cllVVWhUalVYSm9uYXVoVVJzS1JubVowYkxkTUVDNEZ2c2w3aGlYWE5fOVN4VWFBZ242RUFMd193Y0I.*_gcl_au*NzQzOTMxMDczLjE2ODkxOTkyNDk.*_ga*Mjk5MTA0NTYyLjE2ODkxOTkyNTI.*_ga_QB9B65FF8H*MTY4OTE5OTI1Mi4xLjEuMTY4OTE5OTM4Ni42MC4wLjA.&_ga=2.268334668.357244885.1689199256-299104562.1689199252&_gac=1.229447918.1689199256.Cj0KCQjwnrmlBhDHARIsADJ5b_kNJoDTtrYUUhTjUXJonauhURsKRnmZ0bLdMEC4Fvsl7hiXXN_9SxUaAgn6EALw_wcB",
      description: "Historical trend data and analysis"
    },
    {
      title: "The Idea Generator",
      url: "https://docs.google.com/spreadsheets/d/1bGZY-rtMQ32e8WvdEgu445bXJmZtVoM2O9_vaYQGd7I/edit?gid=0#gid=0",
      description: "Spreadsheet tool for brainstorming product ideas"
    },
    {
      title: "The Product Scorecard",
      url: "https://docs.google.com/spreadsheets/d/1BOcqkHgvA0kRyHEFWR27FF9Y5i0jXSlnwtWmJNgFFTw/edit?usp=sharing",
      description: "Evaluate and score your product ideas"
    },
    {
      title: "Business Cost Calculator",
      url: "https://docs.google.com/spreadsheets/d/1cPkU1JRcN2h3uxr9cnhJdfoXxjTyV8UmXgxa0tRGe_4/edit?gid=1836940576#gid=1836940576",
      description: "Calculate startup and operating costs"
    },
    {
      title: "Amazon Fee Calculator",
      url: "https://sellercentral.amazon.com/hz/fba/profitabilitycalculator/index?lang=en_US",
      description: "Calculate Amazon FBA fees and profitability"
    }
  ]
};

export function WorksheetsModal({ isOpen, onClose, dayNumber }: WorksheetsModalProps) {
  if (!isOpen) return null;

  const worksheets = worksheetsByDay[dayNumber] || [];

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto">
      <div className="flex items-center justify-center min-h-screen px-4 pt-4 pb-20 text-center sm:block sm:p-0">
        <div 
          className="fixed inset-0 transition-opacity bg-gray-500 bg-opacity-75" 
          onClick={onClose}
        ></div>

        <span className="hidden sm:inline-block sm:align-middle sm:h-screen">&#8203;</span>

        <div className="relative inline-block px-4 pt-5 pb-4 overflow-hidden text-left align-bottom transition-all transform bg-white rounded-2xl shadow-xl sm:my-8 sm:align-middle sm:max-w-2xl sm:w-full sm:p-6">
          <div className="absolute top-0 right-0 pt-4 pr-4">
            <button
              onClick={onClose}
              className="text-gray-400 hover:text-gray-500 focus:outline-none"
            >
              <X className="w-6 h-6" />
            </button>
          </div>

          <div className="sm:flex sm:items-start">
            <div className="w-full mt-3 text-center sm:mt-0 sm:text-left">
              <h3 className="text-2xl font-bold leading-6 text-gray-900 mb-8">
                Day {dayNumber} Resources
              </h3>
              
              <div className="mt-2 space-y-4">
                {worksheets.map((worksheet, index) => (
                  <a
                    key={index}
                    href={worksheet.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group flex items-center justify-between p-4 rounded-xl bg-blue-50 hover:bg-blue-100 transition-all duration-300"
                  >
                    <div className="flex-1">
                      <h4 className="text-lg font-semibold text-blue-900 group-hover:text-blue-700">
                        {worksheet.title}
                      </h4>
                      {worksheet.description && (
                        <p className="text-blue-600 text-sm mt-1">
                          {worksheet.description}
                        </p>
                      )}
                    </div>
                    <ExternalLink className="w-5 h-5 text-blue-500 group-hover:text-blue-700 group-hover:scale-110 transition-transform" />
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}