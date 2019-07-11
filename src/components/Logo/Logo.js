import React from 'react'
import logo from '../../assets/images/burger-logo.png'
import styles from './logo.css'
import PropTypes from 'prop-types'

const Logo = props => (
    <div className = {styles.Logo} style={{height : props.height}}>
        <img src = { logo } alt='myBurger'/>
    </div>
)
Logo.propTypes = {
    height : PropTypes.string.isRequired
}
export default Logo