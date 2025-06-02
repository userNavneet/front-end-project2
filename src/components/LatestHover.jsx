import React from 'react'

const Test = () => {
  return (
    <div className=' bg-black  w-[100%]  rounded-sm  ml-[-21.5%]   fixed  p-[1rem] mt-4'>
        <div className='left-0 top-9 p-4 flex gap-4 justify-evenly border-red-600 border-b-4 border-r-4 test'>
            <p className='text-white'>Latest <span className='text-red-600'> {">"} </span></p>
             <p className='text-white'>What is F1 <span className='text-red-600'>{">"}</span></p>
             <p className='text-white'>What is F1 Tv <span className='text-red-600'>{">"}</span></p>
             <p className='text-white'>Constructor Standling <span className='text-red-600'>{">"}</span></p>
             <p className='text-white'>Fantasy <span className='text-red-600'>{">"}</span></p>
        </div>
    </div>
  )
}

export default Test