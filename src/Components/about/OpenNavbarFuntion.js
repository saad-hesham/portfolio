export default function openNavbar(){
    if(document.querySelector(".open-button").classList.contains("opened")){
        document.querySelector(".open-button").classList.add("closed")
        document.querySelector(".open-button").classList.remove("opened")
        document.querySelector(".nav-container ul").classList.remove("openul")
        document.querySelector(".nav-container ul").classList.add("closeul")
        setTimeout(() => {
            document.querySelector(".nav-container ul").style.display="none"

        }, 450);
    }
    else{
        document.querySelector(".open-button").classList.add("opened")
         document.querySelector(".open-button").classList.remove("closed")
        document.querySelector(".nav-container ul").style.display="block"
        document.querySelector(".nav-container ul").classList.add("openul")
        document.querySelector(".nav-container ul").classList.remove("closeul")
    }  
    
}