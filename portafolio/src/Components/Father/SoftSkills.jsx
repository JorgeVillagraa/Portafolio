import React from "react";
import { FaUsers, FaComments, FaLightbulb, FaSyncAlt, FaPaintBrush } from "react-icons/fa";

const SoftSkills = () => {
    return (
        <div className="softskills" id="SoftSkills">
        <section className="soft-skills" id="soft-skills">
            <h2>Soft Skills</h2>
            <p>Estas son algunas de las habilidades blandas que me definen:</p>
            <ul className="soft-skills-list">
                <li>
                    <FaUsers /> Trabajo en equipo
                </li>
                <li>
                    <FaComments /> Comunicación efectiva
                </li>
                <li>
                    <FaLightbulb /> Resolución de problemas
                </li>
                <li>
                    <FaSyncAlt /> Adaptabilidad
                </li>
                <li>
                    <FaPaintBrush /> Creatividad
                </li>
            </ul>
        </section>
    </div>
    );
};

export default SoftSkills