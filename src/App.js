import { useState } from 'react';
import './App.css';
import './components/components.css';
import Footer from './components/Footer.jsx';
import Login from './components/Login.jsx';
import MarketCard from './components/MarketCard.jsx';
import Nav from './components/Nav.jsx';
import MarketCardSkeleton from './skeletons/MarketCardSkeleton';


function App() {
  const [adminAuthToken, setAdminAuthToken] = useState(null);
  const [loginPage, setLoginPage] = useState(false);

  const handleShowLogin = (show) => {
    setLoginPage(show);
  }

  return (
    <div className="App">
      <Nav 
       handleShowLogin={handleShowLogin}
      />
      <div className="intro-text">
        <h1>Welcome to Market Bank</h1>
      </div>
      <div className="markets">

        <MarketCardSkeleton />
        <MarketCardSkeleton />
        <MarketCardSkeleton />
        <MarketCardSkeleton />
      </div>
      <Footer />

      <Login
        loginPage={loginPage}
        handleShowLogin={handleShowLogin}
      />
    </div>
  );
}


export default App;
