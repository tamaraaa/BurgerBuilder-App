import React from 'react'
import Logo from '../../Logo/Logo';
import NavigationItems from '../NavigationItems/NavigationItems'
import Backdrop from '../../UI/Backdrop/Backdrop'
import styles from './side-drawer.css'
import PropTypes from 'prop-types'

const SideDrawer = props =>{
    let attachedClasses = [ styles.SideDrawer, styles.Close]
    if(props.open){
        attachedClasses = [ styles.SideDrawer, styles.Open]
    }
    return(
        <React.Fragment>
            <Backdrop show={props.open} clicked={props.closed}/>
            <div className={attachedClasses.join(' ')}>
                <Logo height='11%'/>
                <nav>
                    <NavigationItems/>
                </nav>
            </div>
        </React.Fragment>
    )
}
SideDrawer.propTypes = {
    open : PropTypes.bool.isRequired,
    closed : PropTypes.func.isRequired,
}
export default SideDrawer    