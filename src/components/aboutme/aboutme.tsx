import React from "react";
import styles from "./aboutme.module.scss";
import Image from "next/image";

const AboutMe: React.FC = () => {

    return (
        <div className={styles.container}>
            <div className={styles.tittle}>
                <h3>Sobre mí.</h3>
            </div>
            <div className={styles.textContainer}>
                <div className={styles.text}>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem, in excepturi deserunt sunt non illum accusantium, corrupti dolores inventore ullam cupiditate! Officia harum nobis rem. Delectus molestias et neque ipsum!</p>
                </div>

                <div className={styles.imageContainer}>
                    <Image

                        src="/images/avatar3.png"
                        alt="Avatar"
                        width={150}
                        height={200}
                    />

                </div>

            </div>

        </div>
    )
}

export default AboutMe