import firstCirtficate from "../../images/1.png"
import secondCirficate from "../../images/2.png"
import thirdCirficate from "../../images/3.png"
import React, { useRef, useEffect, useState } from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { useDispatch, useSelector } from "react-redux";
import { actions } from "../../Redux/Store";
function Cursoal(){
const state = useSelector((state)=>state.openSlide);
const dispatch = useDispatch()

        const settings = {
            dots: true,
            infinite: true,
            speed: 500,
            slidesToShow: 1,
            slidesToScroll: 1,
            centerMode: true,
            centerPadding: '0px',
          };
          const [open, setOpen] = useState(false);
          let menuRef = useRef();
          useEffect(() => {
            let handler = (e)=>{
              console.log(state);
              if(!menuRef.current.contains(e.target)){
                dispatch(actions.toggleSlider())
                
              }      
            };
        
            document.addEventListener("mousedown", handler);
            
        
            return() =>{
              document.removeEventListener("mousedown", handler);
            }
        
          });
       
        return (
        
          <div className="slider-container" ref={menuRef}>
            <Slider {...settings}>
              <div>
                <img src={firstCirtficate} alt="first Cirtficate" className='img-fluid'/>
           
              </div>
              <div>
              <img src={secondCirficate} alt="second Cirtficate" className='img-fluid'/>
              </div>
              <div>
              <img src={thirdCirficate} alt="third Cirtficate 1" className='img-fluid'/>
              </div>
            </Slider>
          </div>
        );
    
}
export default Cursoal