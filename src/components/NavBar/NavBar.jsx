import { Link } from "react-router-dom"
import { ImCross } from 'react-icons/im';
import { GiHamburgerMenu } from 'react-icons/gi';
import './NavBar.scss'
import { useState, useEffect } from "react";

const NavBar = ({ routes }) => {

    const [button, setButton] = useState(false)
    const [menu, setMenu] = useState(true)

    const showButton = () => {
        if (window.innerWidth <= 960) {
            setButton(true);
        } else {
            setButton(false);
        }
    };

    window.addEventListener('resize', showButton);

    useEffect(() => {
        showButton()
    }, []);

    return (
        <nav className="navbar-container">
            <div className="navbar container">
                <div>
                    <Link className="logo-link" to='/'>😉 LOGO</Link>
                </div>
                <div>
                    {button &&
                        <button
                            onClick={() => setMenu(!menu)}
                            className="mobile-menu-btn">
                            {
                                menu
                                    ? <GiHamburgerMenu />
                                    : <ImCross />
                            }
                        </button>}
                </div>
                <ul className={menu ? 'menu-list active' : 'menu-list'}>
                    {routes.map(route =>
                        <li className="menu-item" key={route.url}><Link onClick={() => setMenu(true)} className="menu-link" to={route.url}>{route.label}</Link></li>
                    )}
                </ul>
            </div>
        </nav>
    )
}

export default NavBar