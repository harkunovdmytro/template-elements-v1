import './App.scss';
import { routes } from './AppData';
import { Routes, Route } from 'react-router-dom'
import ShowPageOne from './components/pages/ShowPageOne/ShowPageOne'
import ShowPageTwo from './components/pages/ShowPageTwo/ShowPageTwo'
import ShowPageThree from './components/pages/ShowPageThree/ShowPageThree'
import ShowPageFour from './components/pages/ShowPageFour/ShowPageFour'
import Home from './components/pages/HomePage/Home';
import NavBar from './components/NavBar/NavBar';

function App() {
    return (
        <div className="App" >
            <NavBar routes={routes} />
            <main className='main'>
                <Routes>
                    <Route path='/' element={<Home routes={routes} />} />
                    <Route path='/one' element={<ShowPageOne />} />
                    <Route path='/two' element={<ShowPageTwo />} />
                    <Route path='/three' element={<ShowPageThree />} />
                    <Route path='/four' element={<ShowPageFour />} />
                    <Route path='/five' element={<ShowPageOne />} />
                </Routes>
            </main>
        </div>
    );
}

export default App;