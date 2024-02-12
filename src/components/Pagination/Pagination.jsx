import React from 'react';
import './Pagination.css';

export default function Pagination({ currentPage, totalPages, onPageChange }) {
    const maxButtons = 10;

    const calculateButtonRange = () => {
        const halfMaxButtons = Math.floor(maxButtons / 2);
        let start = currentPage - halfMaxButtons;
        let end = currentPage + halfMaxButtons;

        // Adjust start and end if they are out of bounds
        if (start < 1) {
            start = 1;
            end = Math.min(totalPages, start + maxButtons - 1);
        } else if (end > totalPages) {
            end = totalPages;
            start = Math.max(1, end - maxButtons + 1);
        }

        return { start, end };
    };

    const { start, end } = calculateButtonRange();
    const pageNumbers = Array.from({ length: end - start + 1 }, (_, index) => start + index);

    return (
        <div className='pagination'>
            <button onClick={() => onPageChange(currentPage - 1)} disabled={currentPage === 1}>
                Previous
            </button>
            {pageNumbers.map((page) => (
                <button key={page} onClick={() => onPageChange(page)} disabled={currentPage === page}>
                    {page}
                </button>
            ))}
            <button onClick={() => onPageChange(currentPage + 1)} disabled={currentPage === totalPages}>
                Next
            </button>
        </div>
    );
}
