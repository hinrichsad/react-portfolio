import React from 'react'
import {Link} from 'react-router-dom';

function HomePage() {
    return (
        <div className="HomePage">
            <header className="hero">
                <h1 className="hero-text">
                    Hi, I am 
                    <span> Andrew Hinrichs,</span>
                </h1>
                <p className="h-sub-text">
                    and I am a full-stack developer.
                </p>
                <div className="icons">
                    <Link to="test" className="icon-holder">
                        
                    </Link>
                </div>
            </header>
        </div>
    )
}


export default HomePage;