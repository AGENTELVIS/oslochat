import React from 'react'
import { LuChevronDown } from 'react-icons/lu'

const TargetsSection = () => {
    return (
        <div className='h-screen '> 
            <div className='flex flex-col mt-8 text-xl ml-9'>
                <p>Let's define your <span className='text-amber-400'>targets</span></p>
                <p className='text-xs text-gray-500 mt-2'>Focus on the most relevant fields to shape your ICP — all fields are optional</p>
            </div>
            <div className='flex flex-col mt-7 text-2xl ml-8'>
                    
                <p className='text-lg font-thin'>Company Profile</p>
                <div className='border border-gray-300 rounded-md items-center p-5 mt-3'>
                    <p className='text-xs'>Company headcount</p>
                    <div className='flex border border-gray-300 rounded-md justify-between self-center items-center h-8 mt-4'>
                        <p className='text-xs ml-2 text-gray-400'>1-10...</p>
                        <LuChevronDown className='text-gray-600 h-4 w-4 mr-2' />
                    </div>
                    <p className='text-xs mt-7'>Company HQ Locations</p>
                    <div className='flex border border-gray-300 rounded-md justify-between self-center items-center h-8 mt-4'>
                        <p className='text-xs ml-2 text-gray-400'>India...</p>
                        <LuChevronDown className='text-gray-600 h-4 w-4 mr-2' />
                    </div>
                    <p className='text-xs mt-7'>Revenue range</p>
                    <div className='flex border border-gray-300 rounded-md justify-between self-center items-center h-8 mt-4'>
                        <p className='text-xs ml-2 text-gray-400'>50L -1Cr...</p>
                        <LuChevronDown className='text-gray-600 h-4 w-4 mr-2' />
                    </div>
                </div>
                <div
            className="absolute right-3 top-0 h-full w-14 flex items-center pointer-events-none"
            aria-hidden
          >
            <div className="w-1/5 h-6/14 mt-16 mb-5 mx-auto rounded-full bg-gray-300/40 flex items-start justify-start">
              <div
                className="rounded-full shadow-md bg-gray-500 w-[24px] h-1/4"
              />
            </div>
          </div>
                <div>
                    <p className='text-lg font-thin mt-7'>Prospect Profile</p>
                    <div className='border border-gray-300 rounded-md items-center p-5 mt-3'>
                        <p className='text-xs'>Department</p>
                        <div className='flex border border-gray-300 rounded-md justify-between self-center items-center h-8 mt-4'>
                            <p className='text-xs ml-2 text-gray-400'>Search Department...</p>
                            <LuChevronDown className='text-gray-600 h-4 w-4 mr-2' />
                        </div>
                        <p className='text-xs mt-7'>Company HQ Locations</p>
                        <div className='flex border border-gray-300 rounded-md justify-between self-center items-center h-8 mt-4'>
                            <p className='text-xs ml-2 text-gray-400'>India...</p>
                            <LuChevronDown className='text-gray-600 h-4 w-4 mr-2' />
                        </div>
                        <p className='text-xs mt-7'>Revenue range</p>
                        <div className='flex border border-gray-300 rounded-md justify-between self-center items-center h-8 mt-4'>
                            <p className='text-xs ml-2 text-gray-400'>50L -1Cr...</p>
                            <LuChevronDown className='text-gray-600 h-4 w-4 mr-2' />
                        </div>
                    </div>
                </div>
            </div>
            <div className=''>
                hello
            </div>
        </div>
    )
}

export default TargetsSection