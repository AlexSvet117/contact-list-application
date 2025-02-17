import React from 'react'
import { FaRegCopyright } from "react-icons/fa6";
import { MdCopyright } from 'react-icons/md';

function Footer() {
  return (
    <div className='text-light text-center'>
      <MdCopyright/>{new Date().getFullYear()} Contact Manager
    </div>
  )
}

export default Footer
