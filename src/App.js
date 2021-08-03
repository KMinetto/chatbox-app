import React, { Component } from 'react'
import './App.css';

import Formulaire from "./components/Formulaire";
import Message from "./components/Message";
import './App.css'

// Firebase
import base from "./base"

class App extends Component {
    state = {
        messages: {},
        pseudo: this.props.match.params.pseudo
    }
    componentDidMount() {
        base.syncState('/', {
            context: this,
            state: 'messages',
        })
    }

    addMessage = (message) => {
        const messages = { ...this.state.messages }
        messages[`message-${Date.now()}`] = message
        this.setState({ messages })
    }

  render() {
    const state = this.state

    const messages = Object.keys(state.messages)
        .map(key => (
            <Message
                key={ key }
                message={ state.messages[key].message }
                pseudo={ state.messages[key].pseudo }
            />
        ))

    return (
        <div className='box'>
            <div>
                <div className='messages'>
                    <div className='message'>
                        { messages }
                    </div>
                </div>
                <Formulaire
                    addMessage={ this.addMessage }
                    pseudo={ state.pseudo }
                    length={ 140 }
                />
            </div>
        </div>
    )
  }
}

export default App;
