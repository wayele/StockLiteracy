import React from "react";
import Serene from "./serene.jpg";
import Analytics from "./analytics.jpg";
import Background from "../components/Background";



function Landing() {
        return (
            <div className="body">
                <Background>
                <div className="container">
                    <h1 className="header" style={{fontFamily: "Georgia", fontSize: 70, textAlign: "center", color: "rgb(0, 195, 255)"}}>Stock Market Literacy</h1>
                    <br></br>
                    <div className="row">
                        <div className="col-2"></div>
                        <div className="col-8">
                            <iframe id="ytplayer" type="text/html" width="640" height="360"
                                src="https://www.youtube.com/embed/XDeD-HcAl7U?autoplay=1&mute=1&loop=1&playlist=XDeD-HcAl7U"
                                frameborder="0"
                                allow='autoplay; encrypted-media'>
                            </iframe>
                        </div>
                        <div className="col-2"></div>
                    </div>
                    <div className="row"></div>
                    <br></br>
                    <div className="row">
                        <div className="col-3">
                            <div className="card" style={{background:"rgba(0, 195, 255, 0.685)"}}>
                                <div className="card-body">
                                    <p style={{fontFamily: "Georgia", color: "black", textShadow: "grey"}}>New? Sign Up Here</p>
                                        <a href={"/signup"}>
                                            <img src={Serene} alt={"graph"}  className="img-thumbnail"></img>
                                        </a>
                                </div>
                            </div>
                        </div>
                        <div className="col-5"></div>
                        <div className="col-3">
                            <div className="card" style={{background:"rgba(0, 195, 255, 0.685)"}}>
                                <div className="card-body">
                                    <p style={{fontFamily: "Georgia", color: "black", textShadow: "grey"}}>Already a Member? Log In Here</p>
                                        <a href={"/login"}>
                                            <img src={Analytics} alt={"analytics"}  className="img-thumbnail"></img>
                                        </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                </Background>
            </div>
        )
}

export default Landing;