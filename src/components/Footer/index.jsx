import React from 'react';
import { Link } from 'react-router-dom';

import './style.scss';
import Social from 'components/Social';

const socials = [
    {icon: 'linkedin', path: 'https://www.linkedin.com/in/ericabreis/'},
    {icon: 'instagram', path: 'https://www.instagram.com/ericareix/?hl=pt-br'},
    {icon: 'github', path: 'https://github.com/EricaReis'}
]

function Footer({routes}) {
  return (
    <div className="footer-container">
        <div className="routes">
            {routes.length && routes.map(
                route => (
                <Link key={route.path} to={route.path}>{route.name}</Link>
                )
            )}
        </div>
        <div className="social"> 
                {socials.map(social => (
                    <Social key={social.path} icon={social.icon} path={social.path} />
                ))}
        </div>
    </div>
  );
}

export default Footer;