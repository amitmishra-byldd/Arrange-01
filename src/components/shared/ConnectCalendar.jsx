import React from 'react'

export default function ConnectCalendar() {
  return (
    <div className='my-5 border border-[#E0E0E0] rounded-[4px] px-6 pt-3 pb-[22px] w-full'>
      <h3 className='text-[12px] font-[400] md:text-[14px] lg:text-[16px] md:font-[500] '>Connect Calendar</h3>

      <div className='flex flex-col items-center justify-center w-full gap-4 mt-2'>
        <h3 className='bg-[#E3E3E3] w-full flex justify-center font-[600] text-[12px] leading-[100%] py-3 rounded-[5px] cursor-pointer hover:bg-[#c3c1c1] '>+Google Calendar</h3>
        <h3 className='bg-[#E3E3E3] w-full flex justify-center font-[600] text-[12px] leading-[100%] py-3 rounded-[5px] cursor-pointer hover:bg-[#c3c1c1]'>+Outlook Calendar</h3>
      </div>

    </div> 
  )
}
