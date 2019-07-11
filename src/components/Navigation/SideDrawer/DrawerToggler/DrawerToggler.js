import React from 'react'
import styles from './drawer-toggler.css'

const DrawerToggler = props =>(
    <div className={styles.DrawerToggle}  onClick={props.clicked}>
        <div></div>
        <div></div>
        <div></div>
    </div>
)
export default DrawerToggler