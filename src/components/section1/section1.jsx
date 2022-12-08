import React from 'react'
import "./section1.scss"
const section1 = () => {
    return (
        <div className='section1 row justify-content-center'>
            <div className="col-lg-10 col-xl-6 section1__left">
                <div className="arrow1">
                    <div className="arrow">
                        <img src="../../assets/images/top-right.svg" alt="" />
                    </div>

                </div>
                <div className="icon-clock">
                    <img src="../../assets/images/usualEducation.svg" alt="" />
                </div>
                <div className="text">
                    <h3>Odatiy ta'lim</h3>
                    <h6>O’zingiz istagan tezlikda va vaqtda ta’lim oling. Muvaffaqiyatli marraga yetib borishingiz to’liqligicha o’zingizga bog’liq</h6>
                </div>

                <div className="hover__text">
                    Tig’iz ish va o’qish grafigi bo’yicha harakatlanadigan insonlar uchun odatiy kurslar ayni muddao. Chunki bunda siz o’z ish faoliyatingizga jiddiy ta’sir ko’rsatmagan holda ta’lim olishingiz mumkin. Odatiy kurslar bu sizga qulay belgilangan vaqtda haftaning ma’lum kunlarida 
                    3 marotaba 3 soatdan kurs so’nggiga qadar doimiy ta’limdir.
                </div>
                <div className="hover__img">
                    <img src="../../assets/images/usualExamp1.png" alt="" />
                </div>



            </div>

            <div className="col-lg-10 col-xl-6 section1__right">
                <div className="arrow1">
                    <div className="arrow">
                        <img src="../../assets/images/top-right.svg" alt="" />
                    </div>

                </div>
                <div className="icon-clock">
                    <img src="../../assets/images/usualEducation.svg" alt="" />
                </div>
                <div className="text">
                    <h3>Intensiv ta’lim</h3>
                    <h6>Bizning intensiv ta’lim dasturimiz bo’yicha ta’lim oling. Har kunlik 8 soatlik ta’lim bilan muvaffaqiyatli marraga tezroq erishasiz.</h6>
                </div>
                <div className="hover__text">
                    Tig’iz ish va o’qish grafigi bo’yicha harakatlanadigan insonlar uchun odatiy kurslar ayni muddao. Chunki bunda siz o’z ish faoliyatingizga jiddiy ta’sir ko’rsatmagan holda ta’lim olishingiz mumkin. Odatiy kurslar bu sizga qulay belgilangan vaqtda haftaning ma’lum kunlarida 
                    3 marotaba 3 soatdan kurs so’nggiga qadar doimiy ta’limdir.
                </div>
                <div className="hover__img">
                    <img src="../../assets/images/roc1.png" alt="" />
                </div>


            </div>

        </div>
    )
}

export default section1

