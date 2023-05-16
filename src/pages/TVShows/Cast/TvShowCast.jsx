import React from 'react'
import useTvShowCastController from './TvShowCastController'
import { IMAGE_PATH } from '../../../utils';
import CastFullCard from '../../../components/CastFullCard';
import FullScreenLoadingSpinner from '../../../components/LoadingSpinner/FullScreenLoadingSpinner';

const TvShowCast = () => {
    const { tvShowCastDetails, tvShowDetails, isDataLoading } = useTvShowCastController();

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
                    {/* Left Section */}
                    <div className='w-1/4 z-10 pt-10'>
                        <div className='sticky top-20 px-8 flex flex-col gap-5'>
                            {/* Poster Image Section */}
                            <img className='rounded-xl shadow-md shadow-black/80' src={IMAGE_PATH.ORIGINAL + tvShowDetails?.poster_path} alt="" />
                        </div>
                    </div>

                    {/* Middle Section */}
                    <div className='flex flex-col gap-10 w-3/4 pt-10 z-10'>
                        <h1 className='font-bold text-6xl'>
                            {tvShowDetails?.name}
                        </h1>

                        {/* Cast Section */}
                        <div className='flex flex-col gap-5'>
                            <h2 className='text-3xl font-bold'>Cast</h2>
                            <div className='grid grid-cols-5 gap-5'>
                                {tvShowCastDetails?.cast.map(person => <CastFullCard key={person.id} data={person} />)}
                            </div>
                        </div>

                        {/* Crew Section */}
                        {/* <div className='flex flex-col gap-5'>
                            <h2 className='text-3xl font-bold'>Crew</h2>
                            <div className='grid grid-cols-5 gap-5'>
                                {movieCastDetails?.crew.map(person => <CastFullCard key={person.id} data={person} />)}
                            </div>
                        </div> */}
                    </div>
                </div>
            </section>
        </>
    )
}

export default TvShowCast