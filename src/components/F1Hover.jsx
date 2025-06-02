import React from 'react'

const F1Hover = () => {
  return (
    <div className=' bg-black w-[100%] ml-[-42%] fixed rounded-sm p-[1rem] mt-4'>
        <div className=' top-9 p-4 flex gap-4 justify-evenly border-red-600 border-b-4 border-r-4 test'>
            <p className='text-white'>Standling <span className='text-red-600'> {">"} </span></p>
             <p className='text-white'>F1 Awards <span className='text-red-600'>{">"}</span></p>
             <p className='text-white'>Achivers <span className='text-red-600'>{">"}</span></p>
             <p className='text-white'>Get Involved <span className='text-red-600'>{">"}</span></p>
             <p className='text-white'>Race Programs <span className='text-red-600'>{">"}</span></p>
        </div>
    </div>
  )
}

export default F1Hover