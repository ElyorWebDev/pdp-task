import React from 'react'
import "./section5.scss"
const section5 = () => {
  return (
    <div className='section5 row align-item-center'>
        <div className="col-lg-10 col-xl-6 section5__left">
            <h2>Imtiyozlar</h2>
            <h6>
            Agarda sizning hozirgi moliyaviy vaziyatingiz bizda o‘qish imkonini bermasa afsuslanmang siz uchun maxsus imtiyozlarimiz mavjud
            </h6>
            <div>
                <a href="#" className='alink'> Batafsil </a> <span>{">"}</span>
            </div>
            
        </div>
        <div className="col-lg-10 col-xl-6 section5__right">
            <img src="../../assets/images/student.png" alt="" />
        </div>

      
    </div>
  )
}

export default section5
