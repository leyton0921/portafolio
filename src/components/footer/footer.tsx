import React from "react"
import styles from "./footer.module.scss"
import { FaLinkedin } from "react-icons/fa6";
import { FaFacebookSquare } from "react-icons/fa";
import { FaSquareGithub } from "react-icons/fa6";
import { FaSquareInstagram } from "react-icons/fa6";

const Footer:React.FC =()=>{

    return(
        <div className={styles.container}>
        <footer>
        <a href="/about" className={styles.link}><FaLinkedin size={20}/></a>
        <a href="/projects" className={styles.link}><FaFacebookSquare size={20}/></a>
        <a href="https://github.com/leyton0921" target="_blank" rel="noopener noreferrer" className={styles.link}><FaSquareGithub size={20}/></a>
        <a href="/contact" className={styles.link}><FaSquareInstagram size={20}/></a>

        </footer>

    </div>
    )
}

export default Footer