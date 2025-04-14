import React from "react";
import { FaInstagram, FaWhatsapp, FaEnvelope,FaGithub } from "react-icons/fa";
const Footer = () => {
    return (
        <div className="Contactame" id="contacto">
        <h2>Contáctame</h2>
        <div className="social-links">
            <a href="https://www.instagram.com/jorge.villagraa/" target="_self" rel="noopener noreferrer">
                <FaInstagram /> Instagram
            </a>
            <a href="https://wa.me/3815941635" target="_self" rel="noopener noreferrer">
                <FaWhatsapp /> WhatsApp
            </a>
            <a href="JorgeVillagra551@gmail.com" target="_self" rel="noopener noreferrer">
                <FaEnvelope /> Gmail
            </a>
            <a href="https://github.com/jorgevillagraa" target="_self" rel="noopener noreferrer">
                <FaGithub /> GitHub
            </a>
            <p className="copyright">© 2023 Jorge Villagra. Todos los derechos reservados.</p>
        </div>
    </div>
    );
};

export default Footer;