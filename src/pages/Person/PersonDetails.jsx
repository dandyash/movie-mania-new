import React from 'react'
import usePersonDetailsController from './PersonDetailsController'
import FullScreenLoadingSpinner from './../../components/LoadingSpinner/FullScreenLoadingSpinner';
import { IMAGE_PATH } from '../../utils';
import ImageCard from '../../components/ImageCard';

const PersonDetails = () => {
    const { PersonDetails, isDataLoading, isViewFullBiography, viewFullBioGraphy } = usePersonDetailsController();
    if (isDataLoading) {
        return <FullScreenLoadingSpinner />
    }
    return (
        <>
            {/* Main Section */}
            <section className='container mx-auto flex flex-col'>

                <div className='flex items-stretch justify-evenly gap-10 px-5 py-10'>
                    {/* Left Section */}
                    <div className='w-1/4 z-10 pt-10 flex flex-col gap-10'>
                        <div className='flex flex-col gap-5'>
                            {/* Poster Image Section */}
                            <img className='rounded-xl shadow-md shadow-black/80' src={IMAGE_PATH.ORIGINAL + PersonDetails?.profile_path} alt="" />
                        </div>
                        <div className='flex flex-col gap-5'>
                            <h2 className='text-3xl font-bold'>Also Known As</h2>
                            <div className='flex flex-col text-lg'>
                                {PersonDetails?.also_known_as.map(name => <p key={name}>{name}</p>)}
                            </div>
                        </div>
                    </div>

                    {/* Middle Section */}
                    <div className='flex flex-col gap-10 w-3/4 pt-10 z-10'>

                        {/* Name Section */}
                        <h1 className='font-bold text-6xl'>
                            {PersonDetails?.name}
                        </h1>

                        {/* Biography Section */}
                        <p className='text-justify'>
                            {isViewFullBiography ? PersonDetails?.biography : <>{PersonDetails?.biography.slice(0, 550) + "... "}<button className='text-red-500 font-bold' onClick={viewFullBioGraphy}>Read More</button></>}
                        </p>

                        {/* Details Section */}
                        <div className='flex flex-col gap-5'>
                            <h2 className='text-3xl font-bold'>Other Details</h2>
                            <table>
                                <tbody className='flex flex-col gap-2'>
                                    <tr className='flex items-start gap-1'>
                                        <td className='w-1/6'>
                                            <p className='text-lg font-thin'>Birth Date: </p>
                                        </td>
                                        <td className='w-5/6'>
                                            {PersonDetails?.birthday ? PersonDetails?.birthday : "-"}
                                        </td>
                                    </tr>
                                    <tr className='flex items-start gap-1'>
                                        <td className='w-1/6'>
                                            <p className='text-lg font-thin'>Death Date: </p>
                                        </td>
                                        <td className='w-5/6'>
                                            {PersonDetails?.deathday ? PersonDetails?.deathday : "-"}
                                        </td>
                                    </tr>
                                    <tr className='flex items-start gap-1'>
                                        <td className='w-1/6'>
                                            <p className='text-lg font-thin'>Known For: </p>
                                        </td>
                                        <td className='w-5/6'>
                                            {PersonDetails?.known_for_department ? PersonDetails?.known_for_department : "-"}
                                        </td>
                                    </tr>
                                    <tr className='flex items-start gap-1'>
                                        <td className='w-1/6'>
                                            <p className='text-lg font-thin'>Place Of Birth: </p>
                                        </td>
                                        <td className='w-5/6'>
                                            {PersonDetails?.place_of_birth ? PersonDetails?.place_of_birth : "-"}
                                        </td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>

                        {/* WorkedIn Section */}
                        <div className='flex flex-col gap-5'>
                            <h2 className='text-3xl font-bold'>Worked In</h2>
                            <div className='grid grid-cols-5 gap-5'>
                                {PersonDetails?.combined_credits?.cast?.sort((a, b) => new Date(b.release_date || b.first_air_date).getFullYear() - new Date(a.release_date || a.first_air_date).getFullYear()).map(media => <ImageCard key={media.id} data={media} />)}
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default PersonDetails