import React ,{ Component } from 'react'
import Burger from '../../components/Burger/Burger'
import BuildControls from '../../components/Burger/BuildControls/BuildControls'
import Modal from '../../components/UI/Modal/Modal'
import OrderSummary from '../../components/Burger/Ordersummary/Ordersummary'
import Spiner from '../../components/UI/Spiner/Spiner'
import axios from '../../../src/axios-orders'

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
        purchasable : false,
        purchasing : false,
        loading : false
    }

    updatePurchaseState = (ingredients) => {
        var sum = Object.values(ingredients)
            .reduce((cur, el) => cur + el, 0)
        this.setState({ purchasable: sum > 0 });
    }
    purchaseHandler = () => {
        this.setState({purchasing : true})
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
    purchaseCancelHandler = () => {
        this.setState({purchasing : false})
    }
    purchaseContinueHandler = () => {
        this.setState({ loading : true})
        const order = {
            ingredients : this.state.ingredients,
            price : this.state.totalPrice.toFixed(2)
        }
        axios.put('/orders.json',order)
            .then( res => this.setState({ loading : false , purchasing: false}))
            .catch ( err => this.setState({ loading : false , purchasing: false}))
    }
    render(){
        const disabledInfo = {
            ...this.state.ingredients
        }
        for(let key in disabledInfo){
            disabledInfo[key] = disabledInfo[key] <= 0
        }
        let orderSummary =   <OrderSummary 
        price = {this.state.totalPrice}
        ingredients = {this.state.ingredients}
        purchaseCanceled = {this.purchaseCancelHandler}
        purchaseContinue = {this.purchaseContinueHandler}/>

        if(this.state.loading){
            orderSummary = <Spiner/>
            console.log('loading')
        }
        console.log(orderSummary)
        return(
            <React.Fragment>
              <Modal show={this.state.purchasing} modalClosed={this.purchaseCancelHandler}>
                {orderSummary}
              </Modal>
              <Burger ingredients = {this.state.ingredients}/> 
              <BuildControls ingedientAdded = {this.addIngrediantHandler}
                             ingredientRemoved = {this.removeIngrediantHandler}   
                             disabled = {disabledInfo}
                             price = {this.state.totalPrice}
                             ordered = {this.purchaseHandler}
                             purchaseble = {this.state.purchasable}/>

            </React.Fragment>
        )
    }
}
export default BurgerBuilder