'use client'
import Link from "next/link";
import styles from "./navbar.module.scss";
import { FaRegUser } from "react-icons/fa";
import { GrProjects } from "react-icons/gr";
import { FiPhone } from "react-icons/fi";
import { usePathname } from "next/navigation";

export default function Navbar() {
    const currentPath = usePathname();

    return (
        <div className={styles.container}>
            <nav>
                <Link href="/about" className={`${styles.link} ${currentPath === '/about' ? styles.active : ''}`}>
                    <FaRegUser size={20}/>
                </Link>
                <Link href="/projects" className={`${styles.link} ${currentPath === '/projects' ? styles.active : ''}`}>
                    <GrProjects size={20}/>
                </Link>
                <Link href="/contact" className={`${styles.link} ${currentPath === '/contact' ? styles.active : ''}`}>
                    <FiPhone size={20}/>
                </Link>
            </nav>
        </div>
    );
}
