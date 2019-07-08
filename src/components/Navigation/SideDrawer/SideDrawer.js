import React from 'react'
import Logo from '../../Logo/Logo';
import NavigationItems from '../NavigationItems/NavigationItems'
import Backdrop from '../../UI/Backdrop/Backdrop'
import styles from './side-drawer.css'

const SideDrawer = props =>{
    let attachedClasses = [ styles.SideDrawer, styles.Close]
    if(props.open){
        attachedClasses = [ styles.SideDrawer, styles.Open]
    }
    console.log(attachedClasses)
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
export default SideDrawer    