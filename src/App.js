import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import AllOrders from './Components/AllOrders/AllOrders';
import DashboardNavigation from './Components/Dashboard/DashboardNavigation/DashboardNavigation';
import Home from './Components/Home';
import Footer from './Components/Shared/Footer/Footer';
import Header from './Components/Shared/Header/Header';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Header></Header>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/dashboard" element={<DashboardNavigation />} >
            <Route path="/dashboard/home" element={<AllOrders />} />
          </Route>
        </Routes>
        <Footer></Footer>
      </BrowserRouter>
    </div>
  );
}

export default App;
