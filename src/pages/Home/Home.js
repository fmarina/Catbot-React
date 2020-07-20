import React from 'react';
import './Home.css';
import Cat from './components/Cat/Cat';
import Fade from 'react-reveal/Fade';

const Home = () => {
    
    return (
        <div>
            <div className="home-catbot-container">
                <div className="home-catbot-content">
                    <Cat />
                    <div className="home-catbot-greeting">
                        <Fade opposite>
                            <h1>Hola humano!</h1>
                        </Fade>
                        <Fade bottom>
                            <label>¿Quieres charlar?</label>
                            <label>Haz click sobre mi para comenzar</label>
                        </Fade>
                    </div>
                </div>
            </div>
        </div>
    );

}

export default Home;