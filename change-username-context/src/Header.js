import React from 'react'
import {UserContextConsumer} from './userContext'

function Header() {
    return (
        <nav>
            <UserContextConsumer>
                {context => (
                    <p>Welcome, {context.username} !</p>
                )}
            </UserContextConsumer>
            
        </nav>
    )
}

export default Header