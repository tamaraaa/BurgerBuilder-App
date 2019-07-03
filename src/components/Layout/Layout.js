import React from 'react'
import styles from './layout.css'

const Layout = props => {
    return(
    <React.Fragment>
        <div>
            toolbar,sideDrawer,backdrop
        </div>
        <main className={styles.Content}>
            {props.children}
        </main>
    </React.Fragment>
    )
}
export default Layout