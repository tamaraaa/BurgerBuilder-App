import React from 'react'
import NavigationItem from './NavigationItem/NavigationItem'
import styles from './navigation-items.css'

const NavigationItems = props => {
  return(
    <ul className={styles.NavigationItems}>
       <NavigationItem link='/' active>Burger Builder</NavigationItem>
       <NavigationItem link='/'>Checkout</NavigationItem>
    </ul>
  )  
}
export default NavigationItems