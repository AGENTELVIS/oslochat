import React from 'react'
import { GoHomeFill } from 'react-icons/go';
import { LuSparkle } from 'react-icons/lu';
import { MdOutlineRocketLaunch,MdOutlineEmail } from 'react-icons/md';
import { TbNotes } from 'react-icons/tb';
import { LuSettings,LuLogOut } from 'react-icons/lu';
import { HiMiniUsers,HiOutlineChartPie } from 'react-icons/hi2';
import Image from 'next/image'

const Sidebar = () => {
  return (
    <aside className='flex felx-col w-28 shadow-xl align-middle justify-center'>
        <div className=''> 
            <div className='mt-10 ml-2'>
                <LuSparkle className='fill-amber-400 h-6 w-6 text-amber-400'/>
            </div>
            <div className='mt-12 ml-1'>
                <Image alt="profile" src="/profile.png" className='rounded-lg h-8 w-8 hover:cursor-pointer' width={8} height={8} unoptimized/>
            </div>
            <div className='mt-8'>
                <p className='bg-orange-50 rounded-full items-center h-11 w-11 flex justify-center'>
                    <GoHomeFill className='h-5 w-5 text-amber-400 self-center flex hover:cursor-pointer'/>
                </p>
                <div className='flex-col ml-2 '>
                    <MdOutlineRocketLaunch className='h-6 w-6 text-gray-500  mt-5 hover:cursor-pointer'/>
                    <TbNotes className='h-5 w-5 text-gray-500 mt-5 hover:cursor-pointer'/>
                    <HiMiniUsers className='h-5 w-5 text-gray-500 mt-5 hover:cursor-pointer'/>
                    <HiOutlineChartPie className='h-5 w-5 text-gray-500 mt-5 hover:cursor-pointer'/>
                    <MdOutlineEmail className='h-5 w-5 text-gray-500 mt-5 hover:cursor-pointer'/>
                </div>
            </div>
            <div className='ml-2 self-center mt-33 justify-center'>
                <LuSettings className='h-5 w-5 text-gray-500 mt-5 hover:cursor-pointer'/>
                <LuLogOut className='h-5 w-5 text-gray-500 mt-5 hover:cursor-pointer'/>
            </div>
        </div>
    </aside>
  )
}

export default Sidebar