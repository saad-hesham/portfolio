import { Component } from "react";
import developer from "../../images/giphy.gif"
import clown from "../../images/clown.jpg"
import hand from "../../images/hand.png"



class Home extends Component{
    componentDidMount(){
        document.addEventListener("click",function(){
         document.querySelector("#cursor").classList.add("clicked");
         setTimeout(function(){
            document.querySelector("#cursor").classList.remove("clicked");

         },500)
        })
 
  
    }

    render(){
        /*this function will open the nav bar */
      
        return(
           <div className="home container">
            
            <div className="row">
                <div className="col-md-6" >
                    <div className="content-container">
                      <h1 className="main-head"><span data-aos="fade-right" data-aos-duration="1000">HELLO </span> <span data-aos="fade-left" data-aos-duration="1000" > <img src={hand} alt="hand waving" width="34" height="34" className="img-hand"/></span><br/>
                      <span data-aos="fade-up" data-aos-duration="1000" data-aos-delay="500">I AM SAAD HISHAM</span></h1>
                      <p data-aos="fade-up" data-aos-duration="1000" data-aos-delay="700">frontend developer</p>
                      
                        <div className="buttons-container"  >
                        <div className="button-hire" data-aos="fade-right" data-aos-delay="900" data-aos-duration="1000">
                            <span>Hire me</span>
                        </div>

                        <div className="button-cv" data-aos="fade-left" data-aos-delay="900" data-aos-duration="1000">
                            <span><a href={clown} download>Get cv</a></span>
                        </div>
                    </div>
                    </div>
                    
                   
                </div>
                <div className="col-md-6">
                    <div className="image-container" data-aos-duration="3000" data-aos="fade-left">
                    <img src={developer} alt="programmer enjoying his jop" width="700" height="700" className="img-fluid"/>
                    </div>
                </div>
            </div>
           </div>
        )
    }
}
export default Home