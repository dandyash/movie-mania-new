import React from "react";
import CarouselBanner from "../../components/Hero Carousel";
import useHomeController from "./HomeController";
import { FullScreenLoadingSpinner } from "../../components/LoadingSpinner";
import HorizontalScrollingList from "../../components/HorizontalScrollingList";
import { DISCOVER_FREE_ITEMS, TRENDING_TAB_ITEMS } from "../../utils";

const Home = () => {
  const {
    HeroBannerList,
    TrendingList,
    DiscoverFreeMediaList,
    isDataLoading,
    trendingPeriod,
    setTrendingPeriod,
    discoverMediaType,
    setdiscoverMediaType,
    PopularMoviesList,
    PoppularTvShowsList
  } = useHomeController();

  if (isDataLoading) {
    return <FullScreenLoadingSpinner />;
  }

  return (
    <>
      <CarouselBanner data={HeroBannerList} />
      <section className="px-5 pb-5">
        <HorizontalScrollingList data={TrendingList} isTabbable={true} tabData={TRENDING_TAB_ITEMS} activeTab={trendingPeriod} setActiveTab={setTrendingPeriod} title={"Trending"} slidesPerView={6} />
        <HorizontalScrollingList data={DiscoverFreeMediaList} isTabbable={true} tabData={DISCOVER_FREE_ITEMS} activeTab={discoverMediaType} setActiveTab={setdiscoverMediaType} title={"Free To Watch"} slidesPerView={6} />
        <HorizontalScrollingList data={PopularMoviesList} title={"Popular Movies"} slidesPerView={6} />
        <HorizontalScrollingList data={PoppularTvShowsList} title={"Popular TV Shows"} slidesPerView={6} />
      </section>
    </>
  );
};

export default Home;
