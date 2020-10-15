import React from 'react';
import { Link } from 'gatsby';

const Header = () => {
    return(
        <div className="Header">
            <Link to={`/`} className='inline-block'>
                <h3>Logo</h3>
            </Link>
            <Link to={`/about/`} className='float-right'>
                <h3>About</h3>
            </Link>
        </div>
    ) 
}

export default Header;