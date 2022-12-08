import React from 'react'
import "./section6.scss"

const section6 = () => {
  return (
    <div className='section6 row'>
        <div className="col-lg-10 col-xl-6 section6__left">
            <div>
                <img src="../../assets/images/puple.svg" alt="" />
            </div>
            <div>
                <h2>500+ talabalarimiz</h2>
                <h6>PDP akademiyasi o’z faoliyati davomida 500 dan ortiq dasturlash sohasi vakillarini tayyorlagan.</h6>
            </div>
            <div>
                <a href="#" className='alink'>Batafsil</a><span>{">"}</span>
            </div>
        </div>
        <div className="col-lg-10 col-xl-6 section6__right">
            <img src="../../assets/images/section6.png" alt="" />
        </div>
      
    </div>
  )
}

export default section6
