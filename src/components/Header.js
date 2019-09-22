import React from 'react'
import { withRouter } from 'react-router-dom'
import logo from '../images/shield-158587_640.png'

class Header extends React.Component{
    state = {
        returnPage: this.props.returnPage,
        logout: this.props.logout
    }

    logout = () => this.props.handleLogout()

    render() {
        const { logout,returnPage } = this.state
        return(
            <nav className='header' role="navigation" aria-label="main navigation">
                <div className='header-item'>
                    {logout ? <button className='button' onClick={this.logout}>Logout</button> : ''}
                    {returnPage ? <button className='button' onClick={this.props.history.goBack}>Return</button> : ''}
                </div>
                <div className='header-item'>
                    <img src={logo} className="logo-item" alt={logo}/>
                </div>
            </nav>
        )
    }
}

export default withRouter(Header)