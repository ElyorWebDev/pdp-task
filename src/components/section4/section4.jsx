import React from 'react'
import "./section4.scss"
const section4 = (props) => {
  return (
    <div className='card4'>
        <div className='card4__top'>
            <div >
               <h2>{props.text}</h2>
            </div>
            
            <div className="arrow4">
                        <img src="../../assets/images/top-right.svg" alt="" />
            </div>
           

        </div>
        <div className="card4__bot">
            <div>
                <span>Kurslar soni</span>
                <h6>{props.kurs} ta</h6>
            </div>
            <div>
                <img src={props.company} alt="" />
            </div>

        </div>
      
    </div>
  )
}

export default section4
