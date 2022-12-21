import React from "react";
import { Link } from "react-router-dom";

const Error = () => {
    return (
        <div id="Error" style={{height: '85vh'}} className="justify-content-center align-items-center container d-flex flex-column">
            <img className="" src="" alt="" />
            <h2 className="my-3">404</h2>
            <h5 className="mb-5 text-center">Seems you've hit a dead end</h5>
            <Link to="/">
                <button className="px-4 py-3">RETURN TO HOME</button>
            </Link>
        </div>
    );
};

export default Error;
