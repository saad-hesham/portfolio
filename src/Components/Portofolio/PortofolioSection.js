import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { Image } from 'react-bootstrap';
import facebook from "../../images/facebook.PNG"
import box from "../../images/box.PNG"
import fight from "../../images/fight.PNG"
import space from "../../images/space.PNG"
import todo from "../../images/todo.PNG"
import RSB from "../../images/RSB.PNG"
import reflux from "../../images/reflux.PNG"
import countries from "../../images/world.jpg"
import digi from "../../images/digi.jpg"
import githubIcon from "../../images/githubicon.png"
import liveDemo from "../../images/live.png"


function PortofolioSection() {
    const state = [
        { img: box, name: "Box shadow generator", alt: "Box shadow generator", id: 1,link:"https://github.com/saad-hesham/Box-shadow-generator",linkLive:"https://box-shadow-generato.vercel.app/",
        disc:"A box shadow generator simplifies the process of creating CSS box shadows for web elements. It has a user interface with controls for adjusting attributes. Users can create custom shadows and copy the corresponding CSS code. The generator also provides a visual preview and pre-designed templates. It's useful for front-end developers and designers to make visually appealing box shadows."
     },

        { img: facebook, name: "Facebook clone", alt: "Facebook clone", id: 2,link:"https://github.com/saad-hesham/facebook-clone",linkLive:"https://facebook-clone-one-xi.vercel.app/login"
    ,disc:"Facebook clone is an application that resembles the Facebook user interface and enables users to create and manage their profiles with the ability to sign up and log in and out. Users can create posts, edit or delete them, and react to posts using SVG drawings. The project also includes a chat feature that enables users to chat with any other users on the platform." },
        { img: fight, name: "Fighting Game", alt: "Fighting Game", id: 3,disc:"A front-end project of a 2D fighting game with canvas is a game application that enables users to play a fighting game on a web browser using canvas. "
    ,link:"https://github.com/saad-hesham/fight-game",linkLive:"https://fight-game-two.vercel.app/" },
        { img: space, name: "Space Tourism Landing page", alt: "Space Tourism Landing page", id: 4 ,disc:"The landing page promotes space tourism and has animated plants. It has high-quality graphics and sections with news and developments on space tourism. The plants respond to user interactions with JavaScript or CSS. It's a visually stunning front-end project that creates an immersive experience. It showcases how front-end development can create engaging user interfaces.",
     linkLive:"https://space-tourism-lemon-seven.vercel.app/",link:"https://github.com/saad-hesham/Space-tourism"
    },
        { img: todo, name: "Draggable Todo List", alt: "Draggable Todo List", id: 5,disc:"A front-end draggable to-do list is a web application that enables users to create and manage their to-do lists with drag-and-drop functionality. It utilizes JavaScript and CSS to allow users to reorder, add, edit and delete tasks.",
    link:"https://github.com/saad-hesham/todo",linkLive:"https://todo-liard-pi.vercel.app/"
    },
        { img: RSB, name: "Rock paper scissors", alt: "Rock paper scissors", id: 6,disc:"The Rock Paper Scissors project is a front-end web application built with React JS. Users can play the classic game by selecting one of three buttons, and the computer randomly selects an option. The project features a dynamic and responsive user interface with reusable UI components. It includes scorekeeping and game logic implemented using JavaScript. The project showcases the power of React in creating fun and engaging front-end projects."
    ,link:"https://github.com/saad-hesham/rock-scissor-paper",linkLive:"https://rock-scissor-paper-rho.vercel.app/"
    },
        { img: countries, name: "Api World Countries Site", alt: "Api World Countries Site", id: 7,
        disc:"A front-end project using REST Countries API built with React JS allows users to explore different countries worldwide. The project utilizes React components for a responsive UI with search bars, dropdown menus, and country cards. Users can search by name and can view information like flags, capital cities, and currencies.Interactive features include saving countries to a favorites list, comparing countries side by side, or viewing data on a map using JavaScript libraries like Leaflet. The project is an excellent example of using React to create dynamic and engaging user interfaces for displaying data.",link:"https://github.com/saad-hesham/world-countries",linkLive:"https://world-countries-eight.vercel.app/" },
        { img: digi, name: "landing page", alt: "landing page", id: 8,disc:"A landing page with cool hover effects is designed to capture visitor attention with dynamic and interactive UI elements. The project includes graphics, animations, and CSS effects that respond to user interactions such as hovering or clicking. The page typically includes sections like hero, features, testimonials, and CTA, with a responsive UI and simple navigation. Cool hover effects are intended to create an immersive experience, drawing attention to important elements and encouraging exploration. This front-end project showcases how to create visually stunning and engaging UIs with front-end development.",
    link:"https://github.com/saad-hesham/Digimedia",linkLive:"https://saad-hesham.github.io/Digimedia/"
    },
        { img: reflux, name: "landing page side navbar", alt: "landing page side navbar", id: 9,disc:"A landing page with cool hover effects is designed to capture visitor attention with dynamic and interactive UI elements. The project includes graphics, animations, and CSS effects that respond to user interactions such as hovering or clicking. The page typically includes sections like hero, features, testimonials, and CTA, with a responsive UI and simple navigation. Cool hover effects are intended to create an immersive experience, drawing attention to important elements and encouraging exploration. This front-end project showcases how to create visually stunning and engaging UIs with front-end development.",link:"https://github.com/saad-hesham/reflux-site",linkLive:"https://reflux-site.vercel.app/" },
       
    ]
    return (
        <div className='works-container' id='PORTOFOLIO'>
            <Container>
                <Row>
                    <Col sm={12}>
                        <h1>

                            RECENTLY DONE PROJECT</h1>
                    </Col>
                    {state.map(function (x) {
                        return (
                            <Col md={4}>
                                <div className="item first-item">
                                    <div className='overlay-container'>
                            
                                        <Image src={x.img} fluid rounded alt={x.alt} />
                                        <div className='overlay'>
                                        <p>
                                     {x.disc}
                                        </p>
                                        <div>
                                        <a href={x.link}  target="_blank">
                                        <Image src={githubIcon} fluid rounded alt={x.alt} width="50px"/>  
                                        </a>
                                        <a href={x.linkLive}  target="_blank">
                                        <Image src={liveDemo} fluid rounded alt={x.alt} width="50px"/>  
                                        </a>
                                        </div>
                                        </div>

                                    </div>
                                    <h4>
                                        {x.name}
                                    </h4>
                                </div>
                            </Col>
                        )

                    })}

                </Row>
            </Container>
        </div>
    );
}

export default PortofolioSection;