import React from 'react'
import {ThemeContextConsumer} from './themeContext'

export default function Button() {
    return (
        <ThemeContextConsumer>
            {context => (
                <button onClick={context.toggleTheme} className={`${context.theme}-theme`}>Switch theme</button>
            )}
        </ThemeContextConsumer>
        
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