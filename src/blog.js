import React from "react";

class Blog extends React.Component{

    render(){
        return(
            <section className="blog" id="blog">
                <div className="container">
                    <h2>
                        Blog
                    </h2>
                    <p>
                        Dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit.
                    </p>
                    <div className="blog_news">
                        <div className="blog_news1">
                            <span>
                                20 nov
                            </span>
                            <a href="#">
                                <h3>
                                    Green Smoothies: Too Much of a Good Thing?
                                </h3>
                            </a>
                            <p>
                                By Auskteez - 2 hours ago
                            </p>
                        </div>
                        <div className="blog_news2">
                            <span>
                                14 nov
                            </span>
                            <a href="#">
                                <h3>
                                    Growing Food and a “Thirst” for Innovation
                                </h3>
                            </a>
                            <p>
                                By Auskteez - 3 hours ago
                            </p>
                        </div>
                        <div className="blog_news3">
                            <span>
                                10 nov
                            </span>
                            <a href="#">
                                <h3>
                                    Pesticides & Food: What You Need to Know
                                </h3>
                            </a>
                            <p>
                                By Auskteez - 6 hours ago
                            </p>
                        </div>
                    </div>
                    <button>
                        VIEW MORE
                    </button>
                </div>
            </section>
        )
    }
}

export default Blog;