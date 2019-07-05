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
    return(
    <div className = {styles.BuildControls}>
        {controls.map( ctrl => <BuildControl 
                                key={ctrl.label}
                                label={ctrl.label}
                                added={() => props.ingedientAdded(ctrl.type)}
                                removed = { () => props.ingredientRemoved(ctrl.type)}/>
 )}
    </div>
    )
}
export default BuildControls