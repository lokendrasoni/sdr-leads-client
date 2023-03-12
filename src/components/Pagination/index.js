import React, { useState } from 'react';

export default function Pagination({ totalItems, limit, onChange }) {
    const [page, setPage] = useState(1);

    return (
        <div className='block mt-3' aria-label="Page navigation example">
            <ul className="inline-flex -space-x-px">
                <li onClick={(e) => {
                    if (page !== 1) {
                        e.pageNumber = page - 1;
                        setPage(page - 1);
                        onChange && onChange(e);
                    }
                }}>
                    <a href="#!" className={`px-3 py-2 text-gray-500 bg-${ page === 1 ? "gray-200" : "white"} border border-gray-300 hover:bg-gray-100 hover:text-gray-700`}>{"<"} Previous</a>
                </li>
                <li onClick={(e) => {
                    if (totalItems / limit !== page) {
                        e.pageNumber = page + 1;
                        setPage(page + 1);
                        onChange && onChange(e);
                    }
                }}>
                    <a href="#!" className={`px-3 py-2 text-gray-500 bg-${ totalItems / limit === page ? "gray-200" : "white"} border border-gray-300 hover:bg-gray-100 hover:text-gray-700`}>Next {">"}</a>
                </li>
            </ul>
        </div>
    )
}
