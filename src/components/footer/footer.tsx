import React from "react"
import styles from "./footer.module.scss"
import { FaLinkedin } from "react-icons/fa6";
import { FaSquareGithub } from "react-icons/fa6";

const Footer:React.FC =()=>{

    return(
        <div className={styles.container}>
        <footer>
        <a href="https://www.linkedin.com/in/isabella-leyton-carmona-380180323/" target="_blank" rel="noopener noreferrer" className={styles.link}><FaLinkedin size={20}/></a>
        <a href="https://github.com/leyton0921" target="_blank" rel="noopener noreferrer" className={styles.link}><FaSquareGithub size={20}/></a>

        </footer>

    </div>
    )
}

export default Footer