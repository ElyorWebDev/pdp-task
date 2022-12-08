import React from 'react'

const sec9card = (props) => {
  return (
    <div className='sec9card'>
        <div className="sec9card__img">
            <img src={props.img} alt="" className='img-fluid' />
        </div>
        <div className="sec9card__title">
            <h4>{props.name}</h4>
            <h6>{props.state}</h6>
        </div>
        <div className="sec9card__company">
            <img src={props.comp} alt="" />
        </div>

      
    </div>
  )
}

export default sec9card
