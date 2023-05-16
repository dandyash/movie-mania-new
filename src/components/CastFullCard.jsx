import React from 'react'
import { Link } from 'react-router-dom'
import { IMAGE_PATH, PersonPlaceHolder } from '../utils'

const CastFullCard = ({ data }) => {
    return (
        <Link to={`/person/${data.id}`} className="group flex flex-col" title={data.name}>
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
                <p className='text-lg'>as <span className='capitalize font-medium text-red-500'>{data.character}</span></p>
            </div>
        </Link>
    )
}

export default CastFullCard