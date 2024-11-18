import Header from './components/header/header';
import Sidebar from './components/sidebar/sidebar';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './components/home/home';
import Profile from './components/profile/Profile';
import About from './components/About_us/about';
import Contacts from './components/contacts/contacts';
import ProductDetails from './components/product_details/ProductDetails';
import Statistics from './components/statistics/Statistics';
import Reviews from './components/reviews/Reviews';
import Notifications from './components/notifications/Notifications';
import Career from './components/career/Career';
import Promotions from './components/promotions/Promotions';
import Login from './components/auth/Login';
import Signup from './components/auth/Signup';
import { AuthProvider } from './context/AuthContext';
import ProtectedRoute from './components/auth/ProtectedRoute';

function App() {
  return (
    <AuthProvider>
      <div className="App">
        <Router>
          <Header />
          <Routes>
            <Route path="/login" element={<Login />} />
            <Route path="/signup" element={<Signup />} />
            <Route path="/" element={
              <ProtectedRoute>
                <><Sidebar /> <Home /></>
              </ProtectedRoute>
            } />
            <Route path="/Career" element={<Career />} />
            <Route path="/About_us" element={<About />} />
            <Route path="/Contact_us" element={<Contacts/>} />
            <Route path="/profile" element={
              <ProtectedRoute>
                <Profile />
              </ProtectedRoute>
            } />
            <Route path="/product_details" element={
              <ProtectedRoute>
                <><Sidebar /><ProductDetails /></>
              </ProtectedRoute>
            } />
            <Route path="/Statistics" element={<><Sidebar /><Statistics /></>} />
            <Route path="/Reviews" element={<><Sidebar /><Reviews /></>} />
            <Route path="/Notifications" element={<><Sidebar /><Notifications /></>} />
            <Route path="/Promotion_offers" element={<><Sidebar /><Promotions /></>} />
            <Route path="/*" element = {<div className='container'><h2>error</h2></div>}></Route>
          </Routes>
        </Router>
      </div>
    </AuthProvider>
  );
}
export default App;
