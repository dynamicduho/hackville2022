import React from 'react';
import Header from "./Header";
import { render } from "react-dom";
//https://stackoverflow.com/questions/63124161/attempted-import-error-switch-is-not-exported-from-react-router-dom
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"; 
import "./App.css";
import RingCards from "./RingCards.js" ;
import SwipeButtons from "./SwipeButtons"

// based on https://www.youtube.com/watch?v=DQfeB_FKKkc

function App() {
    return (
        <div className="App">
            <Header />
            <Router>
                <Routes>
                    <Route path="/" element={ <RingCards/>} />
                </Routes>
                <Routes>
                <Route path="/" element={ <SwipeButtons/>} />
                </Routes>
            </Router>
        </div>
    );
}

export default App;