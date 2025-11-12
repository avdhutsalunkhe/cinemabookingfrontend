import React from 'react';
import { assets } from '../assets/assets.js';
import { CalendarDays, Clock, ArrowRight } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const Herosection = () => {
  const navigate = useNavigate();

  return (
    <div
      className="flex flex-col items-start justify-center gap-6 px-6 md:px-16 lg:px-36 min-h-screen text-white relative"
      style={{
        backgroundImage: `url(${assets.backgroundImage})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
      }}
    >
      {/* Optional dark overlay for better text contrast */}
      <div className="absolute inset-0 bg-black/40 backdrop-blur-sm z-0"></div>

      <div className="relative z-10 mt-20">
        <img src={assets.marvelLogo} className="max-h-11 lg:h-11 mb-6" alt="Marvel Logo" />

        <div className="text-white text-5xl md:text-[70px] md:leading-[1.2] font-semibold max-w-4xl">
          <img className="w-108 h-auto" src={assets.img} alt="Hero" />
          {/* Uncomment for text titles instead of image:
          <span className="text-thrid">Deadpool</span><br />
          <span>& </span><span className="text-secondary">Wolverine</span>
          */}
        </div>

        <div className="flex flex-wrap items-center gap-4 mt-4 text-sm text-gray-300 font-light">
          <span>Action | Comedy | SuperHero</span>
          <div className="flex items-center gap-1">
            <CalendarDays className="w-4.5 h-4.5" /> 2022
          </div>
          <div className="flex items-center gap-1">
            <Clock className="w-4.5 h-4.5" /> 2h 8m
          </div>
        </div>

        <p className="max-w-md mt-4 text-gray-300 leading-relaxed text-sm md:text-base">
          In a post-apocalyptic world where cities ride on wheels and consume each other to survive,
          two people meet in London and try to stop a conspiracy.
        </p>

        <button
          onClick={() => navigate('/movies')}
          className="flex items-center gap-2 px-6 py-3 mt-6 text-sm bg-primary hover:bg-primary-dull transition rounded-full font-medium shadow-md"
        >
          Explore Movies
          <ArrowRight className="w-5 h-5" />
        </button>
      </div>
    </div>
  );
};

export default Herosection;
