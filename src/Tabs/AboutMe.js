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
                            <p> 
                                Software Engineer skilled in both software development and hardware integration. Demonstrated proficiency in
                                programming languages including Python, JavaScript, and C++, complemented by hands-on experience in circuit
                                board programming and test bench creation. Utilizes a blend of front-end and back-end tools, such as React and
                                MongoDB, to enhance product functionality and user experience, ensuring robust, scalable solutions in
                                technology projects.
                            </p>
                        <p>Hello I am John Mejia</p>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default AboutMe;
