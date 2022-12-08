import React from 'react'
import "./section9.scss"
import Sec9card from '../section9/sec9card'
import Data9 from "./data9.json"
const section9 = () => {
  return (
    <div className='section9'>
        <div className="section9__text">
            <h1>Mentorlarimiz <br />
             Jamoasi</h1>
        </div>
        <div className="section9__card">
           {
              Data9.map((item ,index)=>{
                return <Sec9card img={item.img} name={item.name} state={item.state} comp={item.comp}/>
              })
           }
        </div>      
    </div>
  )
}

export default section9