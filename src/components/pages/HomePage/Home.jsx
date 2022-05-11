import './Home.scss'
import { Link } from 'react-router-dom'

const Home = ({ routes }) => {
    return (
        <div className='home-container'>
            <div className='home container'>
                <h1>Hi, visitor</h1>
                <div className='hand'>🖐</div>
                <p>My name is <a className='text-link' href="https://github.com/harkunovdmytro">Harkunov Dmytro</a>.</p>
                <p>I recently started building websites.</p>
                <p>Hope it will be usefull for you.</p>
                <div>
                    <p>Here are examples of my templates:</p>
                    <ul className='routes'>
                        {routes.map(route => (
                            <li className='route' key={route.label}>
                                {route.label !== 'Home' && (<Link className='route-link' to={route.url}>{route.label}</Link>)}
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default Home