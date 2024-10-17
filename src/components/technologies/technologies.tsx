import React from "react";
import styles from "./technologies.module.scss";
import { FaHtml5 } from "react-icons/fa";
import { FaCss3 } from "react-icons/fa";
import { BiLogoTypescript } from "react-icons/bi";
import { RiJavascriptFill } from "react-icons/ri";
import { FaReact } from "react-icons/fa";
import { FaSass } from "react-icons/fa";
import { RiNextjsFill } from "react-icons/ri";
import { FaBootstrap } from "react-icons/fa";
import { FaGitAlt } from "react-icons/fa";

const Technologies: React.FC = () => {
    return (
        <div className={styles.container}>
            <div className={styles.tittle}>
                <h3>Tecnologías.</h3>
            </div>

            <div className={styles.technologiesContainer}>
                <div className={styles.skill}>
                <FaHtml5 size={40} color="#ff4500"/>
                    <p>HTML</p>
                </div>

                <div className={styles.skill}>
                <FaCss3 size={40} color="#264de4"/>
                    <p>CSS</p>
                </div>

                <div className={styles.skill}>
                <BiLogoTypescript size={40} color="blue"/>
                    <p>TypeScript</p>
                </div>

                <div className={styles.skill}>
                <RiJavascriptFill size={40} color="yellow"/>
                    <p>JavaScript</p>
                </div>

                <div className={styles.skill}>
                <FaReact size={40} color="#61DBFB"/>
                    <p>React</p>
                </div>

                <div className={styles.skill}>
                <FaSass size={40} color="#CD6799"/>
                    <p>Sass</p>
                </div>

                <div className={styles.skill}>
                <RiNextjsFill size={40}/>
                    <p>Next.js</p>
                </div>

                <div className={styles.skill}>
                <FaBootstrap size={40} color="#6f42c1"/>
                    <p>Bootstrap </p>
                </div>

                <div className={styles.skill}>
                <FaGitAlt size={40} color="#F1502F"/>
                    <p>Git</p>
                </div>
            </div>
        </div>
    )
}

export default Technologies