import React from 'react'
import { LuSparkle } from 'react-icons/lu';
import { IoMdRefresh } from 'react-icons/io';
import { TbCopy } from 'react-icons/tb';
import { HiSearch } from 'react-icons/hi';
import { BiSolidMicrophone } from 'react-icons/bi';

const ChatSection = () => {
  return (
    <div className='h-screen'>
        <div className='flex mt-8 items-center justify-center'>
            <LuSparkle className='fill-amber-400 h-6 w-6 text-amber-400'/>
            <p className='text-3xl self-center ml-2 '>Oslo chat</p>
        </div>
        <div className='text-gray-600'>
            <p className='mt-20 ml-13 text-sm '>Hello I'm Oslo. Tell me what's on your mind</p>
            <div className='ml-13 mt-2 flex'>
                <TbCopy className='h-4 w-4'/>
                <IoMdRefresh className='ml-1 h-4 w-4'/>
            </div>
        </div>
        <div className=''>
                <p className='mt-7 mr-13 bg-gray-100 rounded-lg p-3 text-sm  w-fit ml-auto'>Create leads on Tech targets</p>
        </div>
        <div className='text-gray-600'>
            <p className='mt-7 ml-13 text-sm mr-30'>ICP updated to target Tech Companies. If you want to specify roles,
            locations, or other criteria for decision-makers, please let me know</p>
            <div className='ml-13 mt-2 flex'>
                <TbCopy className='h-4 w-4'/>
                <IoMdRefresh className='ml-1 h-4 w-4'/>
            </div>
        </div>
        <div className='ml-11 w-4/9 h-11 bottom-20 flex border border-gray-300 rounded-md justify-between self-center items-center fixed shadow-xs hover:cursor-text'>
            <HiSearch className=' ml-3 text-gray-400 h-5 w-5'/>
            <BiSolidMicrophone className=' mr-3 text-amber-400 h-5 w-5'/>
        </div>
    </div>
  )
}

export default ChatSection