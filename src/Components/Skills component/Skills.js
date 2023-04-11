import Progress from "./ProgressBar";
import clown from "../../images/clown.jpg"
import { useDispatch, useSelector } from 'react-redux';
import { actions } from "../../Redux/Store";
function Skills() {
    const dispatch = useDispatch();
    const skills = useSelector(state => state.skills);

const openCertficate = ()=>{

dispatch(actions.toggleSlider())
}


        return (
            <div className="skills-section">
                <div className="container">
                    <div className="row about-row">
                        <div className="col-lg-6 skills-bars-container">
                            <div>

                            {skills.map(function (x) {
                                return <Progress percentage={x.per} skill={x.name} />
                            })}
                        </div>
                        </div>
                   

                        <div className="col-lg-6 about-disc">
                            <h1>let's introduce about my self</h1>
                            <p>
                                As a junior front end developer, I am a passionate and driven individual who is eager to start a 
                                career in the tech industry. Though I don't have any previous experience in the field, I have spent countless hours
                                 learning HTML, CSS, and JavaScript, and have created several small projects to showcase my skills.<br></br> <br></br>
                                 To further my education, I enrolled in online courses and worked through tutorials, which allowed me to develop a solid understanding of the fundamentals of front end development. I'm a quick learner, and I'm always eager to take on new challenges and hone my coding skills.
                                 <br></br><br></br>

                                 As a result of my dedication and hard work, I am confident that I am well-equipped to make a meaningful impact as a junior front end developer. I'm excited to utilize my skills and knowledge to create intuitive, user-friendly web experiences for future clients and projects.
                            </p>
                            <div className="buttons-container" >
                        <div className="button-hire" onClick={openCertficate}>
                            <span>Certificates</span>
                        </div>

                        <div className="button-cv">
                            <span><a href={clown} download>Download CV</a></span>
                        </div>
                    </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    
}
export default Skills