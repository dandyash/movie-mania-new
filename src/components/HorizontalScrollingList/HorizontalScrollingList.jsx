import { Swiper, SwiperSlide } from 'swiper/react'
import ImageCard from './../ImageCard';
import HorizontalScrollingNavigationButtonsContainer from './HorizontalScrollingNavigationButtonsContainer';
import { useRef } from 'react';

const HorizontalScrollingList = ({ isTabbable = false, tabData, title, data, slidesPerView, activeTab, setActiveTab }) => {
    const swiperRef = useRef();
    return (
        <div>
            <div className='pt-8 pb-4 flex items-center justify-between gap-10'>
                <div className='flex items-center gap-10'>
                    <h1 className='text-4xl font-medium underline underline-offset-4 decoration-red-500'>{title}</h1>
                    {isTabbable &&
                        <div className='flex items-center text-lg border-2 border-red-500 rounded-lg overflow-hidden'>
                            {tabData.map((tab) =>
                                <button
                                    className={`${activeTab === tab.value && 'bg-red-500'} py-1 px-4 rounded-md transition-all duration-500 font-semibold`}
                                    onClick={() => { setActiveTab(tab.value) }}
                                    key={tab.value}>
                                    {tab.label}
                                </button>
                            )}
                        </div>}
                </div>
            </div>
            <div className='flex items-stretch gap-2'>
                <Swiper
                    ref={swiperRef}
                    className='group/slider relative'
                    slidesPerView={slidesPerView}
                    spaceBetween={20}
                >
                    {data?.map((item) => <SwiperSlide key={item.id}><ImageCard data={item} /></SwiperSlide>)}
                </Swiper>
                <HorizontalScrollingNavigationButtonsContainer swiperRef={swiperRef} />
            </div>
        </div>
    )
}

export default HorizontalScrollingList