import React from 'react'
import styles from './toolbar.css'
import Logo from '../../Logo/Logo'
import NavigationItems from '../NavigationItems/NavigationItems'
import DrawerToggler from '../SideDrawer/DrawerToggler/DrawerToggler'
import PropTypes from 'prop-types'

const Toolbar = props => {
    return (
        <header className={styles.Toolbar}>
            <DrawerToggler clicked={props.drawerTogglerClicked} />
            <Logo height='80%'/>
            <nav className={styles.DesktopOnly}>
                <NavigationItems/>
            </nav>
        </header>
    )
}
Toolbar.propTypes = {
    drawerTogglerClicked : PropTypes.func.isRequired
}
export default Toolbar