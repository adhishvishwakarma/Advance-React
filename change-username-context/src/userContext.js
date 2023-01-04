import React, { Component } from 'react'

const {Provider, Consumer} = React.createContext()

class UserContextProvider extends Component {

    state = {
        username: 'TestUsername'
    }

    changeUsername = (props) => {
        this.setState({username: props.newUsername})
    }

    render() {
        return (
            <Provider value={{username:this.state.username, changeUsername: this.changeUsername}}>
                {this.props.children}
            </Provider>
        )
    }
}


export {UserContextProvider, Consumer as UserContextConsumer}