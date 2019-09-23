import React from 'react'
import { withRouter } from 'react-router-dom'
import image from '../images/castle-3628643_1280.jpg'

class Landing extends React.Component {
    constructor(){
        super()
        this.state = ({
            name: '',
            errorMessage: '',
            gnomes: JSON.parse(localStorage.getItem('gnomes'))
        })
    }

    handleChange = (e) => {
        const { name, value} = e.target
        this.setState({[name]:value})
    }

    handleLogin = (e) =>{
        e.preventDefault()
        this.props.gnomes.map(gnome  => {
            if(this.state.name === gnome.name) {
                this.setState({errorMessage: ''})
                sessionStorage.setItem('gnome', JSON.stringify(gnome))
                this.props.refreshSession(gnome)
            }
            return ''
        })
        this.setState({errorMessage: 'Usuario no encontrado'})
    }

    handleLogout = (e) => {
        e.preventDefault()
        sessionStorage.clear()
        this.setState({id: ''})
    }

    render() {
        return (
            <div className='landing'>
                <img className='landing-image' src={image} alt="Landing" />
                <div className='container-form'>
                    <div className='form'>
                        <p className='form-item'>Name:</p>
                        <input className='form-item' type='text' onChange={this.handleChange} name='name' placeholder='Text input'></input>
                        <div className='errorLogin'>
                            <button className='button' onClick={this.handleLogin}>Login</button>
                            {this.state.errorMessage ? <p className='errorLogin'>User not found</p> : ''}
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default withRouter(Landing)