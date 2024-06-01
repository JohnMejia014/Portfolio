import React from 'react';
import './AboutMe.css';
import UTSelfie from '../UTSelfie.jpg';

const AboutMe = () => {
    return (
        <div className='aboutme' id='aboutme'>
            <div className='container'>
                <div className='col-1'>
                    <img src={UTSelfie} alt='John Mejia' />
                </div>
                <div className='col-2'>
                    <div className='content'>
                        <h2>About Me</h2>
                        <span className='line'></span>
                        <p>Intense is an International Financial Planning company with offices in multiple jurisdictions over the world. Working with Intense gives me the ability to advise international expatriates living in the Middle East from where I live in the USA.</p>
                        <p>I am John Mejia, a senior advisor for an independently owned financial planning company called Intense.</p>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default AboutMe;
