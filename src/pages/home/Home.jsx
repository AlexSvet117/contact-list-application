import React from 'react'
import './Home.css'
import ContactList from '../../components/contactList/ContactList';

function Home() {
  return (
    <div className='d-flex flex-column justify-content-center'>
        <h3 className="fs-1 fw-bold text-cust-color text-center mt-4">Contacts</h3>
        <ContactList/>
    </div>
  );
}

export default Home;
