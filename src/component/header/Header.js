import React from 'react';
import styles from '../../styles/header.module.css';

const Header = () => {
  return (
    <div className={styles.header}>
        <div className={styles.container}>
            <h1>ToDoList</h1>
        </div>
    </div>
  )
}

export default Header