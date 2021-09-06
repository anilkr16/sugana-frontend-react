import React from 'react';

const Pagination = props => {
    const pages = [...Array(props.totalPages).keys()].map(num => num + 1);
    return (
        <div className='pagination'>
            <div className='pagenumbers'>
                {pages && pages.map((page, index) => {
                    return (
                        <a className={props.page === page ? 'number current': 'number'}
                            key={index}
                            onClick={() => props.onPageClick(page)}>
                            {page}
                        </a>
                    )
                })}    
            </div>
        </div>
    )
}

export default Pagination;