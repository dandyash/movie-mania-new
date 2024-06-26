import React from 'react'
import useTvShowsController from './TvShowsController'
import { FullScreenLoadingSpinner } from '../../../components/LoadingSpinner';
import CarouselBanner from '../../../components/Hero Carousel/CarouselBanner';
import HorizontalScrollingList from '../../../components/HorizontalScrollingList/HorizontalScrollingList';
import { TRENDING_TAB_ITEMS } from '../../../utils';

const TvShows = () => {
    const {
        HeroBannerList,
        TrendingTvShowsList,
        TopRatedTvShowsList,
        AiringTodayTvShowsList,
        trendingPeriod,
        setTrendingPeriod,
        isDataLoading
    } = useTvShowsController();

    if (isDataLoading) {
        return <FullScreenLoadingSpinner />;
    }

    return (
        <>
            <CarouselBanner data={HeroBannerList} />
            <section className="px-5 pb-5">
                <HorizontalScrollingList data={TrendingTvShowsList} isTabbable={true} tabData={TRENDING_TAB_ITEMS} activeTab={trendingPeriod} setActiveTab={setTrendingPeriod} title={"Trending Tv Shows"} slidesPerView={6} />
                <HorizontalScrollingList data={TopRatedTvShowsList} title={"Top Rated Tv Shows"} slidesPerView={6} />
                <HorizontalScrollingList data={AiringTodayTvShowsList} title={"Airing Today Tv Shows"} slidesPerView={6} />
            </section>
        </>
    )
}

export default TvShows