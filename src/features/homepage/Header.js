import React from 'react'
import {Link} from 'react-router-dom';
export const Header = () => {
    return (
        <div>
            <header className='main-header'>
                <h1>Remote Cloud Resort</h1>
                <div className='navbar'>
                </div>
                <div className='navbar'>
                <Link to='/'>ROOMS</Link>
                </div>
                <div className='navbar'>
                </div>
            </header>
        </div>
    )
}

export default Header;
