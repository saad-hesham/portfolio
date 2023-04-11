import { Component } from "react";
import Cursor from "../Home/Cursor";
import Home from "../Home/Home";
import Parlex from "../Parlex";
import Navbar from "./Navbar";

class About extends Component{
    render(){
        return(
            <header>
                <Navbar/>
                <Home/>
                <Cursor/>
                <Parlex/>
               
            </header>
        )
    }
}
export default About