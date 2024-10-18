import React from "react";
import styles from "./contactme.module.scss";
import { FiPhone } from "react-icons/fi";
import { HiOutlineMail } from "react-icons/hi";
import { FaLocationDot } from "react-icons/fa6";

const ContactSection: React.FC = () => {
    return (
        <div className={styles.container}>
            <div className={styles.tittle}>
                <h3>Contacto.</h3>
            </div>

            <div className={styles.containerInfo}>
                <div className={styles.item}>
                    <FiPhone size={40} />
                    <div className={styles.text}>
                        <h3>Teléfono</h3>
                        <p>+57 3215232970</p>
                    </div>
                </div>

                <div className={styles.item}>
                    <HiOutlineMail size={40} />
                    <div className={styles.text}>
                        <h3>Correo</h3>
                        <p>leytoncarmonaisabella@gmail.com</p>
                    </div>
                </div>

                <div className={styles.item}>
                    <FaLocationDot size={40} />
                    <div className={styles.text}>
                        <h3>Ubicación</h3>
                        <p>Colombia-Antioquia-Medellín</p>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default ContactSection;
