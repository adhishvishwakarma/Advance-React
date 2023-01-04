import React from 'react'
import Toggler from './Toggler'

export default function Favorite() {
    return (
        <Toggler render={
            function(on, toggle) {
                return (
                    <div>
                        <h2>Click heart to favorite</h2>
                        <span onClick={toggle}>
                            {on ? "❤️" : "♡"}
                        </span>
                    </div>
                    )
            }
        } />
    )
}

