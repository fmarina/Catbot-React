import React from 'react';
import './Home.css';
import Cat from './components/Cat/Cat';

const Home = () => {
    
    return (
        <div>
            <div className="home-catbot-container">
                <div className="home-catbot-content">
                    <Cat />
                    <div className="home-catbot-greeting">
                        <h1>Hola humano!</h1>
                        <label>¿Quieres charlar?</label>
                        <label>Haz click sobre mi para comenzar</label>
                    </div>
                </div>
            </div>
        </div>
    );

}

export default Home;