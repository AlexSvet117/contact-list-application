import React from 'react'
import './ContactCard.css'
import GlassCard from '../glassCard/GlassCard'

function ContactCard({name, email, isCompleted}) {
  return (
    <div className='w-100 d-flex justify-content-center'>
        <GlassCard type="glass-contact-card">
            <div className='p-4'>

            {name}
            {email}
            {isCompleted}
            </div>
        </GlassCard>
      
    </div>
  )
}

export default ContactCard
