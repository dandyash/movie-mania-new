import React from 'react'
import useDetailsController from './DetailsController'
import FullScreenLoadingSpinner from './../../../components/LoadingSpinner/FullScreenLoadingSpinner';
import { IMAGE_PATH } from '../../../utils';
import { CircleProgress } from 'react-gradient-progress';
import { HeartIcon as HeartSolidIcon, BookmarkIcon as BookmarkSolidIcon, PlayIcon, StopIcon } from '@heroicons/react/24/solid'
import { HeartIcon as HeartOutLinedIcon, BookmarkIcon as BookmarkOutlinedIcon, ArrowRightCircleIcon } from '@heroicons/react/24/outline';
import CastAvatarCard from '../../../components/CastAvatarCard';
import { Link } from 'react-router-dom';
import VideoModal from '../../../components/VideoModal';
import SeasonCard from '../../../components/SeasonCard';
import ReviewCard from '../../../components/ReviewCard';
import HorizontalScrollingList from './../../../components/HorizontalScrollingList/HorizontalScrollingList';

const Details = () => {
    const { tvShowDetails, isDataLoading, isVideoModalOpen, showModal, hideModal, videoKey, toggleFavorite, toggleWatchList } = useDetailsController();
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

                            {/* Ratings Section */}
                            <div className='flex items-center gap-2'>
                                <div className='font-black'>
                                    <CircleProgress percentage={Math.round(tvShowDetails?.vote_average * 10)} width={100} fontSize={'18px'} strokeWidth={8} primaryColor={['#EF4444', '#EF4444']} />
                                </div>
                                <div className='flex flex-col text-lg'>
                                    <p><span className='font-bold'>{tvShowDetails?.vote_count}</span>&nbsp; ratings</p>
                                    <p><span className='font-bold'>{tvShowDetails?.reviews.total_results}</span>&nbsp; ratings</p>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Middle Section */}
                    <div className='flex flex-col gap-10 w-2/4 pt-10 z-10'>
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
                            <div className='flex items-center gap-5'>
                                <button onClick={() => { showModal(tvShowDetails?.videos?.results.length > 0 ? tvShowDetails?.videos?.results[tvShowDetails?.videos?.results.findIndex(video => video.type.toLowerCase() === "trailer") !== -1 ? tvShowDetails?.videos?.results.findIndex(video => video.type.toLowerCase() === "trailer") : 0].key : "none") }} className='flex items-center text-white text-xl gap-2 hover:gap-4 transition-all bg-red-500 py-[10px] pl-6 pr-5 rounded-full'>Watch Trailer <PlayIcon height={30} /></button>
                                <button className='text-red-500'>{tvShowDetails?.account_states?.favorite ? <HeartSolidIcon height={40} title='Remove from favorites' onClick={() => { toggleFavorite(false) }} /> : <HeartOutLinedIcon height={40} title='Add to favorites' onClick={() => { toggleFavorite(true) }} />}</button>
                                <button className='text-red-500'>{tvShowDetails?.account_states?.watchlist ? <BookmarkSolidIcon height={35} title='Remove from watchlist' onClick={() => { toggleWatchList(false) }} /> : <BookmarkOutlinedIcon height={35} title='Add to watchlist' onClick={() => { toggleWatchList(true) }} />}</button>
                            </div>
                            <p className='text-justify'>{tvShowDetails?.overview}</p>
                        </div>
                        <div className='flex flex-col gap-5'>
                            <h2 className='text-3xl font-bold'>Details</h2>
                            <div className='flex flex-col gap-2'>
                                <table>
                                    <tbody className='flex flex-col gap-3'>
                                        <tr className='flex items-start gap-1'>
                                            <td className='w-1/6'>
                                                <p className='text-lg font-thin'>Genres: </p>
                                            </td>
                                            <td className='w-5/6'>
                                                {tvShowDetails?.genres.map(genre => <Link key={genre.id} to={`/genre/${genre.id}`} className='text-lg font-bold hover:text-red-500 transition'>{genre.name}&nbsp;&nbsp;</Link>)}
                                            </td>
                                        </tr>
                                        <tr className='flex items-start gap-1'>
                                            <td className='w-1/6'>
                                                <p className='text-lg font-thin'>Created By: </p>
                                            </td>
                                            <td className='w-5/6'>
                                                {tvShowDetails?.created_by.map(person => <Link key={person.id} to={`/person/${person.id}`} className='text-lg font-bold hover:text-red-500 transition'>{person.name}&nbsp;&nbsp;</Link>)}
                                            </td>
                                        </tr>
                                        <tr className='flex items-start gap-1'>
                                            <td className='w-1/6'>
                                                <p className='text-lg font-thin'>Status: </p>
                                            </td>
                                            <td className='w-5/6'>
                                                <p className='text-lg font-bold'>{tvShowDetails?.status}</p>
                                            </td>
                                        </tr>
                                        <tr className='flex items-start gap-1'>
                                            <td className='w-1/6'>
                                                <p className='text-lg font-thin'>Keywords: </p>
                                            </td>
                                            <td className='w-5/6'>
                                                {[...tvShowDetails?.keywords.results].splice(0, 15).map(keyword => <Link key={keyword.id} to={`/keyword/${keyword.id}`} className='text-lg capitalize inline-block font-bold hover:text-red-500 transition'>{keyword.name}&nbsp;&nbsp;</Link>)}
                                            </td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                        </div>
                        {/* Latest Season Section */}
                        <div className='flex flex-col gap-5'>
                            <h2 className='text-4xl font-bold'>Latest Season</h2>
                            <SeasonCard data={tvShowDetails?.seasons[tvShowDetails?.seasons?.length - 1]} hasMoreThanOne={tvShowDetails?.seasons?.length > 1} isDirect={true} />
                        </div>
                        {/* Reviews Section */}
                        <div className='flex flex-col gap-5'>
                            <h2 className='text-4xl font-bold'>Reviews</h2>
                            {tvShowDetails?.reviews?.results.length > 0
                                ?
                                <>
                                    <ReviewCard data={tvShowDetails?.reviews?.results[0]} />
                                    {tvShowDetails?.reviews?.results.length > 1 && <Link to={`reviews`} className='text-xl font-bold self-end hover:text-red-500 transition'>View All reviews</Link>}
                                </>
                                : <p>No Reviews Till Now</p>}
                        </div>
                    </div>

                    {/* Right Section */}
                    {/* Cast Section */}
                    <div className='w-1/4 z-10 flex flex-col pt-16 gap-10'>
                        <div className='flex flex-col gap-8'>
                            <h1 className='text-3xl font-bold'>Cast & Crew</h1>
                            {
                                tvShowDetails?.credits?.cast?.length > 0 && [...tvShowDetails?.credits?.cast].splice(0, 5).map(person => <CastAvatarCard key={person.id} data={person} />)
                            }
                            <Link to={'cast'} className='flex items-center text-xl gap-2 hover:gap-4 transition-all text-red-500 font-medium'>Show All <ArrowRightCircleIcon height={30} /></Link>
                        </div>
                        {/* Networks Section */}
                        <div className='flex flex-col gap-6'>
                            <h2 className='text-xl font-bold'>Networks:</h2>
                            {
                                tvShowDetails?.networks.map(network =>
                                    <Link key={network.id} to={`/network/${network.id}`} className='w-40'>
                                        <img src={IMAGE_PATH.ORIGINAL + network.logo_path} alt="" />
                                    </Link>)
                            }
                        </div>
                    </div>
                </div>

                <div className='px-5 pb-5'>
                    {/* Similar Suggestions Section */}
                    <HorizontalScrollingList isTabbable={false} title={'Similar Shows'} slidesPerView={6} data={tvShowDetails?.similar?.results} />
                </div>
            </section>
            <VideoModal isOpen={isVideoModalOpen} hideModal={hideModal} videoKey={videoKey} />
        </>
    )
}

export default Details