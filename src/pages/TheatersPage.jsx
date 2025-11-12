import React from 'react';
import { theaterList } from '../assets/assets'; // Add your data here

import BlurCircle from '../Component/BlurCircle';
import TheaterCard from '../Component/TheaterCard';

const TheatersPage = () => {
  return (
    <section className="px-6 md:px-16 lg:px-36 pt-28 pb-20 min-h-screen text-white">
      <BlurCircle top="-80px" left="-80px" />

      {/* Header */}
      <div className="text-center max-w-3xl mx-auto mb-16">
        <h1 className="text-4xl md:text-5xl font-bold mb-4">Explore Theaters</h1>
        <p className="text-gray-400">
          Discover nearby theaters, check facilities, show timings, and book your favorite seats.
        </p>
      </div>

      {/* Theater Grid */}
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-10">
        {theaterList.map((theater, index) => (
          <TheaterCard key={index} theater={theater} />
        ))}
      </div>
    </section>
  );
};

export default TheatersPage;
