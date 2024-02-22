import Image from 'next/image';
import React from 'react'
import { FaGraduationCap, FaRegUser } from "react-icons/fa";
import { FaBook } from "react-icons/fa6";
const LibraryCard = () => {
  return (
    <div className='forshadowbox w-full pt-[4px] px-1 pb-1 flex rounded-md mb-2'>
      <div><Image src="/profileimage.png" alt="" width={55} height={55} /></div>
      <div className='pl-2'>
        <p className='flex text-[12px] font-bold'>Introdction to Programing</p>
        <div className='flex text-[9px] item-center justify-start gap-1'><span><FaGraduationCap /></span> <p>Grad 10</p> </div>
        <div className='flex text-[9px] item-center justify-start gap-1'><span><FaBook /></span> <p>Computer science</p> </div>
        <div className='flex text-[9px] item-center justify-start gap-1'><span><FaRegUser/></span> <p>John week</p> </div>
      </div>
    </div>
  )
}

export default LibraryCard

