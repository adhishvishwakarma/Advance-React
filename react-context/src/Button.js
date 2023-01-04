import React, { Component } from 'react'
import ThemeContext from './themeContext'

export default function Button() {
    return (
        <ThemeContext.Consumer>
            {theme => (
                <button className={`${theme}-theme`}>Switch theme</button>
            )}
        </ThemeContext.Consumer>
        
    )
}


// class Button extends Component {
//     render() {
//         console.log(this.context)
//         return (
//             <button className={this.context === 'dark' ? 'dark-theme':'light-theme'}>
//                 Switch theme
//             </button>
//         )
//     }
// }

// Button.contextType = ThemeContext

// export default Button