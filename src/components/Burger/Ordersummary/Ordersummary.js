import React from 'react'

const OrderSummary = props => {
    const ingredientSummary = Object.keys(props.ingredients)
        .map( igKey => {
            return <li>{igKey} : {props.ingredients[igKey]}</li>
        })
    return(
        <React.Fragment>
            <h3>Your order</h3>
            <p>A delicious burger with following ingredients:</p>
            <ul>
                {ingredientSummary}
            </ul>
            <p>Continue to checkout?</p>
        </React.Fragment>
    )
}
export default OrderSummary