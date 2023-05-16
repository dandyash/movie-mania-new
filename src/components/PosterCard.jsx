import React from 'react'
import { Link } from 'react-router-dom'
import { ArrowRightIcon } from '@heroicons/react/24/solid';
import { IMAGE_PATH } from '../utils';

const PosterCard = ({ data }) => {
    return (
        <div className='relative rounded-xl overflow-hidden'>
            {/* <img src={IMAGE_PATH.ORIGINAL + backdrop_path} alt="" /> */}
            <div className='flex items-center'>
                <div className='w-[200px] aspect-[2/3] overflow-hidden'>
                    <img className='rounded-xl' src={IMAGE_PATH.ORIGINAL + data.poster_path} alt="" />
                </div>
                <div className='w-2/3 flex flex-col gap-3 pl-10'>
                    <div className='flex flex-col gap-2'>
                        <p className='text-4xl font-bold'>{data.title}</p>
                        <p className='flex items-center gap-3'>
                            <span className='text-lg font-medium'>{data.release_date}</span>
                        </p>
                    </div>
                    <p>{data.overview}</p>
                    <div className='flex items-center gap-3'>
                        <Link to={`/movie/${data.id}`} className="w-fit flex items-center gap-3 hover:gap-5 border-2 border-red-500 py-1 px-3 hover:bg-red-500 font-medium transition-all rounded-lg" >
                            Details
                            <ArrowRightIcon height={20} />
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default PosterCard