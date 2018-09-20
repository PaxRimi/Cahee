import React from "react";
import trolley from "./images/trolley.png"
import sun from "./images/sun.png"
import earth from "./images/earth.png"
import carrot from "./images/carrot.png"

class Services extends React.Component{
    render(){
        return(
            <section className="services" id="services">
                <div className="container">
                    <div className="services_title">
                        <h2>
                            Our Services
                        </h2>
                    </div>
                    <div className="services_list">
                        <ul>
                            <li>
                                <a href="#">
                                    <span>
                                        Online Shopping
                                    </span>
                                    <img src={trolley}/>
                                </a>
                            </li>
                            <li>
                                <a href="#">
                                    <span>
                                        Quality Product
                                    </span>
                                    <img src={sun}/>
                                </a>
                            </li>
                            <li>
                                <a href="#">
                                    <span>
                                        Domestic & International Delivery
                                    </span>
                                    <img src={earth}/>
                                </a>
                            </li>
                            <li>
                                <a href="#">
                                    <span>
                                        Well Organized
                                    </span>
                                    <img src={carrot}/>
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>
            </section>
        )
    }
}

export default Services;