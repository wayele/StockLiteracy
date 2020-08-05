import React from "react";
import "./style.css";

function Background(props) {
    return (
        <div className="bg">
            {props.children}
        </div>
        
    );
}

export default Background;