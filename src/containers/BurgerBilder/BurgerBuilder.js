import React ,{ Component } from 'react'
import Burger from '../../components/Burger/Burger'
import BuildControls from '../../components/Burger/BuildControls/BuildControls'

const INGREDIENT_PRICES = {
    salad : 0.5,
    cheese : 0.4,
    meat : 1.2,
    bacon : 1
}

class BurgerBuilder extends Component{

    state = {
        ingredients : {
            salad : 0,
            bacon : 0,
            cheese : 0,
            meat : 0
        },
        totalPrice : 4
    }
    addIngrediantHandler = type => {
      const oldCount = this.state.ingredients[type]
      const updatedCount = oldCount + 1  
      const updatedIngredients = {
          ...this.state.ingredients
      }
      updatedIngredients[type] = updatedCount
      const priceAddition = INGREDIENT_PRICES[type]
      const oldPrice = this.state.totalPrice
      const newPrice = oldPrice + priceAddition
      this.setState({
          ingredients : updatedIngredients,
          totalPrice : newPrice
      })
    }
    removeIngrediantHandler = type => {
        const oldCount = this.state.ingredients[type]
        const updatedCount = oldCount - 1  
        const updatedIngredients = {
            ...this.state.ingredients
        }
        updatedIngredients[type] = updatedCount
        const priceDeduction = INGREDIENT_PRICES[type]
        const oldPrice = this.state.totalPrice
        const newPrice = oldPrice - priceDeduction
        this.setState({
            ingredients : updatedIngredients,
            totalPrice : newPrice
        })
    }

    render(){
        return(
            <React.Fragment>
              <Burger ingredients={this.state.ingredients}/> 
              <BuildControls ingedientAdded = {this.addIngrediantHandler}
                             ingredientRemoved = {this.removeIngrediantHandler}   />
            </React.Fragment>
        )
    }
}
export default BurgerBuilder