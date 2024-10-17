import styles from "./projecttext.module.scss";
import React, { ReactNode } from "react";

const ProjectText: React.FC<{ children: ReactNode }> = ({ children }) => {
    return (
        <div className={styles.container}>
            <div className={styles.tittle}>
                <h3>Proyectos.</h3>
            </div>
            <div className={styles.containerProjects}>
                {children}
            </div>
        </div>
    );
}

export default ProjectText;
