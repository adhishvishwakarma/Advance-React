import React, { Component } from 'react'
import Header from './Header'
import {UserContextConsumer} from './userContext'


// export default function App() {
//   return (
//     <div>

//       <Header />

//       <UserContextConsumer>
//         {context => (
//             <div>
//               <menu>
//                 <p>No new notifications, {context.username}!</p>
//               </menu>

//               <input 
//                 type='text' 
//                 name='username' 
//                 placeholder='New Username'
//                 value={''}
//                 onChange={''}
//               />

//               <button onClick={''}>Change Username</button>
//             </div>
//           )
//         }
        
//       </UserContextConsumer>
//     </div>
//   )
// }

class App extends Component {

  state = {
    newUsername: ''
  }

  handleChange = (event) => {
    this.setState({newUsername: event.target.value})
  }

  render() {
    return (
      <div>

        <Header />

        <UserContextConsumer>
          {context => (
              <div>
                <menu>
                  <p>No new notifications, {context.username}!</p>
                </menu>

                <input 
                  type='text' 
                  name='newUsername' 
                  placeholder='New Username'
                  value={this.state.newUsername}
                  onChange={this.handleChange}
                />

                <button onClick={() => context.changeUsername({newUsername: this.state.newUsername})}>Change Username</button>
              </div>
            )
          }
          
        </UserContextConsumer>
      </div>
    )
  }
}

export default App
