import React from 'react'
import logo from "../images/shield-158587_640.png";

export const Footer = () => {
        return(
            <div className='footer'>
                <div className='footer-items'>
                    <div className='logos'>
                        <img src={logo} className="logo-item" alt={logo}/>
                        <i className="fab fa-instagram fa-3x icon"></i>
                        <i className="fab fa-facebook-f fa-3x icon"></i>
                        <i className="fab fa-twitter fa-3x icon"></i>
                    </div>
                    <div className='informacion'>
                        <p className='link'><em>Brastlewark´s Town Hall</em></p>
                    </div>
                    <div className='links'>
                        <p className='link'>Web Map</p>
                        <p className='link'>Contact</p>
                        <p className='link'>Notice</p>
                        <p className='link'>Legal</p>
                        <p className='link'>Accessibility</p>
                    </div>
                </div>
            </div>
        )
}
