import React from 'react';
import { useEffect, useState } from 'react';
import { Gift, CheckCircle2, Users, Calendar, Video, MessageCircle, PhoneCall, BookOpen, Sparkles } from 'lucide-react';

export function PassionProductFormula() {
  const [spotsLeft, setSpotsLeft] = useState(10);
  const [showFloatingButton, setShowFloatingButton] = useState(false);
  
  useEffect(() => {
    const now = new Date();
    const pacificNow = new Date(now.toLocaleString('en-US', { timeZone: 'America/Los_Angeles' }));
    const day = pacificNow.getDay();
    const hour = pacificNow.getHours();
    
    if (day === 0) {
      setSpotsLeft(10);
      return;
    }
    
    if (day === 1 && hour >= 9) setSpotsLeft(10);
    else if (day === 2 && hour >= 9) setSpotsLeft(5);
    else if (day === 3 && hour >= 9) setSpotsLeft(2);
    else if (day === 4 && hour >= 9) setSpotsLeft(1);
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      const showButton = scrollPosition > 500;
      setShowFloatingButton(showButton);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToOffer = () => {
    const element = document.getElementById('ppf-offer');
    element?.scrollIntoView({ behavior: 'smooth' });
  };

  const features = [
    { icon: Video, text: '117 Step-By-Step Video Lessons', description: 'Comprehensive videos guide you through every phase' },
    { icon: Calendar, text: 'Lifetime Weekly Q&A Calls', description: 'Ongoing support through live weekly sessions' },
    { icon: Users, text: 'Private Facebook Mastermind', description: 'Exclusive community access for life' },
    { icon: CheckCircle2, text: 'Step-By-Step Checklists', description: 'Actionable guides to stay on track' },
    { icon: MessageCircle, text: '2 Free 1-on-1 Coaching Sessions', description: 'Personal guidance from certified coaches' },
    { icon: Video, text: 'Marketing Course Bundle', description: 'Full Google Ads, YouTube & Facebook training' },
    { icon: PhoneCall, text: '20-Min Orientation Call', description: 'Personal consultation to start right' },
    { icon: BookOpen, text: '2000+ Q&A Database', description: 'Comprehensive knowledge base access' }
  ];

  return (
    <>
      {/* Floating Button */}
      <div 
        className={`fixed bottom-8 right-8 z-50 transform transition-all duration-300 ${
          showFloatingButton ? 'translate-y-0 opacity-100' : 'translate-y-20 opacity-0'
        }`}
      >
        <button
          onClick={scrollToOffer}
          className="group flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-amber-500 to-amber-600 text-white rounded-full shadow-lg hover:shadow-xl transition-all transform hover:scale-105 hover:from-amber-600 hover:to-amber-700"
        >
          <div className="relative flex items-center">
            <span className="relative flex h-3 w-3">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-red-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-3 w-3 bg-red-500"></span>
            </span>
            <span className="ml-2 font-semibold">Only {spotsLeft} {spotsLeft === 1 ? 'spot' : 'spots'} remaining!</span>
          </div>
          <Gift className="w-5 h-5 group-hover:scale-110 transition-transform" />
        </button>
      </div>

      <div id="ppf-offer" className="relative py-24 overflow-hidden bg-gradient-to-b from-blue-900 to-blue-800">
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0" style={{ 
            backgroundImage: "url('https://images.unsplash.com/photo-1639322537228-f710d846310a?auto=format&fit=crop&w=2000&q=80')",
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            filter: 'blur(8px)'
          }}></div>
        </div>

        <div className="container relative mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-amber-400 text-amber-900 mb-6 animate-bounce">
                <Sparkles className="w-4 h-4" />
                <span className="font-bold">Limited Time Offer</span>
              </div>
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6 leading-tight">
                The Passion Product Formula
                <span className="block text-amber-400 mt-2">Your Blueprint to Amazon FBA Success</span>
              </h2>
              <p className="text-xl text-blue-100 max-w-2xl mx-auto leading-relaxed">
                We've reserved just <span className="font-bold text-amber-400">10 exclusive spots</span> for challenge participants. 
                Get our complete, proven system to build a thriving Amazon FBA business.
              </p>
            </div>

            <div className="bg-white rounded-3xl shadow-2xl overflow-hidden mb-8 transform hover:scale-[1.01] transition-all duration-300">
              <div className="p-8 bg-gradient-to-r from-amber-500 to-amber-600 text-center relative overflow-hidden">
                {/* Animated Background */}
                <div className="absolute inset-0 opacity-20">
                  <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-white via-transparent to-transparent animate-pulse"></div>
                </div>
                
                <div className="relative">
                  <div className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-white text-amber-600 mb-6 shadow-lg">
                    <span className="relative flex h-3 w-3">
                      <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-red-400 opacity-75"></span>
                      <span className="relative inline-flex rounded-full h-3 w-3 bg-red-500"></span>
                    </span>
                    <span className="font-bold text-lg">⚡️ Flash Offer: Only {spotsLeft} {spotsLeft === 1 ? 'Spot' : 'Spots'} Left!</span>
                  </div>
                  <h3 className="text-3xl font-bold text-white mb-4">
                    Exclusive Challenge Participant Offer
                  </h3>
                  <p className="text-xl text-amber-100">
                    Lock in your spot now at our special challenge-only rate
                  </p>
                </div>
              </div>

              <div className="p-12">
                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
                  {features.map((feature, index) => (
                    <div key={index} className="group bg-gradient-to-br from-amber-50 to-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
                      <div className="bg-gradient-to-br from-amber-500 to-amber-600 w-16 h-16 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                        <feature.icon className="w-8 h-8 text-white" />
                      </div>
                      <h4 className="font-bold text-gray-900 mb-3 text-lg">{feature.text}</h4>
                      <p className="text-gray-600">{feature.description}</p>
                    </div>
                  ))}
                </div>

                <div className="mt-12 text-center">
                  <a
                    href="https://www.thepassionproductformula.com/february"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center px-12 py-6 text-xl font-bold rounded-full bg-gradient-to-r from-amber-500 to-amber-600 text-white hover:from-amber-600 hover:to-amber-700 transition-all transform hover:scale-105 shadow-xl hover:shadow-2xl"
                  >
                    Secure Your Spot Now
                    <Gift className="ml-3 w-6 h-6" />
                  </a>
                  <div className="mt-6 flex items-center justify-center gap-2 text-amber-600">
                    <Sparkles className="w-5 h-5" />
                    <p className="font-semibold">
                      This special rate is only available to challenge participants
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}