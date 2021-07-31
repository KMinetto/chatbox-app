import React, { Component } from 'react';
import { Redirect } from 'react-router-dom'

class Connexion extends Component {

    state = {
        pseudo: '',
        goToChat: false
    }

    handleChange = (event) => {
        const pseudo = event.target.value
        this.setState({ pseudo })
    }

    handleSubmit = (event) => {
        event.preventDefault();
        this.setState({ goToChat: true })
    }

    render() {
        const userState = this.state

        if (userState.goToChat) {
            return <Redirect push to={`/pseudo/${userState.pseudo}`} />
        }

        return (
            <div className='connexionBox'>
                <form
                    className='connexion'
                    onSubmit={this.handleSubmit}
                >
                    <input
                        value={userState.pseudo}
                        onChange={this.handleChange}
                        type="text"
                        placeholder="Pseudo"
                        required
                    />
                    <button type='submit'>Go</button>
                </form>
            </div>
        );
    }
}

export default Connexion;