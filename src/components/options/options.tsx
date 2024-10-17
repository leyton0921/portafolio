import React from 'react';
import styles from './options.module.scss';
import Button from '../UI/button/button';
import { HiTranslate } from "react-icons/hi";
import { FaSun } from "react-icons/fa";

 const Options:React.FC= ()=> {
  return (
    <div className={styles.container}>
      <div className={styles.ContainerIcons}>
      <Button className={styles.button}><HiTranslate size={20}/></Button>
      <Button className={styles.button}><FaSun size={20}/></Button>
      </div>
    </div>
  )
}

export default Options