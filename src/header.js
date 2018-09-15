import React from "react";


    class Header extends React.Component{
        render(){
            return (
                <header>
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
                </header>
            )
        }
    }

export default Header;
