import React from 'react'
import Toggler from './Toggler'

export default function Menu() {
    return (
        <Toggler render={
            function(on, toggle) {
                return (
                    <div>
                        <button onClick={toggle}>{on ? 'Hide' : 'Show'} Menu</button>
                        <nav style={{display: on ? 'block': 'none'}}>
                            <h6>Signed in as Adhish</h6>
                            <p>Your Profile</p>
                            <p>Your Repos</p>
                            <p>Your Stars</p>
                            <p>Your Gists</p>
                        </nav>
                    </div>
                )
            }
        } />
    )
}

