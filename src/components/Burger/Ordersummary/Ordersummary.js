import React , {Component} from 'react'
import Button from '../../UI/Button/Button'

class OrderSummary extends Component {

    render(){
        const ingredientSummary = Object.keys(this.props.ingredients)
            .map( igKey => {
            return <li key = {igKey}>{igKey} : {this.props.ingredients[igKey]}</li>
        })
    return(
        <React.Fragment>
            <h3>Your order</h3>
            <p>A delicious burger with following ingredients:</p>
            <ul>
                {ingredientSummary}
            </ul>
            <p>Total price : {this.props.price.toFixed(2)}</p>
            <p>Continue to checkout?</p>
            <Button btnType= 'Danger' clicked={this.props.purchaseCanceled}>Cancel</Button>
            <Button btnType ='Success' clicked = {this.props.purchaseContinue}>Continue</Button>
        </React.Fragment>
    )
    }
}
export default OrderSummary