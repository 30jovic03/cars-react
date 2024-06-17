import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import './App.css';
import Header from './shared/Header';
import ScrollToTop from './shared/ScrollToTop';
import HomePage from './components/HomePage';
import NewsPage from './components/NewsPage';
import CategoryPage from './components/CategoryPage';
import ReviewsPage from './components/ReviewsPage';
import BuyersGuidePage from './components/BuyersGuidePage';
import CarsPage from './components/CarsPage';

export default function App() {
  return (
    <>
      <Router>
        <ScrollToTop />
        <Header />
        <Routes>
          <Route exact path="/" element={ <HomePage/> } />
          <Route path="/category/:cId" element={ <CategoryPage /> } />
          <Route path="/news/:nId" element={ <NewsPage /> } />
          <Route path="/reviews" element={ <ReviewsPage /> } />
          <Route path="/buyers-guide" element={ <BuyersGuidePage /> } />
          <Route path="/search-car" element={ <CarsPage /> } />
        </Routes>
      </Router>
    </>
  )
}
