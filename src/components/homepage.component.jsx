import React from 'react';

import './homepage.styles.scss';

const HomePage = () => (
    <div className='homepage'>
        <div className='directory-menu'>
            <div className='menu-item'>
                <div className='content'>
                    <h1 className='title'> HATS </h1>
                    <span className='subtitle'> HATS</span>
                </div>
            </div>
            <div className='menu-item'>
                <div className='content'>
                    <h1 className='title'> JACKETS </h1>
                    <span className='subtitle'> JACKETS </span>
                </div>
            </div>
            <div className='menu-item'>
                <div className='content'>
                    <h1 className='title'> SHOES </h1>
                    <span className='subtitle'> SHOES </span>
                </div>
            </div>
            <div className='menu-item'>
                <div className='content'>
                    <h1 className='title'> WOMENS </h1>
                    <span className='subtitle'> WOMENS </span>
                </div>
            </div>
            <div className='menu-item'>
                <div className='content'>
                    <h1 className='title'> MENS </h1>
                    <span className='subtitle'> MENS </span>
                </div>
            </div>
        </div>
    </div>
);

export default HomePage;