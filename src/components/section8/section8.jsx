import React from 'react'
import "./section8.scss"
import Sec8card from './sec8card'
const section8 = () => {
  return (
    <div className='section8'>
        <div className="section8__text">
            <h1>TA'LIMGA <br />
            TIZIMLI YONDASHUV</h1>
        </div>
        <div className="section8__card">
            <Sec8card/>
            <Sec8card/>
            <Sec8card/>
            <Sec8card/>
            <Sec8card/>
            <Sec8card/>
        </div>      
    </div>
  )
}

export default section8
