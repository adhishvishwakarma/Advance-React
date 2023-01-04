import React, { Component } from "react";
import ThemeContext from "./themeContext";

export default function Header() {
    return (
        <ThemeContext.Consumer>
            {theme => (
                <header className={`${theme}-theme`}>
                    <h2>{theme === 'dark' ? 'Dark' : 'Light'} theme</h2>
                </header>
            )}
        </ThemeContext.Consumer>
        
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