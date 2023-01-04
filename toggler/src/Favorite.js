import React from 'react'
import { withToggler } from './hoc/withToggler'

function Favorite(props) {
    return (
        <div>
            <h2>Click heart to favorite</h2>
            <span onClick={props.toggle}>
                {props.on ? "❤️" : "♡"}
            </span>
        </div>
    )
}

export default withToggler(Favorite, {defaultOnValue:false})