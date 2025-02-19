import React from 'react'
import ContactList from '../../components/contactList/ContactList'
import './favorites.css'

function Favorites() {
  return (
    <div className='d-flex flex-column justify-content-center w-100 p-1'>
        <h3 className='fs-1 fw-bold front text-custom-color text-center mt-4 text-white'>
            Favorites
        </h3>
        <ContactList/>
      
    </div>
  )
}

export default Favorites
