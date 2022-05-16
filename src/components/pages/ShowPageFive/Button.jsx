import { Link } from "react-router-dom"
import './Button.scss'

const Button = ({ isDark, children }) => {

    return (
        <Link
            className={isDark ? "btn" : "btn dark"}
            to='/five'>
            {children ? children : 'More'}
        </Link>
    )
}

export default Button