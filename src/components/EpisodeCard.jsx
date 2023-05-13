import React from 'react'
import { IMAGE_PATH } from '../utils'
import { StopIcon } from '@heroicons/react/24/solid'

const EpisodeCard = ({ data }) => {
    return (
        <div className='flex items-center gap-5'>
            <div className='w-1/3 rounded-xl overflow-hidden'>
                <img className='w-full' src={IMAGE_PATH.ORIGINAL + data?.still_path} alt="" />
            </div>
            <div className='w-2/3 flex flex-col gap-3'>
                <h2 className=''>
                    {`Episode ${data?.episode_number}: `}
                    <span className='text-xl text-red-500 font-medium'>{data?.name}</span>
                </h2>
                <div className='flex items-center gap-2'>
                    <p>{data?.air_date}</p>
                    <StopIcon height={15} color='#EF4444' />
                    <p>{data?.runtime} Mins</p>
                    <StopIcon height={15} color='#EF4444' />
                    <p>{Math.round(data?.vote_average * 10)}% Ratings</p>
                </div>
                <p>{data?.overview}</p>
            </div>
        </div>
    )
}

export default EpisodeCard