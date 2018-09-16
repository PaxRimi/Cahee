import React from "react";
import raspberry from "./images/raspberry_burned.png"
class About extends React.Component{
    render(){
        return(
            <section className="about">
                <div className="container">
                    <div className="about_txt">
                        <h2>About Us</h2>
                        <p>Abore Cahee magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum.</p>
                        <p>Nim id est laborum. Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore.</p>
                    </div>
                    <img src={raspberry} alt="cup with raspberries"/>
                </div>
            </section>
        )
    }
}

export default About;