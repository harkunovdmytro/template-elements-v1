import { Link } from 'react-router-dom'
import './Button.scss'

// const COLORS = ['btn--red', 'btn--pink', 'btn--yellow']

// const getBtnColor = (btnColor)=>COLORS.includes(btnColor)?btnColor:COLORS[0]

const Button = ({ children, btnLink, btnColor, btnText }) => {
    return (
        <div>
            <Link
                to={btnLink ? btnLink : '#'}
                className={`template-one-btn `}
            >{btnText ? btnText : "VIEW MORE"}</Link>
        </div>
    )
}

export default Button