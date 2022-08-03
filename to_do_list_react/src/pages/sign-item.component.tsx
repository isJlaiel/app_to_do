import React, { FunctionComponent } from "react";
import { Link } from "react-router-dom";

const Sign: FunctionComponent =()=> {
    return (
        < div className="app">
        <nav>
            <h1>WELCOME</h1>
        <h2><Link to="Connect-item-component">se Connecter</Link></h2>
        <h2><Link to="inscrit-item-component">inscrire</Link></h2>
        </nav>
        </div>
    );
};

export default Sign;