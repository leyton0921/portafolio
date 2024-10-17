'use client';
import React, { useState } from 'react';
import styles from './options.module.scss';
import Button from '../UI/button/button';
import { HiTranslate } from "react-icons/hi";
import { FaSun, FaMoon } from "react-icons/fa";

const LanguageModal: React.FC<{ onClose: () => void }> = ({ onClose }) => {
  return (
    <div className={styles.modalOverlay}>
      <div className={styles.modalContent}>
        <Button className={styles.modalButton} onClick={onClose}>Inglés</Button>
        <Button className={styles.modalButtonscudary} onClick={onClose}>Español</Button>
      </div>
    </div>
  );
};

const Options: React.FC = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isDarkTheme, setIsDarkTheme] = useState(false);

  const toggleModal = () => {
    setIsModalOpen(!isModalOpen);
  };

  const toggleTheme = () => {
    setIsDarkTheme(!isDarkTheme);
    document.body.classList.toggle('dark-theme', !isDarkTheme);
  };

  return (
    <div className={styles.container}>
      <div className={styles.ContainerIcons}>
        <Button className={styles.button} onClick={toggleModal}>
          {isDarkTheme ? <HiTranslate size={20} color='#ffff'/> : <HiTranslate size={20} />}
        </Button>
        <Button className={styles.button} onClick={toggleTheme}>
          {isDarkTheme ? <FaSun size={20} color='#ffff' /> : <FaMoon size={20} />}
        </Button>
      </div>
      
      {isModalOpen && <LanguageModal onClose={toggleModal} />}
    </div>
  );
};

export default Options;
