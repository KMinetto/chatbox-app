import React, { Component, createRef } from 'react'
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

    messageRef = createRef()

    componentDidMount() {
        base.syncState('/', {
            context: this,
            state: 'messages',
        })
    }

    componentDidUpdate() {
        const ref = this.messageRef.current
        ref.scrollTop = ref.scrollHeight
    }

    addMessage = (message) => {
        const messages = { ...this.state.messages }
        messages[`message-${Date.now()}`] = message

        Object.keys(messages)
            .slice(0, -10)
            .forEach(key => {
                messages[key] = null
            })

        this.setState({ messages })
    }

    isUser = pseudo => pseudo === this.state.pseudo

  render() {
    const state = this.state

    const messages = Object.keys(state.messages)
        .map(key => (
            <Message
                key={ key }
                isUser={ this.isUser }
                message={ state.messages[key].message }
                pseudo={ state.messages[key].pseudo }
            />
        ))

    return (
        <div className='box'>
            <div>
                <div className='messages' ref={ this.messageRef }>
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
