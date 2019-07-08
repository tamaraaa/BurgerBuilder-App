import React from 'react'
import styles from './build-controls.css'
import BuildControl from './BuildControl/BuildControl'

const controls = [
    { label : 'Salad', type : 'salad'},
    { label : 'Meat', type : 'meat'},
    { label : 'Cheese', type : 'cheese'},
    { label : 'Bacon', type : 'bacon'},

]
const BuildControls = props => {
    console.log(props.purchaseble)
    return(
    <div className = {styles.BuildControls}>
        <p>Curent price : {props.price.toFixed(2)} $</p>
        {controls.map( ctrl => <BuildControl 
                                key={ctrl.label}
                                label={ctrl.label}
                                added={() => props.ingedientAdded(ctrl.type)}
                                removed = { () => props.ingredientRemoved(ctrl.type)}
                                disabled={props.disabled[ctrl.type]}/>
 )}
        <button className={styles.OrderButton}
                disabled={!props.purchaseble}
                onClick = {props.ordered}>ORDER NOW</button>
    </div>
    )
}
export default BuildControls