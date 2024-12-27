import './App.css';

// 1 - config react router
import {BrowserRouter, Routes, Route, Navigate} from 'react-router-dom'

//components
import Navbar from "./components/Navbar";

// pages
import Home from './pages/Home'
import About from './pages/About'
import Product from './pages/Product';
import Info from './pages/Info';
import NotFound from './pages/NotFound';
import SearchForm from './pages/SearchForm';
import Search from './pages/Search';

function App() {
  return (
    <div className="App">
      <h1>REACT ROUTER</h1>
      <BrowserRouter>
        {/* 2 - Links com react router */}
        <Navbar />
        {/* 9 - Search Form */}
        <SearchForm />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/about' element={<About />} />
          {/* 6 - nested routes */}
          <Route path='/products/:id/info' element={<Info />} />
          {/* 4 - rota dinamica */}
          <Route path='/products/:id' element={<Product />} />
          {/* 9 - search */}
          <Route path='/search' element={<Search />} />
          {/* 10 - redirecionando */}
          <Route path='/company' element={<Navigate to="/about" />} />
          {/* 7 - no match route */}
          <Route path="/*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
