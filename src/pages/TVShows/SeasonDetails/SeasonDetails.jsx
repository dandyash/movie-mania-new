import React from 'react'
import useSeasonDetailsController from './SeasonDetailsController'
import FullScreenLoadingSpinner from './../../../components/LoadingSpinner/FullScreenLoadingSpinner';
import { IMAGE_PATH } from '../../../utils';
import { StopIcon } from '@heroicons/react/24/solid';
import EpisodeCard from '../../../components/EpisodeCard';

const SeasonDetails = () => {

    const { seasonDetails, isDataLoading } = useSeasonDetailsController();

    if (isDataLoading) {
        return <FullScreenLoadingSpinner />
    }

    return (
        <>
            {/* Parallax Image Container */}
            <div className='bg-fixed h-[80vh] bg-no-repeat bg-top bg-cover' style={{ backgroundImage: `url(${IMAGE_PATH.ORIGINAL + seasonDetails?.episodes[0]?.still_path})` }}></div>

            {/* Main Section */}
            <section className='container mx-auto flex flex-col'>

                <div className='flex items-stretch justify-evenly gap-20 px-5 pb-10 -mt-32 relative before:absolute before:inset-x-0 before:-top-8 before:h-40 before:bg-gradient-to-t before:dark:from-black before:from-white before:to-transparent before:from-25%'>
                    {/* Left Section */}
                    <div className='w-1/4 z-10 pt-10'>
                        <div className='sticky top-20 px-8 flex flex-col gap-5'>
                            {/* Poster Image Section */}
                            <img className='rounded-xl shadow-md shadow-black/80' src={IMAGE_PATH.ORIGINAL + seasonDetails?.poster_path} alt="" />
                        </div>
                    </div>

                    {/* Middle Section */}
                    <div className='flex flex-col gap-10 w-3/4 pt-10 z-10'>

                        <div className='flex flex-col gap-5'>

                            {/* Title Section */}
                            <h1 className='font-bold text-6xl'>
                                {seasonDetails?.name}
                            </h1>
                            <div className='flex flex-col gap-3'>
                                <div className='flex items-center gap-2'>
                                    <p>{seasonDetails?.air_date}</p>
                                    <StopIcon height={15} color='#EF4444' />
                                    <p>{seasonDetails?.episodes?.length} Episodes</p>
                                </div>
                            </div>
                            <p className='text-justify'>{seasonDetails?.overview}</p>
                        </div>

                        {/* Seasons Card Section */}
                        <div className='flex flex-col gap-5'>
                            <div className='flex flex-col gap-5'>
                                {seasonDetails?.episodes?.map(episode => <EpisodeCard key={episode.id} data={episode} />)}
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default SeasonDetails