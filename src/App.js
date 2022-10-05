import React from 'react';
import './App.css';
import Navbar from './components/Navbar/index';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages';
import About from './pages/about';
import SignUp from './pages/signup';
import Products from './pages/Products';
import Contact from './pages/ContactUs';

function App() {
return (
	<Router>
	<Navbar />
	<Routes>
		<Route path='/' exact component={Home} />
		<Route path='/about' component={About} />
		<Route path='/Products' component={Products} />
		<Route path='/ContactUs' component={Contact} />
		<Route path='/sign-up' component={SignUp} />
	</Routes>
	</Router>
);
}

export default App;
