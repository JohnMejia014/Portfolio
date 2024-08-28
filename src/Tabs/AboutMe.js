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
                            <p>Hello I am John Mejia,</p>
                            <p> 
                                I am a Software Engineer skilled in both software development and hardware integration. Demonstrated proficiency in
                                programming languages including Python, Java, JavaScript, and C++, complemented by hands-on experience in circuit
                                board programming and test bench creation. I utilize a blend of front-end and back-end tools, such as React and
                                AWS, to enhance product functionality and user experience, ensuring robust, scalable solutions in
                                technology projects.
                            </p>
                            <p>I attended the University of Texas and moved to the Austin area in 2007 when I was 5. I have a passion for sports, especially soccer, basketball, and football. I also enjoy running, going to the gym, and just about any outdoor activity. </p>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default AboutMe;
