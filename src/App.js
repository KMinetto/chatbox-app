import React, { Component } from 'react'
import './App.css';

import Formulaire from "./components/Formulaire";
import Message from "./components/Message";

class App extends Component {
    state = {
        messages: {},
        pseudo: this.props.match.params.pseudo
    }

    addMessage = (message) => {
        const messages = { ...this.state.messages }
        messages[`message-${Date.now()}`] = message
        this.setState({ messages })
    }

  render() {

    const state = this.state
    return (
        <div className='box'>
            <div>
                <div className="messages">
                    <Message />
                </div>
                <Formulaire
                    addMessage={ this.addMessage }
                    pseudo={ state.pseudo }
                />
            </div>
        </div>
    )
  }
}

export default App;
