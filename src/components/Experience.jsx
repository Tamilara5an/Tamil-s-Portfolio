import React, { useState, useEffect } from "react";
import { experiences, EXP_COMPANIES } from "../data/constants";

const TimelineArrow = ({ isEven }) => (
  <div
    className={`absolute top-8 sm:top-10 md:top-1/2 -translate-y-1/2 w-4 h-4 sm:w-5 sm:h-5 text-purple-400 z-10 -left-7 sm:-left-9 ${
      isEven ? 'md:left-auto md:-right-11' : 'md:-left-11 md:right-auto'
    }`}
  >
    <svg
      className="w-full h-full animate-arrow-flow"
      fill="none"
      viewBox="0 0 24 24"
      stroke="currentColor"
    >
      {/* On desktop even cards point right, on mobile or odd cards point left */}
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        className="hidden md:block"
        d={isEven ? "M9 5l7 7-7 7" : "M15 19l-7-7 7-7"}
      />
      {/* On mobile, always point towards the card (rightwards) from the left line */}
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        className="md:hidden"
        d="M9 5l7 7-7 7"
      />
    </svg>
  </div>
);

const Experience = () => {
  const [expCompanyIndex, setExpCompanyIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setExpCompanyIndex((prev) => (prev + 1) % EXP_COMPANIES.length);
    }, 2500);
    return () => clearInterval(interval);
  }, []);

  return (
    <section
      id="experience"
      className="py-12 sm:py-16 md:py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto bg-gray-900/50"
    >
      <h2 className="text-2xl sm:text-3xl font-bold mb-8 sm:mb-12 text-center">
        <span className="border-b-2 border-purple-500 pb-1">
          Professional Experience
        </span>
      </h2>

      <div className="relative max-w-3xl mx-auto">
        {/* Timeline line - aligned to left-4 on mobile, left-6 on tablet, centered on desktop */}
        <div className="absolute left-4 sm:left-6 md:left-1/2 top-2 bottom-2 border-l-2 border-purple-500/40 border-dashed"></div>

        {experiences.map((exp, index) => {
          const isEven = index % 2 === 0;
          return (
            <div
              key={index}
              className={`mb-8 sm:mb-12 relative pl-9 sm:pl-12 md:pl-0 ${
                isEven ? "md:pr-12 md:text-right" : "md:pl-12"
              }`}
            >
              <TimelineArrow isEven={isEven} />
              <div
                className={`glass-card p-4 sm:p-6 rounded-xl transition-all duration-300 hover:border-purple-500/30 ${
                  isEven ? "md:mr-8" : "md:ml-8"
                }`}
              >
                <div
                  className={`flex items-start sm:items-center mb-3 sm:mb-4 gap-3 ${
                    isEven ? "md:flex-row-reverse" : ""
                  }`}
                >
                  <img
                    src={exp.logo}
                    alt={`${exp.company} logo`}
                    className="w-10 h-10 sm:w-11 sm:h-11 rounded-full object-contain p-1 bg-gray-800/80 border border-gray-700/50 flex-shrink-0 company-logo"
                    loading="lazy"
                  />
                  <div className="min-w-0 flex-1">
                    <h3 className="text-base sm:text-lg md:text-xl font-bold text-purple-400 leading-tight">
                      {exp.role}
                    </h3>
                    <p className="text-xs sm:text-sm text-blue-300 font-medium mt-0.5">
                      {index === 0 ? (
                        <span className="transition-opacity duration-500">
                          {EXP_COMPANIES[expCompanyIndex]}
                        </span>
                      ) : (
                        exp.company
                      )}{" "}
                      <span className="text-gray-400">•</span> {exp.period}
                    </p>
                  </div>
                </div>

                <p className="text-xs sm:text-sm md:text-base text-gray-300 mb-4 text-left md:text-justify leading-relaxed">
                  {exp.description}
                </p>

                <div className={`flex flex-wrap gap-1.5 sm:gap-2 ${isEven ? "md:justify-end" : "justify-start"}`}>
                  {exp.skills.map((skill, i) => (
                    <span
                      key={i}
                      className="text-[11px] sm:text-xs bg-gray-800/80 text-blue-300 px-2.5 py-1 rounded-full border border-gray-700/50"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default Experience;
