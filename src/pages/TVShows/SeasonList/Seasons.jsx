import React from 'react'
import useSeasonsController from './SeasonsController'
import FullScreenLoadingSpinner from '../../../components/LoadingSpinner/FullScreenLoadingSpinner';
import SeasonCard from '../../../components/SeasonCard';
import { IMAGE_PATH } from '../../../utils';
import { StopIcon } from '@heroicons/react/24/solid';

const Seasons = () => {
    const { isDataLoading, tvShowDetails } = useSeasonsController();
    if (isDataLoading) {
        return <FullScreenLoadingSpinner />
    }
    return (
        <>
            {/* Parallax Image Container */}
            <div className='bg-fixed h-[80vh] bg-no-repeat bg-top bg-cover' style={{ backgroundImage: `url(${IMAGE_PATH.ORIGINAL + tvShowDetails?.backdrop_path})` }}></div>

            {/* Main Section */}
            <section className='container mx-auto flex flex-col'>

                <div className='flex items-stretch justify-evenly gap-20 px-5 pb-10 -mt-32 relative before:absolute before:inset-x-0 before:-top-8 before:h-40 before:bg-gradient-to-t before:dark:from-black before:from-white before:to-transparent before:from-25%'>
                    {/* Middle Section */}
                    <div className='flex flex-col gap-10 w-3/4 pt-10 z-10'>

                        <div className='flex flex-col gap-5'>

                            {/* Title Section */}
                            <h1 className='font-bold text-6xl'>
                                {tvShowDetails?.name}
                            </h1>
                            <div className='flex flex-col gap-3'>
                                <p className='flex items-center gap-2 font-light'>Original Title:<span className='font-medium text-xl'>{tvShowDetails?.original_name}</span></p>
                                <div className='flex items-center gap-2'>
                                    <p>{tvShowDetails?.number_of_seasons} Seasons</p>
                                    <StopIcon height={15} color='#EF4444' />
                                    <p>{tvShowDetails?.number_of_episodes} Episodes</p>
                                    <StopIcon height={15} color='#EF4444' />
                                    {tvShowDetails?.episode_run_time[0] && <p>{tvShowDetails?.episode_run_time[0]} Mins</p>}
                                </div>
                            </div>
                            <p className='text-justify'>{tvShowDetails?.overview}</p>
                        </div>

                        {/* Seasons Card Section */}
                        <div className='flex flex-col gap-5'>
                            <div className='flex flex-col gap-5'>
                                {tvShowDetails.seasons.map(season => <SeasonCard data={season} key={season.id} />)}
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Seasons