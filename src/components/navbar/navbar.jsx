import React from 'react'
import navstyles from "./navbar.module.scss"
import "./menu.scss"
const navbar = () => {
  return (
    <div className={`row ${navstyles.navbar1} my-4 justify-content-evenly justify-content-lg-between align-items-center`}>
        <input type="checkbox" id='check'  className='dn'/>
        <div className="navbar1__logo col-6 col-lg-2">
            <img src="../assets/images/newPdpLogo.svg" alt=""/>

        </div>
        <label htmlFor="check" className="col-1 menu">
          <div></div>
          <div></div>
          <div></div>
        </label>
        <label htmlFor="check" className='close'>
            x
        </label>
        <div className="secmenu">
            <ul>
                <li><a href="#">Kurslarimiz</a></li>
                <li><a href="#">Qo'llanma</a></li>
                <li><a href="#">Unicorn</a></li>
                <li><a href="#">Kirish</a></li>
            </ul>
        </div>
        <div className="navbar1__menu col-2 col-lg-2 ">
            <span className='fw-bold'> Kurslarmiz</span>
        </div>
        <div className="navbar1__link col-3">
            <ul className='d-flex aligin-item-center gap-3'>
                <li><a href="#">Qo'llanma</a></li>
                <li><a href="#">Unicorn</a></li>
            </ul>
        </div>
        <div className="navbar1__login col-2">
            <span></span><span className='fw-bold'>Kirish</span>
        </div>
       
      
    </div>
  )
}

export default navbar
