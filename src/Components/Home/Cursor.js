import { Component } from "react";

class Cursor extends Component{
    componentDidMount(){
        let cursor = document.getElementById("cursor");

        document.addEventListener("mousemove",function(e){
            var x = e.clientX;
            var y = e.clientY;
            cursor.style.left =x-2.5+"px"
            cursor.style.top =y-2.5+"px"
            
        })
   
    }

    render(){
        return(
            <div id="cursor"></div>
        )
    }
}
export default Cursor