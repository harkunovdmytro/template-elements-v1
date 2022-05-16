import { Link } from 'react-router-dom'
import './Button.scss'

const Button = ({ btnText, btnLink }) => {
    return (
        <div>
            <Link
                to={btnLink ? btnLink : '#'}
                className={`template-four-btn `}
            >{btnText ? btnText : "Full case study"}</Link>
        </div>
    )
}

export default Button