import React, { useEffect, useState } from 'react';
import { dummyShowsData } from '../../assets/assets';
import Loading from '../../Component/Loading';
import Titel from '../../Component/admin/Titel';
import { CheckIcon, DeleteIcon, StarIcon } from 'lucide-react';
import { kConverter } from '../../lib/kConverter';
import ReactDatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import '../../index.css'; // custom calendar styles

const AddShows = () => {
  const currency = import.meta.env.VITE_CURRENCY || '₹';

  const [nowPlayingMovies, setNowPlayingMovies] = useState([]);
  const [selectedMovie, setSelectedMovie] = useState(null);
  const [showPrice, setShowPrice] = useState('');
  const [selectedDateTime, setSelectedDateTime] = useState(null);
  const [dateTimeSelection, setDateTimeSelection] = useState({});

  useEffect(() => {
    setNowPlayingMovies(dummyShowsData);
  }, []);

  const handleAddDateTime = () => {
    if (!selectedDateTime) return;

    const date = selectedDateTime.toISOString().split('T')[0];
    const time = selectedDateTime.toLocaleTimeString([], {
      hour: '2-digit',
      minute: '2-digit',
    });

    setDateTimeSelection((prev) => {
      const existingTimes = prev[date] || [];
      if (!existingTimes.includes(time)) {
        return {
          ...prev,
          [date]: [...existingTimes, time],
        };
      }
      return prev;
    });

    setSelectedDateTime(null);
  };

  const handleRemoveTime = (date, time) => {
    setDateTimeSelection((prev) => {
      const filteredTimes = prev[date].filter((t) => t !== time);
      if (filteredTimes.length === 0) {
        const { [date]: _, ...rest } = prev;
        return rest;
      }
      return { ...prev, [date]: filteredTimes };
    });
  };

  return nowPlayingMovies.length > 0 ? (
    <>
      <Titel text1="Add" text2="Shows" />

      <p className="mt-10 text-lg font-medium text-white">Now Playing Movies</p>
      <div className="overflow-x-auto pb-4">
        <div className="group flex flex-wrap gap-4 mt-4 w-max">
          {nowPlayingMovies.map((movie) => (
            <div key={movie.id} className="flex flex-col items-start max-w-40">
              <div
                className={`relative w-full cursor-pointer group-hover:not-hover:opacity-40 hover:-translate-y-1 transition duration-300`}
                onClick={() => setSelectedMovie(movie.id)}
              >
                <img
                  src={movie.poster_path}
                  alt={movie.title}
                  className="w-full object-cover brightness-90"
                />
                <div className="text-sm flex items-center justify-between p-2 bg-black/70 w-full absolute bottom-0 left-0">
                  <p className="flex items-center gap-1 text-gray-400">
                    <StarIcon className="w-4 h-4 text-primary fill-primary" />
                    {(movie.vote_average || 0).toFixed(1)}
                  </p>
                  <p className="text-gray-300">
                    {kConverter(movie.vote_count || 0)} Votes
                  </p>
                </div>
                {selectedMovie === movie.id && (
                  <div className="absolute top-2 right-2 flex items-center justify-center bg-primary h-6 w-6 rounded">
                    <CheckIcon className="w-4 h-4 text-white" strokeWidth={2.5} />
                  </div>
                )}
              </div>
              <p className="font-medium truncate text-primary">{movie.title}</p>
              <p className="font-medium truncate text-gray-400">{movie.release_date}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Show Price Input */}
      <div className="mt-8">
        <label className="block text-sm font-medium mb-2 text-white">Show Price</label>
        <div className="inline-flex items-center gap-2 border border-gray-600 px-3 py-2 rounded-md">
          <p className="text-gray-400 text-sm">{currency}</p>
          <input
            min={0}
            step="0.01"
            type="number"
            value={showPrice}
            onChange={(e) => setShowPrice(e.target.value)}
            placeholder="Enter show price"
            className="outline-none bg-transparent text-white"
          />
        </div>
      </div>

      {/* Custom Calendar & Time Picker */}
      <div className="mt-6">
        <label className="block text-sm font-medium mb-2 text-white">Select Date and Time</label>
        <div className="flex flex-wrap items-center gap-4">
          <div className="rounded-md">
            <ReactDatePicker
              selected={selectedDateTime}
              onChange={(date) => setSelectedDateTime(date)}
              showTimeSelect
              dateFormat="MMMM d, yyyy h:mm aa"
              timeIntervals={60}
              placeholderText="Pick date & time"
              className="bg-gray-700 text-white px-4 py-2 rounded-md border border-gray-500 placeholder-gray-300"
              calendarClassName="custom-datepicker"
              popperPlacement="bottom-start"
            />
          </div>
          <button
            type="button"
            onClick={handleAddDateTime}
            className="bg-primary text-white px-4 py-2 rounded hover:bg-primary/90"
          >
            Add Time
          </button>
        </div>
      </div>

      {/* Display Selected Date-Times */}
      {Object.keys(dateTimeSelection).length > 0 && (
        <div className="mt-6">
          <p className="text-sm font-medium mb-2 text-white">Selected Date & Time</p>
          {Object.entries(dateTimeSelection).map(([date, times]) => (
            <div key={date} className="mb-2">
              <p className="text-gray-300 font-semibold">{date}</p>
              <div className="flex flex-wrap gap-2 mt-1">
                {times.map((time) => (
                  <div
                    key={time}
                    className="bg-primary/10 text-primary border border-primary px-2 py-1 rounded text-sm flex items-center gap-1 cursor-pointer"
                  >
                    {time}
                    <DeleteIcon
                      onClick={() => handleRemoveTime(date, time)}
                    />
                      
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      )}
      <button className="bg-primary text-white px-8 py-2 mt-6 rounded
hover:bg-primary/90 transition-all cursor-pointer" >
    Add Show
</button>
    </>
  ) : (
    <Loading />
  );
};

export default AddShows;
