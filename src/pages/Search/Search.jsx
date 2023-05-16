import React from 'react'
import useSearchController from './SearchController';
import FullScreenLoadingSpinner from './../../components/LoadingSpinner/FullScreenLoadingSpinner';
import Pagination from '../../components/Pagination';
import SearchCard from '../../components/SearchCard';

const Search = () => {
    const { SearchResults, isDataLoading, setPageNumber } = useSearchController();

    if (isDataLoading) {
        return <FullScreenLoadingSpinner />
    }

    return (
        <section className='flex flex-col gap-10 pt-10 px-5'>
            <h1>Search Results</h1>

            <div className='grid grid-cols-6 gap-5'>
                {SearchResults?.results.map(media => <SearchCard key={media.id} data={media} />)}
            </div>

            <Pagination pageCount={SearchResults?.total_pages} onPageChange={setPageNumber} />
        </section>
    )
}

export default Search