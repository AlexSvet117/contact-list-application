import React from 'react'
import '../signup/Signup.css';
import GlassCard from '../../components/glassCard/GlassCard';
import { Link, useNavigate } from 'react-router';
import { useState } from 'react';

function Login() {

    const navigate = useNavigate()
    const [email, setEmail] = useState('')


    const handleOnSubmit = async (e) => {
       e.preventDefault()
       // verify email is not empty
       if(!email.trim()) return;
       // make the fetch request
       const options = {headers: {'X-Secret-Token': 'qwerty'}}
       const getUserByEmailResponse = await fetch(`/api/users/email/${email}`, options)
       const responseData = await getUserByEmailResponse.json()
       console.log(responseData)
       navigate('/home')


    }

  return (
    <div className="text-light d-flex justify-content-center align-items-center mt-5">
      <GlassCard>
        <h2 className="text-center my-4">Login to your account</h2>
        <form onSubmit={handleOnSubmit}>
          <div className="mb-3">
            <input
              type="email"
              class="form-control p-4"
              id="email"
              placeholder="email..."
              onChange={(e)=> setEmail(e.target.value)}
              value={email}
            />
          </div>
          <h6 className="text-center">Don't have an account yet?</h6>
          <div className="text-center mb-5">
            <Link className="text-decoration-none fs-5 fw-bold" to="/signup">Signup</Link>
          </div>

          <div className="mb-3 form-check"></div>
          <div className="text-center">
          <button type="submit" class="btn btn-primary mb-4">
            Login
          </button>
          </div>
        </form>
      </GlassCard>
    </div>
  )
}

export default Login
