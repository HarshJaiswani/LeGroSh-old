import React from 'react';
import Footer from './Footer/Footer';
import PageHeader from './PageHeader/PageHeader';

const WhoWeAre = (props) => {
    return (
        <>
        <PageHeader UserName={props.UserName} back="" pos="absolute" pageName="Who We Are !" pageDescp="My Portfolio" />
        <h1 style={{
            width: '100%',
            height: '30vh',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            color: '#050d22',
            fontSize: '2.5rem',
            fontStyle: 'italic',
            fontFamily: 'monospace'
        }}>This secret will be reveled soon !</h1>
        <Footer />
        </>
    )
}

export default WhoWeAre
