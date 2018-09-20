import React from "react";

class Contact extends React.Component{
    constructor(props){
        super(props);

        this.state = {
            name: "",
            email: "",
            phone: "",
            txt: "",
        }
    }

    handleNameChange = (e) =>{
        this.setState({
            name: e.currentTarget.value
        })
    };

    handleEmailChange = (e) => {
      this.setState({
          email: e.currentTarget.value,
      })
    };

    handlePhoneChange = (e) => {
      this.setState({
          phone: e.currentTarget.value,
      })
    };

    handelMessageChange = (e) => {
        this.setState({
            txt: e.currentTarget.value,
        })
    };

    render(){
        return(
            <section className="contact">
                <div className="container">
                    <h2>
                        Contact
                    </h2>
                    <p>
                        For new projects, ideas, business or anything
                        you'd like to discuss, contact with me!
                    </p>
                    <div>
                        <form>
                            <input type="text" value={this.state.name} onChange={this.handleNameChange} placeholder="Your name..." required/>
                            <input type="email" value={this.state.email} onChange={this.handleEmailChange} placeholder="Your email..." required/>
                            <input type="number" value={this.state.phone} onChange={this.handlePhoneChange} placeholder="Your phone number..." required/>
                            <textarea value={this.state.txt} onChange={this.handelMessageChange} placeholder="Your messge..." required/>
                            <input type="submit" value="Send Message"/>
                        </form>
                        <div className="address">
                            <h3>
                                ADDRESS
                            </h3>
                            <p>
                                123 City name, Street, City, Country
                            </p>
                            <h3>
                                EMAIL
                            </h3>
                            <p>
                                cahee@domain.com
                            </p>
                            <h3>
                                PHONE
                            </h3>
                            <p>
                                +012 345 6789
                            </p>
                        </div>
                    </div>
                </div>
            </section>
        )
    }
}

export default Contact;