import React from 'react';
import { Link } from 'react-router-dom';
import { FaLinkedin, FaGithub, FaInstagram } from 'react-icons/fa';

function Social({ icon, path }) {

    function whichIcon() {
        switch (icon) {
            case 'linkedin':
                return <FaLinkedin style={{ fontSize: 24 }} />
                case 'github':
                return <FaGithub style={{ fontSize: 24 }} />
                case 'instagram':
                return <FaInstagram style={{ fontSize: 24 }} />
        
            default:
                break;
        }
    }
  return (
      <Link to={path}>
        {whichIcon()}
      </Link>
  )
}

export default Social;