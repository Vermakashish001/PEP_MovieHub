import React from 'react'
import './Pagination.css'

export default function Pagination({currentPage,totalPages,onPageChange}) {
    const maxButtons=5;
    const calculateButtonRange =()=>{
        let start = 1;
        let end = start + maxButtons - 1;
        if(end > totalPages){
            end = totalPages;
        }
        return {start,end}
    }
   const {start,end}= calculateButtonRange();
   const pageNumbers = Array.from({length:end-start+1},(_,index)=>start+index);
  return (
    <div className='pagination'>
        <button className='page-button nav-prev' onClick={()=>onPageChange(currentPage-1)} disabled={currentPage === 1}>Previous</button>
        {pageNumbers.map((page)=>(
            <button className={`page-button ${currentPage === page ? 'active' : ''}`} onClick={()=>onPageChange(page)}>{page}</button>
        ))}
        <button className='page-button nav-next' onClick={()=>onPageChange(currentPage+1)} disabled={currentPage === totalPages}>Next</button>
    </div>
  )
}
