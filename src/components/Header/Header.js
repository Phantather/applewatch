import React from 'react'
import Item from "./Item";
import "./header.css"
import logo from "../../assets/header/logo.svg"


const Header = () => {
    return (
        <header className="header">
            <div className="container">
                <div className="header__nav">
                    <div className="header__logo">
                        <img src={logo} alt=""/>
                    </div>
                    <ul className="header__list">
                        <Item link="Design"/>
                        <Item link="Health"/>
                        <Item link="Workout"/>
                        <Item link="Activity"/>
                        <Item link="Connect"/>
                    </ul>
                </div>
            </div>
        </header>
    );
};

export default Header;