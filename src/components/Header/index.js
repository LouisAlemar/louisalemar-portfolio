import React from 'react';
import { Link } from 'gatsby';

import headerStyles from './Header.module.scss';
import logo from '../../images/logo.png';

const Header = () => {
    return(
        <div className={headerStyles.header_container}>
            <Link to={`/`} className='inline-block'>
                <img src={logo} alt="Louis Alemar Logo" className={headerStyles.logo}/>
            </Link>
            <div className='float-right'>
                <Link to={`/about/`} className={'inline-block ' + headerStyles.margin_right_20}>
                    <h3>About</h3>
                </Link>
                <Link to={`/portfolio/`} className={'inline-block ' + headerStyles.margin_right_20}>
                    <h3>Portfolio</h3>
                </Link>
                <Link to={`/contact/`} className={'inline-block ' + headerStyles.margin_right_20}>
                    <h3>Contact</h3>
                </Link>
            </div>
        </div>
    ) 
}

export default Header;