import React from "react";
import {ThemeContextConsumer} from "./themeContext";

export default function Header() {
    return (
        <ThemeContextConsumer>
            {context => (
                <header className={`${context.theme}-theme`}>
                    <h2>{context.theme === 'dark' ? 'Dark' : 'Light'} theme</h2>
                </header>
            )}
        </ThemeContextConsumer>
        
    )
}

// class Header extends Component {
//     render() {
//         console.log(this.context)
//         return (
//             <header className={`${this.context}-theme`}>
//                 <h2>{this.context === 'dark' ? 'Dark' : "Light"} Theme</h2>
//             </header>
//         )
//     }
// }

// Header.contextType = ThemeContext

// export default Header