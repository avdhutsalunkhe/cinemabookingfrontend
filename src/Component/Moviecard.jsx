import { StarIcon } from 'lucide-react';
import React from 'react';
import { useNavigate } from 'react-router-dom';
import timeFormat from '../lib/timeFormat';

const Moviecard = ({ movie }) => {
	const navigate = useNavigate();

	return (
		<div className="flex flex-col justify-between p-3 bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl hover:-translate-y-1 transition duration-300 w-64 shadow-md">
			<div
				className="relative rounded-lg overflow-hidden h-52 w-full cursor-pointer"
				onClick={() => {
					navigate(`/movies/${movie._id}`);
					window.scrollTo(0, 0);
				}}
			>
				<img
					src={movie.backdrop_path}
					alt={movie.title || 'Movie Poster'}
					className="object-cover w-full h-full transform hover:scale-105 transition duration-300"
				/>
			</div>

			<div className="mt-3">
				<p className="font-semibold text-base text-white truncate">{movie.title}</p>

				<p className="text-sm text-gray-400 mt-1 leading-relaxed">
					{new Date(movie.release_date).getFullYear()} ●{' '}
					{movie.genres?.slice(0, 2).map(genre => genre.name).join(' | ') || 'Genre'} ●{' '}
					{movie.runtime ? timeFormat(movie.runtime) : 'Unknown Duration'}
				</p>
			</div>

			<div className="flex items-center justify-between mt-4 pb-1">
				<button
					onClick={() => {
						navigate(`/movies/${movie._id}`);
						window.scrollTo(0, 0);
					}}
					className="px-4 py-2 text-xs bg-primary hover:bg-primary-dull text-white transition rounded-full font-medium cursor-pointer shadow-sm"
				>
					Buy Tickets
				</button>
				<p className="flex items-center gap-1 text-sm text-gray-300">
					<StarIcon className="w-4 h-4 text-primary fill-primary" />
					{movie.vote_average?.toFixed(1) || 'N/A'}
				</p>
			</div>
		</div>
	);
};

export default Moviecard;
