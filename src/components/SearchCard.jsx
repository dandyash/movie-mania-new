import React from 'react'
import { Link } from 'react-router-dom'
import { IMAGE_PATH, ImagePlaceHolder, PersonPlaceHolder } from '../utils'
import { CalendarIcon } from '@heroicons/react/24/solid';

const SearchCard = ({ data }) => {
    const releaseDate = new Date(data.release_date || data.first_air_date);
    return (
        <>
            {data.media_type === "person"

                ? <Link to={`/person/${data.id}`} className="group flex flex-col" title={data.name}>
                    <div className="overflow-hidden rounded-xl">
                        <img
                            className="w-full aspect-[3.3/5] group-hover:scale-110 transition-all"
                            src={data.profile_path ? IMAGE_PATH.W_300 + data.profile_path : PersonPlaceHolder}
                            loading="lazy"
                            alt={data.name}
                        />
                    </div>
                    <div className="flex flex-col gap-2 py-3 px-2">
                        <p className="group-hover:text-red-500 text-xl font-extrabold transition">
                            {data.name}
                        </p>
                    </div>
                </Link>
                : <Link to={data.title ? `/movie/${data.id}` : `/tv/${data.id}`} className="group flex flex-col" title={data.title || data.name}>
                    <div className="overflow-hidden rounded-xl">
                        <img
                            className="w-full aspect-[3.3/5] group-hover:scale-110 transition-all"
                            src={data.poster_path ? IMAGE_PATH.W_300 + data.poster_path : ImagePlaceHolder}
                            loading="lazy"
                            alt={data.title || data.name}
                        />
                    </div>
                    <div className="flex flex-col gap-2 py-3 px-2">
                        <p className="group-hover:text-red-500 text-xl font-extrabold transition">
                            {String(data.title || data.name).length > 25 ? String(data.title || data.name).slice(0, 25) + "..." : String(data.title || data.name)}
                        </p>
                        <span className="flex items-center gap-2">
                            <CalendarIcon height={20} className="text-red-500" />
                            {`${releaseDate.toLocaleString("default", { month: "short", })} ${String(releaseDate.getDate()).padStart(2, "0")} ,${releaseDate.getFullYear()}`}
                        </span>
                    </div>
                </Link>

            }
        </>
    )
}

export default SearchCard