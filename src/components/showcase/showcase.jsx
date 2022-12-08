import React from 'react'
import "./showcase.scss"
const showcase = () => {
    return (
        <div className={`showcase row justify-content-center align-item-center mt-5 py-5`}>
            <div className="showcase__text col-lg-10 col-xl-6">
                <h1> DASTURLASHNI <br />
                    QULAY<span > MUHITDA</span>
                    <br />
                    O‘RGANING
                </h1>
            </div>
            <div className="showcase__img col-lg-10 col-xl-4 d-flex justify-content-center">
                <img src="../../assets/images/bg-showcase.svg" alt="" />
            </div>
            <div className="showcase__video col-lg-10 col-xl-2 d-flex justify-content-center">
                <iframe  src="https://www.youtube.com/embed/7TnKF664r94" title="YouTube video player" frameborder="0" 
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"  allowfullscreen></iframe>
               
            </div>
        </div>
    )
}

export default showcase
