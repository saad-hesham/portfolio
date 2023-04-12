import About from "./Components/about/About"
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";
import Skills from "./Components/Skills component/Skills";
import Cursoal from "./Components/Skills component/Slider";
import { useDispatch, useSelector } from "react-redux";
import { actions } from "./Redux/Store";
import { faTimes  } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import PortofolioSection from "./Components/Portofolio/PortofolioSection";
import ContactForm from "./Components/ContactForm";
import Footer from "./Components/Footer";
function App() {
  const state = useSelector(state => state.openSlide);
  const dispatch = useDispatch()
  useEffect(() => {
    AOS.init();
    AOS.refresh();
  }, []);

  return (
<main>
 <About />
<Skills/>
{state ? <div className="black-screen" >
  
<Cursoal/>
<button className="close-cer" onClick={()=>{
  dispatch(actions.toggleSlider())
}}>
  <FontAwesomeIcon icon={faTimes} />

</button>
</div> :null}
<PortofolioSection/>
<ContactForm/>
<Footer/>

</main>
  );
}

export default App;
