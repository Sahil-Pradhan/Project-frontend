import React from 'react'
import styles from '../styles/navbar.css'

const Navbar = () => {
  return (
    <div className="myNavbar">
      <div className="mylinks">
        <div className="myhome"><label className="mylabelhome">Home</label> </div>
        <div className="myabout"><label className="mylabelabout">About</label> </div>
        <div className="mysignup"><label className="mylabelsignup">SignUp</label> </div>
        <div className="mylogin"><label className="mylabellogin">Login</label> </div>
      </div>
    </div>
  )
}

export default Navbar
