import React,{Component} from "react";
import Peach from "./images/peach.png";
import blueberry from "./images/blueberry.png";
import blackberry from "./images/blackberry.png";
import milk from "./images/milk.png";
import presimmons from "./images/persimmons.png";

class Gallery extends React.Component{
    constructor(props){
        super(props);

        this.state = {
            show: false,
        }
    }

    handleBtnClick = () => {

        if (this.state.show === false) {
            this.setState({
                show: true,
            })
        } else {
            this.setState({
                show: false,
            });
        }
    };

    render(){
        const ShowingImg = <div className="gallery_imgShowingUp">
            <img src={milk} alt="cup of milk with blueberries"/>
            <img src={presimmons} alt="presimmons fruit"/>
        </div>;

        return(
            <section className="gallery" id="gallery">
                <div className="container">
                    <h2>
                        Gallery
                    </h2>
                    <p>
                        Consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                    </p>
                    <div className="gallery_imgStart">
                        <img src={Peach} alt="Peach in peaces on the plate with knife"/>
                        <div className="gallery_imgStart-smallImg">
                            <img src={blueberry} alt="blueberries in bowl"/>
                            <img src={blackberry} alt="blackberry on plate"/>
                        </div>
                    </div>
                    {this.state.show === true ? ShowingImg : null}
                    <button onClick={this.handleBtnClick}>VIEW MORE</button>
                </div>
            </section>
        )
    }
}

export default Gallery;