import React from 'react'
import useCollectionController from './CollectionController'
import { IMAGE_PATH } from '../../utils';
import FullScreenLoadingSpinner from './../../components/LoadingSpinner/FullScreenLoadingSpinner';
import PosterCard from '../../components/PosterCard';

const Collection = () => {
    const { collectionDetails, isDataLoading } = useCollectionController();

    if (isDataLoading) {
        return <FullScreenLoadingSpinner />
    }

    return (
        <>
            {/* Parallax Image Container */}
            <div className='bg-fixed h-[80vh] bg-no-repeat bg-top bg-cover' style={{ backgroundImage: `url(${IMAGE_PATH.ORIGINAL + collectionDetails?.backdrop_path})` }}></div>

            {/* Main Section */}
            <section className='container mx-auto flex flex-col'>

                <div className='flex items-stretch justify-evenly gap-20 px-5 pb-10 -mt-32 relative before:absolute before:inset-x-0 before:-top-8 before:h-40 before:bg-gradient-to-t before:dark:from-black before:from-white before:to-transparent before:from-25%'>
                    {/* Left Section */}
                    <div className='w-1/4 z-10 pt-10'>
                        <div className='sticky top-20 px-8 flex flex-col gap-5'>
                            {/* Poster Image Section */}
                            <img className='rounded-xl shadow-md shadow-black/80' src={IMAGE_PATH.ORIGINAL + collectionDetails?.poster_path} alt="" />
                        </div>
                    </div>

                    {/* Middle Section */}
                    <div className='flex flex-col gap-10 w-3/4 pt-10 z-10'>
                        {/* Title Section */}
                        <h1 className='font-bold text-6xl'>
                            {collectionDetails?.name}
                        </h1>

                        {/* Movies List Section */}
                        {collectionDetails?.parts?.map(movie => <PosterCard key={movie.id} data={movie} />)}
                    </div>
                </div >
            </section>
        </>
    )
}

export default Collection