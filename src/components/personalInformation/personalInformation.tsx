'use client'
import React, { useState } from "react";
import styles from "./personalInformation.module.scss";
import Image from "next/image";
import { HiOutlineMail } from "react-icons/hi";
import Link from "next/link";
import { FiPhone } from "react-icons/fi";

const PersonalInformation: React.FC = () => {
    const [isHovered, setIsHovered] = useState(false);

    const handleMouseEnter = () => {
        setIsHovered(true);
    };

    const handleMouseLeave = () => {
        setIsHovered(false);
    };

    return (
        <div className={styles.container}>
            <div className={styles.infoText}>
                <div className={styles.containerText}>
                    <div className={styles.name}>
                        <h1>Isabella <span className={styles.colorTerceary}>Leyton Carmona</span></h1>
                        <h2>Front-End Developer</h2>
                    </div>
                    <p>Construyo soluciones web receptivas que fusionan estética y funcionalidad para ofrecer una experiencia de usuario excepcional.</p>
                    <div className={styles.containerButton}>
                        <a href="mailto:leytoncarmonsaisabella@gmail.com"className={styles.button}><HiOutlineMail /> Correo</a>
                        <Link className={styles.buttonSecundary} href="/contact"><FiPhone /> Contacto</Link>
                    </div>
                </div>
            </div>
            <div className={styles.containerPhoto}>
                <div
                    className={styles.containerAvatar}
                    onMouseEnter={handleMouseEnter}
                    onMouseLeave={handleMouseLeave}
                >
                    <Image
                        src={isHovered ? "/images/avatar2.png" : "/images/avatar1.png"}
                        alt="Avatar"
                        width={150}
                        height={200}
                    />
                </div>
            </div>
        </div>
    );
};

export default PersonalInformation;
