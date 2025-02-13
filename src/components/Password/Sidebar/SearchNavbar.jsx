import React from 'react'
import  profileIcon from '../../../assets/searchBarIcon/Ellipse.png'
import bellIcon from '../../../assets/searchBarIcon/bellIcon.png'
import message from '../../../assets/searchBarIcon/messageIcon.png'
import hamburger from '../../../assets/searchBarIcon/hamburger.png'

const SearchNavbar = ({viewNav}) => {
  return (
        <div className='lg:w-[83%] py-2 shadow-lg lg:fixed top-0 bg-white flex items-center'>
            <div className='pl-4 lg:hidden md:hidden'><button className=' bg-[#1C2059] rounded-sm w-8' onClick={()=>viewNav()}><img src={hamburger} alt="" className='w-8 invert'/></button></div>
            <div className='flex justify-between md:w-[100%] w-[100%] z-50 px-3 '>
                <input type="text" placeholder='Search' className='border border-gray-200 rounded px-3 py-1 w-[35%]'/>
                <div className='flex items-center'>
                    <span><img src={message} alt="" /></span>
                    <span><img src={bellIcon} alt="" className='px-3'/></span>
                    <span><img src={profileIcon} alt="" className='w-8'/></span>
                </div>
            </div>
        </div>
)
}

export default SearchNavbar