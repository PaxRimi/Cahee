import React from "react";

class Footer extends React.Component{

    render(){
        return(
            <footer>
                <div className="container">
                    <p>
                        &copy; 2015 Company. All right reserved.
                    </p>
                    <p className="logo">
                        Cahee
                    </p>
                    <p>
                        Made with
                        <span>
                            love
                        </span>
                        by Auskteez
                    </p>
                </div>
            </footer>
        )
    }
}

export default Footer;