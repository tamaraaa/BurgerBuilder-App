import React , { Component } from 'react'
import styles from './layout.css'
import Toolbar from '../Navigation/Toolbar/Toolbar'
import SideDrawer from '../Navigation/SideDrawer/SideDrawer'

class Layout extends Component{

    state={
        showSolideDrawer : false
    }
    sideDrawerClosedHandler = () =>{
        this.setState({showSolideDrawer : false})
    }
    sideDrawerTooglerHandler = () =>{
        this.setState(prevState => {
            return {showSolideDrawer : !prevState.showSolideDrawer};
        });
    }
    render(){
    return(
    <React.Fragment>
        <div className={styles.App}>
           <Toolbar drawerTogglerClicked={this.sideDrawerTooglerHandler}/>
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