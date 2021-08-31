import React from 'react';
import Header from './Header';
import Footer from './Footer';
import { Child } from './Child';

function MainApp() {
    return (
        <div>
            <Header></Header>
            <Child color="pink" onClick={()=>{ alert('hi... clicked')}}>
                <div>
                    <p>Welcome to the main APP</p>
                </div>
            </Child>
            <Footer></Footer>
        </div>
    );
}

export default MainApp;
