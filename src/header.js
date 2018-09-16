import React from "react";


    class Header extends React.Component{
        render(){
            return (
                <header>
                    <div className="container">
                        <span>
                            Cahee
                        </span>
                        <nav>
                            <ul>
                                <li>HOME</li>
                                <li>ABOUT</li>
                                <li>SERVICES</li>
                                <li>GALLERY</li>
                                <li>BLOG</li>
                                <li>CONTACT</li>
                            </ul>
                        </nav>
                        <i className="fas fa-bars"/>
                    </div>
                </header>
            )
        }
    }

export default Header;
