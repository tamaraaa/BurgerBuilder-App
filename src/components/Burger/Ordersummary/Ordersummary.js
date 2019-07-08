import React from 'react'
import Button from '../../UI/Button/Button'

const OrderSummary = props => {
    const ingredientSummary = Object.keys(props.ingredients)
        .map( igKey => {
            return <li key = {igKey}>{igKey} : {props.ingredients[igKey]}</li>
        })
    return(
        <React.Fragment>
            <h3>Your order</h3>
            <p>A delicious burger with following ingredients:</p>
            <ul>
                {ingredientSummary}
            </ul>
            <p>Total price : {props.price.toFixed(2)}</p>
            <p>Continue to checkout?</p>
            <Button btnType= 'Danger' clicked={props.purchaseCanceled}>Cancel</Button>
            <Button btnType ='Success' clicked = {props.purchaseContinue}>Continue</Button>
        </React.Fragment>
    )
}
export default OrderSummary