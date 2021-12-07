import React from 'react';
import './MyDailyWork.css';
import logo from '../../Assets/logo.png';
import WorkCards from '../WorkCards/WorkCards';
import Footer from '../Footer/Footer';

const MyDailyWork = () => {
    return (
        <div className="mywork">
            <div className="worknav">
                <img src={logo} alt="" />
                <a href="/">LeGroSh</a>
            </div>
            <span style={
                {
                    display: 'inline-block',
                    width: '100%',
                    backgroundColor: '#d5f3ff',
                    fontSize: '2rem',
                    padding: '40px',
                    textAlign: 'center',
                    color: 'black',
                    letterSpacing: '2px',
                    wordSpacing: '4px'
                }
            }>A Log Of My Work !</span>
            <div className="achieve">
            <div className="achievecards">
                <WorkCards />
                <WorkCards />
                <WorkCards />
                <WorkCards />
                <WorkCards />
                <WorkCards />
                <WorkCards />
                <WorkCards />
                <WorkCards />
            </div>
            <div className="stampbar">
                <h1>Date Stamp</h1>
                <a href="/">26th Nov 2021</a>
                <a href="/">26th Nov 2021</a>
                <a href="/">26th Nov 2021</a>
                <a href="/">26th Nov 2021</a>
                <a href="/">26th Nov 2021</a>
                <a href="/">26th Nov 2021</a>
                <a href="/">26th Nov 2021</a>
                <a href="/">26th Nov 2021</a>
            </div>
            </div>
            <Footer />
        </div>
    )
}

export default MyDailyWork
