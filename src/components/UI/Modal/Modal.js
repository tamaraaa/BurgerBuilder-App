import React from 'react'
import Backdrop from '../Backdrop/Backdrop'
import styles from './modal.css'

const Modal = props => (
    <React.Fragment>
    <Backdrop show = {props.show} />
    <div className={styles.Modal}
         style={{
             transform : props.show ? 'translateY(0)' : 'translateY(-100vh)',
             opacity : props.show ? '1' : '0'
         }}>
        {props.children}    
    </div>
    </React.Fragment>
)
function arePropsEqual(prevProps, nextProps) {
    console.log(prevProps.children === nextProps.children)
    const isRendering = prevProps.show === nextProps.show || prevProps.children === nextProps.children; 
    return isRendering
  }
  
export default React.memo(Modal,arePropsEqual)