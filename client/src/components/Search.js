import React from 'react'

function Search() {

  const SearchBar = () => {
    return <div>
      <div className='flex justify-center'>
        <div className='mt-4 w-11/12 h-9 flex justify-center relative'>
          <input className='border-gray-800 rounded-full w-full  h-9 px-3 pb-1 text-base border-2 pr-9' type="text"/>
          <div className='absolute top-1 right-3'>
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
            <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z" />
            </svg>
          </div>
        </div>
      </div>
    </div>
  }

  return (
    <div>
      <SearchBar />
    </div>
  )
}

export default Search