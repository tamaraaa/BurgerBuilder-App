import React , { Component } from 'react'
import styles from './layout.css'
import Toolbar from '../Navigation/Toolbar/Toolbar'
import SideDrawer from '../Navigation/SideDrawer/SideDrawer'

class Layout extends Component{

    state={
        showSolideDrawer : true
    }
    sideDrawerClosedHandler = () =>{
        this.setState({showSolideDrawer : false})
    }
    render(){
    return(
    <React.Fragment>
        <div className={styles.App}>
           <Toolbar/>
           <SideDrawer 
           open={this.state.showSolideDrawer} 
           closed={this.sideDrawerClosedHandler}/>
        </div>
        <main className={styles.Content}>
            {this.props.children}
        </main>
    </React.Fragment>
    )
    }
}
export default Layout