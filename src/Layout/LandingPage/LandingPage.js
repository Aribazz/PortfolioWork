import React from "react";
import { FaHandsClapping } from "react-icons/fa6";
import "./_LandingPage.scss";
import Typed from "typed.js";
import { useEffect, useRef } from "react";
import Footer from "../../Style/component/Footer/Footer";
import Slider from "../../Style/component/Slide/Slider";
function LandingPage (){
    //Create Ref Element
    const par = useRef(null);
    //create useEffect Element

    useEffect (()=>{
        const typed = new Typed(par.current,{
            strings : ["I'M Ajayi Ariyo Sunday."],
            startDelay: 50,
            typeSpeed: 140,
            backDelay:50,
            backSpeed:140,
            loopCount: 10,
            smartBackspace:true,
            showCursor:false,
            loop:true,
        })
    })
        return(
        <>
        <div className="container">
            <div className="container__Body">
                <div className="container__heading">
                    <h2>Hey!<span ref={par}></span>  <FaHandsClapping style={{color: "yellow"}} /></h2>
                </div>
                <div className="container__paragraph">
                   <p>Front-End Engineer</p>
                </div>
                <div className="container__paragraph">
                    <p>To leverage my expertise as a qualified front-end developer with a
focus on creating user-friendly and interactive websites. With my
strong creative and analytical abilities, I aim to contribute to a dynamic
team that priorities attention to detail in delivering high-quality
projects. I am committed to continuous learning and staying up-to-date
with the latest technologies to enhance my skills and provide the best
possible solutions for clients.</p>
                </div>
            </div>


        </div>
            <div className="card">
            <Slider />
                
            </div>
         <Footer />
        </>
    )

}
export default LandingPage;