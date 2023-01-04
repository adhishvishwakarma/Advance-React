import React from 'react'
import { withToggler } from './hoc/withToggler'

function Menu(props) {
    return (
        <div>
            <button onClick={props.toggle}>{props.on ? 'Hide' : 'Show'} Menu</button>
            <nav style={{display: props.on ? 'block': 'none'}}>
                <h6>Signed in as Adhish</h6>
                <p>Your Profile</p>
                <p>Your Repos</p>
                <p>Your Stars</p>
                <p>Your Gists</p>
            </nav>
            
        </div>
    )
}

export default withToggler(Menu, {defaultOnValue: true})