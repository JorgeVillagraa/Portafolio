import React from "react";
import Estudios from "./Estudios";
import SoftSkills from "./SoftSkills";
const Main = () => {
    return (
        <div className="Main">

            <section className="about-me" id="about-me">
                <h1>Sobre Mí</h1>
                <p>
                    Hola, soy un estudiante de programación apasionado por aprender y desarrollar
                    soluciones creativas. Me encanta explorar nuevas tecnologías y mejorar mis habilidades
                    cada día. Estoy emocionado por los desafíos que el mundo de la programación tiene para ofrecer.
                </p>
            </section>

            <section className="projects" id="projects">
                <h1>Proyectos</h1>
                <p>
                    Aquí puedes encontrar algunos de los proyectos en los que he trabajado. Cada uno de ellos refleja
                    mi pasión por la programación y mi compromiso con el aprendizaje continuo. ¡Espero que los disfrutes!
                </p>
                <div className="project-cards">
                    <div className="project-card">
                        <video
                            src="video1.mp4"
                            controls
                            onClick={() => window.open("https://example.com/proyecto1", "_blank")}
                        />
                        <h3>Proyecto 1</h3>
                        <p>Una aplicación web para gestionar tareas diarias.</p>
                    </div>
                    <div className="project-card">
                        <video
                            src="video2.mp4"
                            controls
                            onClick={() => window.open("https://example.com/proyecto2", "_blank")}
                        />
                        <h3>Proyecto 2</h3>
                        <p>Un sitio de portafolio interactivo para mostrar mis habilidades.</p>
                    </div>
                    <div className="project-card">
                        <video
                            src="video3.mp4"
                            controls
                            onClick={() => window.open("https://example.com/proyecto3", "_blank")}
                        />
                        <h3>Proyecto 3</h3>
                        <p>Un juego simple desarrollado con JavaScript y React.</p>
                    </div>
                </div>
            </section>
            
            <Estudios/>

            <SoftSkills/>
        </div>
    );
}
export default Main;