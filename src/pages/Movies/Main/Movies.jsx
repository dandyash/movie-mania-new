
import React from 'react'
import useMoviesController from './MoviesController';
import { FullScreenLoadingSpinner } from '../../../components/LoadingSpinner';
import CarouselBanner from '../../../components/Hero Carousel/CarouselBanner';
import HorizontalScrollingList from '../../../components/HorizontalScrollingList/HorizontalScrollingList';
import { TRENDING_TAB_ITEMS } from '../../../utils';

const Movies = () => {
    const {
        HeroBannerList,
        TrendingMovieList,
        TopRatedMoviesList,
        NowPlayingMovies,
        UpcomingMoviesList,
        isDataLoading,
        trendingPeriod,
        setTrendingPeriod
    } = useMoviesController();

    if (isDataLoading) {
        return <FullScreenLoadingSpinner />;
    }

    return (
        <>
            <CarouselBanner data={HeroBannerList?.data?.data?.results} />
            <section className="px-5 pb-5">
                <HorizontalScrollingList data={TrendingMovieList?.data?.data?.results} isTabbable={true} tabData={TRENDING_TAB_ITEMS} activeTab={trendingPeriod} setActiveTab={setTrendingPeriod} title={"Trending Movies"} slidesPerView={6} />
                <HorizontalScrollingList data={TopRatedMoviesList?.data?.data?.results} title={"Top Rated Movies"} slidesPerView={6} />
                <HorizontalScrollingList data={NowPlayingMovies?.data?.data?.results} title={"Now Playing Movies"} slidesPerView={6} />
                <HorizontalScrollingList data={UpcomingMoviesList?.data?.data?.results} title={"Upcoming Movies"} slidesPerView={6} />
            </section>
        </>

    )
}

export default Movies