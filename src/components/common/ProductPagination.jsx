import React from 'react'

export const ProductPagination = ({ totalPosts, postsPerPage, setCurrentPage, currentPage }) => {

    let pages = []

    for (let i = 1; i <= Math.ceil(totalPosts / postsPerPage); i++) {
        pages.push(i)
    }
    return (
        <div className='flex gap-3 justify-center items-center mt-10'>
            {/* Previous button */}
            <button className={`bg-transparent rounded-md border border-[#F3F3F3] text-[#667085] p-2.5 py-[5px] ${(currentPage === 1 ? "cursor-not-allowed bg-[#a6acbb46]" : "")}`} onClick={() => setCurrentPage(currentPage - 1)} disabled={currentPage === 1}>Previous</button>

            {/* pagination */}
            {pages.map((page, index) => {
                return <button key={index} onClick={() => setCurrentPage(page)} className={`w-9 h-9 border border-[#F4E8F3] rounded-md text-[#667085] ${page === currentPage ? "bg-[#a6acbb79]" : ""}`}>{page}</button>
            })}

            {/* next button */}
            <button className={`bg-transparent rounded-md border border-[#F3F3F3] text-[#667085] p-2.5 py-[5px] ${(currentPage === pages.length ? "cursor-not-allowed bg-[#a6acbb46]" : "")}`} onClick={() => setCurrentPage(currentPage + 1)} disabled={(currentPage === pages.length)}>Next</button>
        </div >
    )
}
