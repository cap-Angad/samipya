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

function App() {
  return (
    <div className="App">
    <Router>
      <Header />
      
      <Routes>
        <Route index element = {<><Sidebar /> <Home /></>}></Route>
        <Route path="/Career" element = {<Career />}></Route>
        <Route path="/About_us" element = {<About />}></Route>
        <Route path="/Contact_us" element = {<Contacts/>}></Route>
        <Route path="/profile" element={<Profile />} ></Route>
        <Route path="/product_details" element={<><Sidebar /><ProductDetails /></>} ></Route>
        <Route path="/Statistics" element={<><Sidebar /><Statistics /></>} />
        <Route path="/Reviews" element={<><Sidebar /><Reviews /></>} />
        <Route path="/Notifications" element={<><Sidebar /><Notifications /></>} />
        <Route path="/Promotion_offers" element={<><Sidebar /><Promotions /></>} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/*" element = {<div className='container'><h2>error</h2></div>}></Route>
      </Routes>
    </Router>
    </div>
  )};
export default App;
