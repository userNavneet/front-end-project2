import React from 'react'
import f1logo from '../assets/f1logo.png'
const NewMarkq = ({setlatestHover,setf1Hover}) => {
  return (
    <>
      <div className="main-box mt-[-6.7%]" onMouseEnter={()=>setlatestHover(false)} onMouseOver={()=>setf1Hover(false)}>
      <div  className=' flex items-center justify-center p-4 gap-4'>
        <img src={f1logo} alt="" />
        <span className='text-2xl text-white'>Our Partners</span>
        <span className='text-red-600  text-2xl'>{">"}</span>
     </div>
        <div className="header">
        Formula 1  car racing is the pinnacle of motorsport, featuring the fastest, most technologically 

        </div>
        <div className="marques">
          
            <span className='texting '>
              <span className="Marque1 ">Salesforce </span>
              <span className="Marque1 ">Rolex </span>
              <span className="Marque1">Puma </span>
              <span className="Marque1 ">Crypto.com </span>
              <span className="Marque1 ">American Express </span>
              <span className="Marque2 ">Salesforce </span>
              <span className="Marque2 ">Puma </span>
              <span className="Marque2 ">Rolex </span>
              <span className="Marque2 ">American Express </span>
              <span className="Marque2 ">Crypto.com </span>
              <span className="Marque3 ">Salesforce </span>
              <span className="Marque3 ">Puma </span>
              <span className="Marque3 ">Rolex </span>
              <span className="Marque3 ">Crypto.com </span>
              <span className="Marque3">American Express </span>
              <span className="Marque4">Salesforce </span>
              <span className="Marque4">Puma </span>
              <span className="Marque4">Rolex </span>
              <span className="Marque4">Crypto.com </span>
              <span className="Marque4">American Express </span>
              
            </span>
        </div>

      </div>
    </>
  )
}

export default NewMarkq