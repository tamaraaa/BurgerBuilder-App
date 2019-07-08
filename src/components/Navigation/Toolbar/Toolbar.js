import React from 'react'
import styles from './toolbar.css'
import Logo from '../../Logo/Logo'
import NavigationItems from '../NavigationItems/NavigationItems'

const Toolbar = props => {
    return (
        <header className={styles.Toolbar}>
            <div>MANU</div>
            <Logo height='80%'/>
            <nav className={styles.DesktopOnly}>
                <NavigationItems/>
            </nav>
        </header>
    )
}
export default Toolbar