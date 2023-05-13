import React from 'react'
import { IMAGE_PATH } from '../utils'
import { ArrowRightIcon, StopIcon } from '@heroicons/react/24/solid'
import { Link } from 'react-router-dom'

const SeasonCard = ({ data, hasMoreThanOne = false, isDirect = false }) => {
    return (
        <div className='relative rounded-xl overflow-hidden'>
            {/* <img src={IMAGE_PATH.ORIGINAL + backdrop_path} alt="" /> */}
            <div className='flex items-center'>
                <div className='w-[200px] aspect-[2/3] overflow-hidden'>
                    <img className='rounded-xl' src={IMAGE_PATH.W_300 + data.poster_path} alt="" />
                </div>
                <div className='w-2/3 flex flex-col gap-3 pl-10'>
                    <div className='flex flex-col gap-2'>
                        <p className='text-4xl font-bold'>{data.name}</p>
                        <p className='flex items-center gap-3'>
                            <span className='text-lg font-medium'>{data.air_date}</span>
                            <StopIcon height={15} color='#EF4444' />
                            <span className='text-lg font-medium'>{data.episode_count} Episodes</span>
                        </p>
                    </div>
                    <p>{data.overview}</p>
                    <div className='flex items-center gap-3'>
                        <Link className="w-fit flex items-center gap-3 hover:gap-5 border-2 border-red-500 py-1 px-3 hover:bg-red-500 font-medium transition-all rounded-lg" to={`${isDirect ? 'season/' + data.season_number : data.season_number}`} >
                            Details
                            <ArrowRightIcon height={20} />
                        </Link>
                        {hasMoreThanOne && <Link className="w-fit flex items-center gap-3 hover:gap-5 border-2 border-red-500 py-1 px-3 hover:bg-red-500 font-medium transition-all rounded-lg" to={`season`} >
                            View All Seasons
                            <ArrowRightIcon height={20} />
                        </Link>}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default SeasonCard