import React from "react";
import { IMAGE_PATH } from "../../utils";
import Badge from "../Badge";
import { Link } from "react-router-dom";
import { CalendarIcon, HandThumbUpIcon, ArrowRightIcon } from '@heroicons/react/24/solid'

const CarouselItem = ({ data, rank }) => {
  const releaseDate = new Date(data.release_date || data.first_air_date);
  return (
    <div className="w-screen flex items-center justify-end relative group">
      <img
        className={`max-h-[80vh] aspect-video object-contain z-10 transition-all`}
        src={IMAGE_PATH.ORIGINAL + data.backdrop_path}
        alt=""
      />
      <div className="z-20 p-10 flex flex-col items-start justify-center gap-5 absolute inset-0 transition-all bg-gradient-to-r dark:from-black from-white from-30% to-transparent to-80%">
        <span className="text-red-500 text-xl font-bold">{`#${rank} in Trending`}</span>
        <h1 className="text-5xl font-black w-2/4">{data.title || data.name}</h1>
        <div className="flex items-center gap-5">
          <Badge text={data.media_type === "movie" ? "movie" : "TV"} />
          <span className="flex items-center gap-2">
            <CalendarIcon height={20} />
            {`${releaseDate.toLocaleString("default", { month: "long", })} ${String(releaseDate.getDate()).padStart(2, "0")} ,${releaseDate.getFullYear()}`}
          </span>
          <span className="flex items-center gap-2 font-bold text-red-500">
            <HandThumbUpIcon height={25} />
            {Math.round(data.vote_average * 10) + "%"}
          </span>
        </div>
        <p className="w-2/5">
          {data.overview.length > 200
            ? data.overview.slice(0, 200) + "..."
            : data.overview}
        </p>
        <div className="flex items-center gap-5">
          <Link className="flex items-center gap-3 hover:gap-5 text-lg border-2 border-red-500 py-1 px-3 hover:bg-red-500 font-medium transition-all rounded-lg" to={`/${data.media_type === "movie" ? 'movie' : 'tv'}/${data.id}`} >
            Details
            <ArrowRightIcon height={20} />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default CarouselItem;
