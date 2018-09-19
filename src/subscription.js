import React from "react";

class Subscription extends React.Component{
    constructor(props){
        super(props);

        this.state = {
            email: "",
        }
    }

    handleEmailChange = (e) => {
      this.setState({
          email: e.currentTarget.value,
      })
    };

    render(){
        return(
            <section className="subscription">
                <div className="container">
                    <h2>
                        Subscribe To Us
                    </h2>
                    <p>
                        Dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.
                    </p>
                    <form>
                        <input type="email" value={this.state.email} onChange={this.handleEmailChange} placeholder="Your email address..."/>
                        <input type="submit" value="SUBSCRIBE"/>
                    </form>

                </div>
            </section>
        )
    }
}

export default Subscription;