
import React, { useState, useEffect, useRef } from 'react';

export default function Section6() {
  const [scrollProgress, setScrollProgress] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  const containerRef = useRef(null);
  const autoPlayRef = useRef(null);

  // Detect mobile screen sizes
  useEffect(() => {
    const updateMobile = () => {
      setIsMobile(window.innerWidth < 640);
    };

    updateMobile();
    window.addEventListener('resize', updateMobile);

    return () => window.removeEventListener('resize', updateMobile);
  }, []);

  // Update animation according to page scroll
  useEffect(() => {
    const handleScroll = () => {
      if (isAutoPlaying) return;

      const el = containerRef.current;
      if (!el) return;

      const rect = el.getBoundingClientRect();
      const scrollableHeight = el.offsetHeight - window.innerHeight;

      if (scrollableHeight <= 0) return;

      const currentScroll = -rect.top;
      const progress = Math.max(
        0,
        Math.min(1, currentScroll / scrollableHeight)
      );

      setScrollProgress(progress);
    };

    handleScroll();

    window.addEventListener('scroll', handleScroll, { passive: true });

    return () => window.removeEventListener('scroll', handleScroll);
  }, [isAutoPlaying]);

  // Stage information
  const getStageInfo = (p) => {
    if (p < 0.2) {
      return {
        stage: 1,
        name: 'Closed & Ready',
        desc: 'The Key Card Organizer securely holds all your cards and keys in a sleek metallic housing. The front card slot features a transparent plastic window, allowing you to easily view, tap, and display your first card without removing it.'
      };
    }

    if (p < 0.35) {
      return {
        stage: 2,
        name: 'Thumb Slider Pressed',
        desc: 'Press inward on the thumb notch along the left edge to activate the slider mechanism and access your cards with ease.'
      };
    }

    if (p < 0.6) {
      return {
        stage: 3,
        name: 'Cards Slide Out',
        desc: 'The cards smoothly fan out horizontally from left to right in a stepped arrangement, making each card easy to see, access, and select. You can also remove and replace the card in the transparent slot whenever you want.'
      };
    }

    return {
      stage: 4,
      name: 'Full Access Ready',
      desc: 'Easily tap your student ID or access passes without removing them entirely.'
    };
  };

  const currentStage = getStageInfo(scrollProgress);

  // Slider press animation
  const isButtonPressed =
    scrollProgress >= 0.2 && scrollProgress < 0.6;

  // Card animation progress
  const cardProgress = Math.max(
    0,
    Math.min(1, (scrollProgress - 0.35) / 0.25)
  );

  // Responsive card movement
  const card1TranslateX = cardProgress * (isMobile ? 28 : 140);

  const card2Progress = Math.max(
    0,
    Math.min(1, (cardProgress - 0.2) / 0.8)
  );

  const card2TranslateX =
    card2Progress * (isMobile ? 18 : 95);

  const card3Progress = Math.max(
    0,
    Math.min(1, (cardProgress - 0.5) / 0.5)
  );

  const card3TranslateX =
    card3Progress * (isMobile ? 10 : 50);

  // Jump to a particular scroll animation stage
  const jumpToStage = (target) => {
    const el = containerRef.current;
    if (!el) return;

    const scrollableHeight =
      el.offsetHeight - window.innerHeight;

    const elementTop =
      el.getBoundingClientRect().top + window.scrollY;

    const targetScroll =
      elementTop + target * scrollableHeight;

    window.scrollTo({
      top: targetScroll,
      behavior: 'smooth'
    });
  };

  const steps = [
    { label: 'Intro', target: 0.05 },
    { label: 'Press', target: 0.25 },
    { label: 'Slide Out', target: 0.48 },
    { label: 'Ready', target: 0.8 }
  ];

  return (
    <div className="min-h-screen font-sans text-black overflow-x-clip">

      {/* Main scroll container */}
      <div
        ref={containerRef}
        className="relative h-[220vh] sm:h-[260vh] lg:h-[300vh]"
      >
        {/* Sticky section */}
        <div className="sticky top-16 sm:top-20 h-[calc(100vh-4rem)] sm:h-[calc(100vh-5rem)] max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col justify-center">

          {/* Responsive grid */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-5 sm:gap-8 lg:gap-12 items-center pt-2 sm:pt-6 lg:pt-16">

            {/* Left narrative */}
            <div className="lg:col-span-5 min-w-0 space-y-3 sm:space-y-6  text-left">

              <div className="space-y-2 sm:space-y-3">

                <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-black tracking-wide leading-tight">
                  Experience the Keycard Organizer in Action
                </h2>

                <p className="text-slate-500 text-xs sm:text-sm lg:text-base leading-relaxed max-w-xl mx-auto lg:mx-0">
                  {currentStage.desc}
                </p>

              </div>

              {/* Quick jump buttons */}
              <div className="grid grid-cols-4 gap-1.5 sm:gap-2">
                {steps.map((step) => {
                  const isActive =
                    scrollProgress >= step.target - 0.05 &&
                    scrollProgress < step.target + 0.2;

                  return (
                    <button
                      key={step.label}
                      onClick={() => jumpToStage(step.target)}
                      className={`min-w-0 py-2 px-1 sm:px-2 rounded-lg sm:rounded-xl text-[10px] sm:text-xs font-semibold border transition-all duration-200 ${
                        isActive
                          ? 'bg-[#162032] border-[#CBA569] text-[#CBA569] shadow-md'
                          : 'bg-[#162032] border-slate-700 text-white hover:border-[#CBA569]'
                      }`}
                    >
                      {step.label}
                    </button>
                  );
                })}
              </div>

            </div>

            {/* Right visualizer */}
            <div className="lg:col-span-7 w-full min-w-0 flex items-center justify-center">

              <div className="relative w-full max-w-[360px] sm:max-w-[460px] lg:max-w-xl aspect-[16/10] flex items-center justify-center">

                {/* Metallic keycard holder */}
                <div className="relative w-full max-w-md aspect-[16/10] bg-[#8a9196] rounded-xl sm:rounded-2xl border-2 sm:border-4 border-[#5b6368] shadow-2xl p-2 sm:p-4 flex items-center justify-center overflow-visible">

                  {/* Corner screws */}
                  <div className="absolute top-1.5 left-1.5 sm:top-2 sm:left-2 w-2 h-2 sm:w-3 sm:h-3 rounded-full bg-[#40464a] border border-[#2a3034] shadow-inner flex items-center justify-center text-[5px] sm:text-[6px] text-slate-300">
                    ✦
                  </div>

                  <div className="absolute top-1.5 right-1.5 sm:top-2 sm:right-2 w-2 h-2 sm:w-3 sm:h-3 rounded-full bg-[#40464a] border border-[#2a3034] shadow-inner flex items-center justify-center text-[5px] sm:text-[6px] text-slate-300">
                    ✦
                  </div>

                  <div className="absolute bottom-1.5 left-1.5 sm:bottom-2 sm:left-2 w-2 h-2 sm:w-3 sm:h-3 rounded-full bg-[#40464a] border border-[#2a3034] shadow-inner flex items-center justify-center text-[5px] sm:text-[6px] text-slate-300">
                    ✦
                  </div>

                  <div className="absolute bottom-1.5 right-1.5 sm:bottom-2 sm:right-2 w-2 h-2 sm:w-3 sm:h-3 rounded-full bg-[#40464a] border border-[#2a3034] shadow-inner flex items-center justify-center text-[5px] sm:text-[6px] text-slate-300">
                    ✦
                  </div>

                  {/* Lanyard ring */}
                  <div className="absolute -left-3 sm:-left-7 bottom-3 sm:bottom-4 w-7 h-7 sm:w-12 sm:h-12 rounded-full border-2 sm:border-4 border-[#5b6368] bg-[#757c82] shadow-xl flex items-center justify-center">
                    <div className="w-3 h-3 sm:w-5 sm:h-5 rounded-full border-2 border-[#40464a] bg-slate-950" />
                  </div>

                  {/* Thumb slider */}
                  <div
                    className={`absolute rotate-180 bottom-[-10px] sm:bottom-[-20px] left-1/2 -translate-x-1/2 w-12 sm:w-16 h-3 sm:h-4 rounded-t-lg bg-[#a3adb5] border-x border-t border-[#40464a] shadow-md transition-all duration-200 flex items-center justify-center ${
                      isButtonPressed
                        ? 'translate-y-[-3px] sm:translate-y-[-4px] bg-[#687278] scale-95 shadow-inner'
                        : ''
                    }`}
                  >
                    <div className="w-6 sm:w-8 h-1 rounded-full bg-[#5b6368]" />
                  </div>

                  {/* Cards stack */}
                  <div className="relative w-full h-full min-w-0 flex items-center">

                    {/* Payment card */}
                    <div
                      className="absolute left-2 sm:left-6 w-[94%] sm:w-10/12 h-[90%] sm:h-4/5 rounded-lg sm:rounded-xl bg-gradient-to-r from-slate-800 to-slate-900 border border-slate-700 shadow-xl p-2 sm:p-4 flex flex-col justify-between transition-transform duration-75"
                      style={{
                        transform: `translateX(${card3TranslateX}px)`,
                        zIndex: 1,
                        opacity: cardProgress > 0.05 ? 1 : 0.8
                      }}
                    >
                      <div className="flex justify-between items-center gap-1">
                        <span className="text-[7px] sm:text-[10px] font-mono text-cyan-400">
                          PAYMENT CARD
                        </span>

                        <div className="w-5 sm:w-6 h-3 sm:h-4 rounded bg-amber-500/20 text-[6px] sm:text-[8px] text-amber-300 flex items-center justify-center font-bold">
                          EMV
                        </div>
                      </div>

                      <div className="font-mono text-[9px] sm:text-xs tracking-widest text-slate-300">
                        •••• 4821
                      </div>
                    </div>

                    {/* Transit pass */}
                    <div
                      className="absolute left-2 sm:left-6 w-[94%] sm:w-10/12 h-[90%] sm:h-4/5 rounded-lg sm:rounded-xl bg-gradient-to-r from-indigo-950 to-blue-900 border border-indigo-700/80 shadow-xl p-2 sm:p-4 flex flex-col justify-between transition-transform duration-75"
                      style={{
                        transform: `translateX(${card2TranslateX}px)`,
                        zIndex: 2,
                        opacity: cardProgress > 0.02 ? 1 : 0.9
                      }}
                    >
                      <div className="flex justify-between items-center gap-1">
                        <span className="text-[8px] sm:text-[10px] font-bold text-indigo-300 uppercase tracking-wider">
                          Transit Pass
                        </span>

                        <span className="text-[7px] sm:text-[9px] bg-indigo-500/30 text-indigo-200 px-1.5 sm:px-2 py-0.5 rounded-full">
                          NFC
                        </span>
                      </div>

                      <div className="text-[9px] sm:text-xs text-slate-200 font-medium">
                        Zone 1-4 Unlimited
                      </div>
                    </div>

                    {/* Student ID */}
                    <div
                      className="absolute left-2 sm:left-6 w-[94%] sm:w-10/12 h-[90%] sm:h-4/5 rounded-lg sm:rounded-xl bg-[#c5cfd6] border border-[#5b6368] shadow-2xl p-2 sm:p-4 flex flex-col justify-between transition-transform duration-75 text-slate-900"
                      style={{
                        transform: `translateX(${card1TranslateX}px)`,
                        zIndex: 3
                      }}
                    >
                      {/* Student ID header */}
                      <div className="flex justify-between items-start gap-1">

                        <div className="bg-white/90 p-1 sm:p-2 rounded-md sm:rounded-lg shadow-sm border border-slate-300 flex items-center gap-1 sm:gap-2 min-w-0">
                          <div className="w-4 h-4 sm:w-6 sm:h-6 shrink-0 rounded bg-emerald-800 flex items-center justify-center text-white font-bold text-[9px] sm:text-xs">
                            U
                          </div>

                          <div className="min-w-0">
                            <div className="text-[5px] sm:text-[8px] uppercase tracking-wide text-slate-600 font-bold truncate">
                              Waipapa Taumata Rau
                            </div>

                            <div className="text-[6px] sm:text-[10px] font-extrabold text-slate-900 leading-tight">
                              University of Auckland
                            </div>
                          </div>
                        </div>

                        <span className="text-[7px] sm:text-xs font-bold uppercase tracking-wider text-slate-700 shrink-0">
                          Student
                        </span>
                      </div>

                      {/* Name and profile photo */}
                      <div className="flex justify-between items-center gap-2 my-auto">

                        <div>
                          <h3 className="text-base sm:text-xl font-black text-slate-900 tracking-tight leading-none">
                            Storm
                            <br />
                            Day
                          </h3>

                          <p className="text-[7px] sm:text-[10px] font-mono font-bold text-slate-700 mt-1 sm:mt-2">
                            ID 00000000
                          </p>
                        </div>

                        <div className="w-10 h-12 sm:w-20 sm:h-24 shrink-0 rounded bg-slate-300 border sm:border-2 border-slate-400 overflow-hidden shadow-inner flex items-center justify-center">
                          <div className="w-full h-full bg-gradient-to-b from-slate-400 to-slate-500 flex flex-col items-center justify-end">
                            <div className="w-5 h-5 sm:w-10 sm:h-10 rounded-full bg-slate-600 mb-0.5 sm:mb-1" />
                            <div className="w-8 h-4 sm:w-16 sm:h-8 rounded-t-full bg-slate-700" />
                          </div>
                        </div>

                      </div>

                      {/* Footer */}
                      <div className="flex justify-between items-center text-[6px] sm:text-[9px] font-bold text-slate-600 border-t border-slate-400/40 pt-1 gap-1">
                        <span>ACCESS ID CARD</span>
                        <span className="text-cyan-800 font-mono">2026</span>
                      </div>

                    </div>

                  </div>
                </div>
              </div>
            </div>

          </div>
        </div>
      </div>
    </div>
  );
}
