import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import LandingPage  from './Pages/LandingPage/LandingPage.jsx';
import LoginPage from './Pages/LoginPage/LoginPage.jsx';
import './App.css';

function App() {
    return (
        <>
            <Router>
                <Routes>
                    <Route path='/' element={ <LandingPage /> } />
                    <Route path='/login' element={ <LoginPage /> } />
                </Routes>
            </Router>
        </>
    );
}

export default App
