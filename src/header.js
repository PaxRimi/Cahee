import React from "react";


    class Header extends React.Component{

        handleMenuClick = () => {
          let menu = document.querySelector("nav");
          if(menu.style.display === "block"){
              menu.style.display = "none";
          } else {
              menu.style.display = "block";
          }
        };

        handleLinkClick = () => {
            let menu = document.querySelector("nav");

            menu.style.display = "none";
        };

        render(){
            return (
                <header>
                    <div className="container">
                        <span>
                            Cahee
                        </span>
                        <nav>
                            <ul>
                                <li>
                                    <a href="#trial" onClick={this.handleLinkClick}>
                                        HOME
                                    </a>
                                </li>
                                <li>
                                    <a href="#about" onClick={this.handleLinkClick}>
                                        ABOUT
                                    </a>
                                </li>
                                <li>
                                    <a href="#services" onClick={this.handleLinkClick}>
                                        SERVICES
                                    </a>
                                </li>
                                <li>
                                    <a href="#gallery" onClick={this.handleLinkClick}>
                                    GALLERY
                                    </a>
                                </li>
                                <li>
                                    <a href="#blog" onClick={this.handleLinkClick}>
                                    BLOG
                                    </a>
                                </li>
                                <li>
                                    <a href="#contact" onClick={this.handleLinkClick}>
                                    CONTACT
                                    </a>
                                </li>
                            </ul>
                        </nav>
                        <i className="fas fa-bars" onClick={this.handleMenuClick}/>
                    </div>
                </header>
            )
        }
    }

export default Header;
