import React from 'react'
import useSeasonDetailsController from './SeasonDetailsController'
import FullScreenLoadingSpinner from './../../../components/LoadingSpinner/FullScreenLoadingSpinner';
import { IMAGE_PATH } from '../../../utils';

const SeasonDetails = () => {

    const { seasonDetails, isDataLoading } = useSeasonDetailsController();

    if (isDataLoading) {
        return <FullScreenLoadingSpinner />
    }

    return (
        <img src={IMAGE_PATH.ORIGINAL + seasonDetails?.poster_path} alt="" />
    )
}

export default SeasonDetails