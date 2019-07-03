import React, { Component } from 'react';
import styles from './App.css';
import Layout from './components/Layout/Layout'
import BurgerBuilder from './containers/BurgerBilder/BurgerBuilder'
class  App extends Component {  
  render(){

   
    return (
       <Layout>
        <BurgerBuilder/>
       </Layout>
    ); 
 }
}
export default App;
 