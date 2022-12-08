import React from 'react'
import "./section10.scss"
const section10 = () => {
  return (
    <div className='section10 row'>
        <div className="section10__left col-lg-10 col-xl-6">
            <div>
                <img src="../../assets/images/partner.svg" alt="" />
            </div>
            <div>
                <h2>Bizning <br />
                 hamkorlarimiz sizni kutmoqda</h2>
                 <h6>Bizning akademiyamiz bir nechta o’nlab kompaniyalar bilan hamkorlik aloqalari(memorandum)ni yo’lga qo’ygan. Kurslarimizni tamomlagan talabalarimiz 
                    hamkor kompaniyalarda tavsiyalarimizga ko’ra ishga joylashish imkoniyatiga ega bo’ladilar.F</h6>
            </div>
            <div className='sec10__link'>
                <a href="#">Batafsil</a><span>{">"}</span>
            </div>
            
        </div>
        <div className="section10__right col-lg-10 col-xl-6">
            <div className='img10'>
                <img src="../../assets/images/ds.png" alt="" />
            </div>
            <div className='img10'>
                <img src="../../assets/images/su.png" alt="" />
            </div>
            <div className='img10'>
                <img src="../../assets/images/fb.png" alt="" />
            </div>
            <div className='img10'>
                <img src="../../assets/images/ecma.png" alt="" />
            </div>
            <div className='img10'>
                <img src="../../assets/images/uc.png" alt="" />
            </div>
            <div className='img10'>
                <img src="../../assets/images/mt.png" alt="" />
            </div>
            <div className='img10'>
                <img src="../../assets/images/it.png" alt="" />
            </div>
            <div className='img10'>
                <img src="../../assets/images/gs.png" alt="" />
            </div>
        </div>
        
    </div>
  )
}

export default section10
