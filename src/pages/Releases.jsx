import React from 'react';
import { dummyShowsData } from '../assets/assets';
import Moviecard from '../Component/Moviecard';
import BlurCircle from '../Component/BlurCircle';


const Releases = () => {
  return (
    <div className="px-6 md:px-16 lg:px-36 py-24 text-white min-h-screen bg-black relative overflow-hidden">

      {/* Background Blur Visual */}
      <BlurCircle top="-150px" left="-150px" />
      <BlurCircle top="50%" right="-100px" />

      {/* Title */}
      <div className="text-center mb-12">
        <h1 className="text-3xl md:text-4xl font-semibold">New & Upcoming Releases</h1>
        <p className="text-gray-400 mt-3 text-sm md:text-base">
          Catch the latest movies hitting the theaters soon.
        </p>
      </div>

      {/* Movie Grid */}
      <div className="grid gap-8 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 justify-center">
        {dummyShowsData.slice(0, 8).map((movie) =>
          movie && movie._id ? (
            <Moviecard key={movie._id} movie={movie} />
          ) : null
        )}
      </div>

      {/* Load More Button */}
      <div className="flex justify-center mt-16">
        <button
          className="px-6 py-2 bg-primary hover:bg-primary-dull transition rounded-full text-sm font-medium"
          onClick={() => {
            window.location.href = '/movies';
          }}
        >
          Load More
        </button>
      </div>
    </div>
  );
};

export default Releases;
