import React from 'react'
import BurgerIngredients from './BurgerIngredient/BurgerIngredients'
import styles from './burger.css'

const Burger = ({ingredients}) => {
    let transformedIngrediants = Object.keys(ingredients)
        .map(igKey => {
            return [...Array(ingredients[igKey])].map((_,i)=>{
                return <BurgerIngredients key ={igKey +i} type={igKey}/>
            })
        })
        .reduce((arr,el)=>{
            console.log(arr,el)
            return arr.concat(el)
        },[])

        if(transformedIngrediants.length === 0){
            transformedIngrediants = <p>Please start adding ingredients!</p>
        }
    console.log(transformedIngrediants)
    return(
        <div className={styles.Burger}> 
            <BurgerIngredients type='bread-top'/>
                {transformedIngrediants}
            <BurgerIngredients type='bread-bottom'/>

        </div>
    )
}
export default Burger
