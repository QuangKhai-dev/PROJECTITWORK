import { Button } from 'antd';
import React from 'react';

const Navbar: React.FC = () => {
    return (
        <div className='navbar' >
            <div className="logo">
                <a href="/">
                    <img width={120} src="./Img/logo_CyberSoft.png" alt="" />
                </a>
            </div>
            <div className='menuItem_navbar'>
                <ul >
                    <li className='item_active'><a href="#">Dashboard</a></li>
                    <li><a href="a">My CV</a></li>
                    <li><a href="b">Skills</a></li>
                    <li><a href="c">Company</a></li>
                    <li><a href="d">Job Search</a></li>
                </ul>
            </div>
            <div className='button_user'>
                <Button type='text'>Login</Button>
            </div>
        </div>
    )
}

export default Navbar;