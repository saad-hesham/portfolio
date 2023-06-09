import { Component } from "react";
import logo from "../../images/logo.png"
import openNavbar from "./OpenNavbarFuntion"
import { Link } from "react-scroll";
class Navbar extends Component {
    constructor() {
        super();
    }
    componentDidMount() {
        window.onresize = function () {
            if (window.matchMedia("(min-width: 992px)").matches) {
                document.querySelector(".nav-container ul").style.display = "flex"
            }
            else {
                document.querySelector(".nav-container ul").style.display = "none"
                document.querySelector(".open-button").classList.add("closed")
                document.querySelector(".open-button").classList.remove("opened")


            }
        }
        window.onscroll = function (e) {
            let navbar = document.getElementById("navbar");
            if (window.pageYOffset >= "70") {
                navbar.classList.add("fixed")
            }
            else {
                navbar.classList.remove("fixed")

            }

        }


    }
    render() {
        /*this function will open the nav bar */

        return (
            <nav id="navbar" >
                <div className="container">
                    <div className="row">

                        <div className="col-lg-4 logo-container">
                            <img src={logo} alt="logo" width="139" height="35" className="img-fluid" />
                        </div>
                        <div className="col-lg-7 nav-container" id="home" >
                            <ul>
                                <li>
                                    <Link to="page" smooth={true} duration={500} spy={true} offset={-100}>
                                        HOME
                                    </Link>
                                    <span></span>
                                    <span></span>
                                    <span></span>
                                    <span></span>
                                </li>
                                <li>
                                <Link to="about" smooth={true} duration={500} spy={true}  offset={-100}>
                                        ABOUT
                                    </Link>
                                    <span></span>
                                    <span></span>
                                    <span></span>
                                    <span></span>
                                </li>
                                <li>
                                    
                                    <Link to="PORTOFOLIO" smooth={true} duration={500} spy={true}  offset={-100}>
                                    PORTOFOLIO
                                    </Link>
                                    <span></span>
                                    <span></span>
                                    <span></span>
                                    <span></span>
                                </li>
                                <li>
                                    
                                    <Link to="contact" smooth={true} duration={500} spy={true}  offset={0}>
                                    CONTACT
                                    </Link>
                                    <span></span>
                                    <span></span>
                                    <span></span>
                                    <span></span>
                                </li>
                            </ul>

                        </div>
                    </div>
                </div>
                <div className="open-button" onClick={
                    openNavbar
                }>
                    <span></span>
                    <span></span>
                    <span></span>
                </div>
            </nav>
        )
    }
}
export default Navbar