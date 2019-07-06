import React from 'react'
import styles from './modal.css'

const Modal = props => (
    <div className={styles.Modal}>
        {props.children}    
    </div>
)
export default Modal