import React from 'react'
import styles from '../../styles/toDoItem.module.css';

const TodoItem = ({it,onDelete}) => {

    return (
    <div className={styles.sBox}>
        <h3>{it.content}
            <div className={styles.remove} onClick={()=> {onDelete(it.id)}}>X</div>
        </h3>
    </div>
  )
}

export default TodoItem