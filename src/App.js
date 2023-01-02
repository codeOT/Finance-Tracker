import { BrowserRouter, Route, Routes, redirect } from 'react-router-dom'
import { useAuthContext } from './hooks/useAuthContext';
import Navbar from './components/Navbar';
import Home from './pages/home/Home'
import Login from './pages/login/Login'
import SignUp from './pages/signup/SignUp'
import { UserRoute } from './pages/UserRoute';
import { VisitorsRoute } from './pages/VisitorsRoute';

function App() {
  
  const { authIsReady, user } = useAuthContext()

  return (
    <div className="App">
      {authIsReady && (
      <BrowserRouter>
      <Navbar />
        <Routes>
            <Route path='/' element={<UserRoute><Home /></UserRoute>}/>
            <Route path='/login' element={<VisitorsRoute><Login /></VisitorsRoute>}/>
            <Route path='/signUp' element={<VisitorsRoute><SignUp /></VisitorsRoute>}/>
        </Routes>
      </BrowserRouter>
      )}
    </div>
  );
}

export default App;
