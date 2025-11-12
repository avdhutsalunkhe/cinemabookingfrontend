import React from 'react';
import { MapPin, Clock, Star } from 'lucide-react';

const TheaterCard = ({ theater }) => {
  return (
    <div className="p-5 bg-white/5 border border-white/10 rounded-xl hover:shadow-xl hover:scale-[1.01] transition-all duration-300">
      <img
        src={theater.image}
        alt={theater.name}
        className="rounded-lg w-full h-44 object-cover mb-4"
      />
      <h2 className="text-xl font-semibold text-white mb-2">{theater.name}</h2>
      <p className="text-sm text-gray-400 flex items-center gap-1 mb-1">
        <MapPin className="w-4 h-4" /> {theater.location}
      </p>
      <p className="text-sm text-gray-400 flex items-center gap-1 mb-1">
        <Clock className="w-4 h-4" /> {theater.timings}
      </p>
      <p className="text-sm text-gray-400 flex items-center gap-1">
        <Star className="w-4 h-4 text-yellow-400 fill-yellow-400" />
        {theater.rating} / 5
      </p>
    </div>
  );
};

export default TheaterCard;
