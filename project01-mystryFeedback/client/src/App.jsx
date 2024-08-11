import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import MainPage from './pages/MainPage';
import SignupPage from './pages/SignupPage';
import SigninPage from './pages/SigninPage';
import ErrorPage from './pages/ErrorPage';
import DashboardPage from './pages/DashboardPage';
import PublicProfile from './pages/PublicProfilePage';

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path='/' element={<MainPage />}/>
        <Route path='signup' element={<SignupPage/>}/>
        <Route path='login' element={<SigninPage/>}/>
        <Route path='dashboard' element={<DashboardPage/>}/>
        <Route path='u/:username' element={<PublicProfile/>}/>
        <Route path='*' element={<ErrorPage/>}/>
      </Routes>
    </Router>
    
  );
};

export default App;