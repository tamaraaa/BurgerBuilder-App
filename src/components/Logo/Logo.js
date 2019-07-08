import React from 'react'
import logo from '../../assets/images/burger-logo.png'
import styles from './logo.css'

const Logo = props => (
    <div className = {styles.Logo} style={{height : props.height}}>
        <img src = { logo } alt='myBurger'/>
    </div>
)
export default Logo