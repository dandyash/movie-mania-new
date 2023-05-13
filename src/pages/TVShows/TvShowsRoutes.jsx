import React from 'react'
import { Route, Routes } from 'react-router-dom'
import TvShows from './Main/TvShows';
import Details from './Details/Details';
import Seasons from './SeasonList/Seasons';
import SeasonDetails from './SeasonDetails/SeasonDetails';

const TvShowsRoutes = () => {
    return (
        <Routes>
            <Route path='/' element={<TvShows />} />
            <Route path='/:tvId' element={<Details />} />
            <Route path='/:tvId/season' element={<Seasons />} />
            <Route path='/:tvId/season/:seasonNumber' element={<SeasonDetails />} />
        </Routes>
    )
}

export default TvShowsRoutes