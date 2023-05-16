import React from 'react'
import ReactPaginate from 'react-paginate';

const Pagination = ({ pageCount, onPageChange }) => {
    return (
        <ReactPaginate
            pageCount={pageCount}
            onPageChange={(e) => onPageChange(e.selected + 1)}
            className='pagination-container'
        />
    )
}

export default Pagination;