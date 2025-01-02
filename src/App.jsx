import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import LandingPage  from './Pages/LandingPage/LandingPage.jsx';
import LoginPage from './Pages/LoginPage/LoginPage.jsx';
import Layout from './components/Layouts/Layout.jsx';
import './App.css';

function App() {
    return (
        <>
            <Router>
                <Routes>
                    {/* Parent Route with Layout */}
                    <Route path='/' element={ <Layout /> }>
                        <Route index element={ <LandingPage /> } />
                        <Route path='/login' element={ <LoginPage /> } />
                    </Route>
                </Routes>
            </Router>
        </>
    );
}

export default App
