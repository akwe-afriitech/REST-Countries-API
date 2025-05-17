import React from 'react';
import '../App.css';


const Header = () => {
    return (
        <header id='header' >
            <div>
                <h1>
                    Where in the world?
                </h1>
            </div>
            <div>
                <button>
                    <i className="fa-solid fa-moon"></i>
                    <span>Dark Mode</span>
                </button>
            </div>
           
        </header>
    );
};


export default Header;