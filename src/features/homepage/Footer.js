import React from 'react'
import {Link} from 'react-router-dom';

export const Footer = () => {
    return (
        <div className='main-footer'>
            <div>
                <Link to='/reservation'>Reservation</Link>
            </div>

            <div>
                <Link to='/contact'>Contact</Link>
            </div>
        </div>
    )
}

export default Footer;
