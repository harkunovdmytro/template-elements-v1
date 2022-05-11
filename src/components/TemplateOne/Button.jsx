import { Link } from 'react-router-dom'
import './Button.scss'

const COLORS = ['btn--red', 'btn--pink', 'btn--yellow']

const getBtnColor = (btnColor)=>COLORS.includes(btnColor)?btnColor:COLORS[0]

const Button = ({children, btnLink, btnColor, btnText}) => {
    return(
        <Link 
        to={btnLink} 
        className={`template-one-btn ${getBtnColor(btnColor)}`}
        >{btnText ? btnText : "VIEW MORE"}</Link>
    )
}

export default Button