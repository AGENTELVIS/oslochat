import React from 'react'
import { LuPencilLine,LuChevronLeft } from 'react-icons/lu';


const ChatTopbar = () => {
  return (
    <div className='flex h-1/9 border-b border-gray-200 '>
        <div className='flex items-center '>
            <LuChevronLeft className='text-gray-300 h-8 w-8 border rounded-sm ml-5 p-1.5'/>
            <p className='flex items-center border border-gray-300 h-7 rounded-sm ml-3 p-3 pt-4 pb-4'>
                <span>
                    Untitled List
                </span>
                <LuPencilLine className='ml-2'/>
            </p>
        </div>
        <div className='flex items-center ml-30 mt-2'>
            <div className='flex flex-col items-center'>
                <div className=" h-[7px] w-30 bg-gradient-to-r from-amber-300  to-amber-500 rounded-lg"/>
                <span className='text-amber-400 text-xs font-semibold mt-1'>Who</span>
            </div>
            <div className='flex flex-col items-center ml-2'>
                <div className=" h-[7px] w-30 bg-gray-200 rounded-lg"/>
                <span className='text-xs font-semibold mt-1 text-gray-500'>What/Why</span>
            </div>
           <div className='flex flex-col items-center ml-2'>
                <div className=" h-[7px] w-30 bg-gray-200 rounded-lg"/>
                <span className='text-xs font-semibold mt-1 text-gray-500'>Where</span>
            </div>
            <div className='flex flex-col items-center ml-2'>
                <div className=" h-[7px] w-30 bg-gray-200 rounded-lg"/>
                <span className='text-xs font-semibold mt-1 text-gray-500'>When</span>
            </div>
        </div>
        <div className='flex items-center ml-25'>
            <div className='text-sm text-gray-600 font-mono'>
                Save
            </div>
            <div className='flex bg-gradient-to-r from-amber-300  to-amber-500 h-7 rounded-sm ml-4 p-2 pb-4 pt-4 items-center font-semibold text-white text-[13px]'>
                Make Campaign
            </div>
        </div>
    </div>
  )
}

export default ChatTopbar