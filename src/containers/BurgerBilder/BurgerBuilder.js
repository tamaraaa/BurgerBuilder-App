import React ,{ Component } from 'react'
import Burger from '../../components/Burger/Burger'
import BuildControls from '../../components/Burger/BuildControls/BuildControls'
import Modal from '../../components/UI/Modal/Modal'
import OrderSummary from '../../components/Burger/Ordersummary/Ordersummary'

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
        totalPrice : 4,
        purchasable : false
    }

    updatePurchaseState = (ingredients) => {
        var sum = Object.values(ingredients)
            .reduce((cur, el) => cur + el, 0)
        this.setState({ purchasable: sum > 0 });
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
      this.updatePurchaseState(updatedIngredients)
    }
    removeIngrediantHandler = type => {
        const oldCount = this.state.ingredients[type]
        if(oldCount <= 0){
            return
        }
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
        this.updatePurchaseState(updatedIngredients)
    }

    render(){
        const disabledInfo = {
            ...this.state.ingredients
        }
        for(let key in disabledInfo){
            disabledInfo[key] = disabledInfo[key] <= 0
        }

        return(
            <React.Fragment>
              <Modal>
                  <OrderSummary ingredients = {this.state.ingredients}/>
              </Modal>
              <Burger ingredients = {this.state.ingredients}/> 
              <BuildControls ingedientAdded = {this.addIngrediantHandler}
                             ingredientRemoved = {this.removeIngrediantHandler}   
                             disabled = {disabledInfo}
                             price = {this.state.totalPrice}
                             purchaseble = {this.state.purchasable}/>

            </React.Fragment>
        )
    }
}
export default BurgerBuilder