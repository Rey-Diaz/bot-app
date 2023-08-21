import React from 'react';
import './App.css';
import Header from './Components/Header/Header.js';
import MainContent from './Components/MainContent/MainContent.js';
import Home from './Components/Pages/Home/Home.js';
import About from './Components/Pages/About/About.js';
import Services from './Components/Pages/Services/Services.js';
import Contact from './Components/Pages/Contact/Contact.js';
import Chat from './Components/Pages/Chat/Chat.js';
import Footer from './Components/Footer/Footer.js';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

function App() {
    return (
        <Router>
            <div className="App">
                <Header />
                <Routes>
                    <Route path="/" element={<MainContent />}>
                        <Route index element={<Home />} />
                        <Route path="about" element={<About />} />
                        <Route path="services" element={<Services />} />
                        <Route path="contact" element={<Contact />} />
                        <Route path="chat" element={<Chat />} />
                    </Route>
                </Routes>
                <Footer />
            </div>
        </Router>
    );
}

export default App;
