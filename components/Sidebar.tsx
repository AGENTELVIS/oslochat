import React from 'react'
import { GoHomeFill } from 'react-icons/go';
import { LuSparkle } from 'react-icons/lu';
import { MdOutlineRocketLaunch,MdOutlineEmail } from 'react-icons/md';
import { TbNotes } from 'react-icons/tb';
import { LuSettings,LuLogOut } from 'react-icons/lu';
import { HiMiniUsers,HiOutlineChartPie } from 'react-icons/hi2';


const Sidebar = () => {
  return (
    <aside className='flex felx-col w-28 shadow-xl align-middle justify-center'>
        <div className=''> 
            <div className='mt-10 ml-2'>
                <LuSparkle className='fill-amber-400 h-6 w-6 text-amber-400'/>
            </div>
            <div className='mt-12 ml-1'>
                <img src="profile.png" className='rounded-lg h-8 w-8'/>
            </div>
            <div className='mt-8'>
                <p className='bg-orange-50 rounded-full items-center h-11 w-11 flex justify-center'>
                    <GoHomeFill className='h-5 w-5 text-amber-400 self-center flex'/>
                </p>
                <div className='     flex-col ml-2'>
                    <MdOutlineRocketLaunch className='h-6 w-6 text-gray-500  mt-5 '/>
                    <TbNotes className='h-5 w-5 text-gray-500 mt-5 '/>
                    <HiMiniUsers className='h-5 w-5 text-gray-500 mt-5 '/>
                    <HiOutlineChartPie className='h-5 w-5 text-gray-500 mt-5 '/>
                    <MdOutlineEmail className='h-5 w-5 text-gray-500 mt-5 '/>
                </div>
            </div>
            <div className='ml-2 self-center mt-33 justify-center'>
                <LuSettings className='h-5 w-5 text-gray-500 mt-5'/>
                <LuLogOut className='h-5 w-5 text-gray-500 mt-5 '/>
            </div>
        </div>
    </aside>
  )
}

export default Sidebar