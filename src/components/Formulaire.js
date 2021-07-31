import React, { Component } from 'react';

class Formulaire extends Component {

    state = {
        message: '',
        length: this.props.length
    }

    createMessage = () => {
        const { addMessage, pseudo, length } = this.props

        const message = {
            pseudo,
            message: this.state.message
        }

        addMessage(message)

        // Reset
        this.setState({ message: '', length });
    }

    handleSubmit = (event) => {
        event.preventDefault();

        this.createMessage()
    }

    handleChange = (event) => {
        const message = event.target.value
        const length = this.props.length - message.length
        this.setState({ message, length })
    }

    handleKeyUp = (event) => {
        if (event.key === 'Enter') {
            this.createMessage()
        }
    }

    render() {
        const stateMessage = this.state

        return (
            <form
                className='form'
                onSubmit={ this.handleSubmit }
            >
                <textarea
                    required
                    maxLength={ this.props.length }
                    value={ stateMessage.message }
                    onChange={ this.handleChange }
                    onKeyUp={ this.handleKeyUp }
                />
                <div className="info">
                    { stateMessage.length }
                </div>
                <button type="submit">
                    Envoyer !
                </button>
            </form>
        )
    }
}

export default Formulaire;