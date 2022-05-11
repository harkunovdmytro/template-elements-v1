import './App.scss';
import { routes } from './AppData';
import { Routes, Route } from 'react-router-dom'
import ShowPageOne from './components/pages/ShowPageOne/ShowPageOne'
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
                    <Route path='/two' element={<ShowPageOne />} />
                    <Route path='/three' element={<ShowPageOne />} />
                    <Route path='/four' element={<ShowPageOne />} />
                    <Route path='/five' element={<ShowPageOne />} />
                </Routes>
            </main>
        </div>
    );
}

export default App;