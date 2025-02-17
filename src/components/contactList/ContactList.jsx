import React from 'react'
import ContactCard from '../contactCard/ContactCard'

function ContactList() {
  return (
    <div className='d-flex justify-content-center'>
      <ContactCard name="John Doe" email="email@mail.com" isCompleted={false}/>
    </div>
  )
}

export default ContactList
