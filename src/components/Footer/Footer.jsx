import React from "react";
import logo from "../../assets/logo.png";
import "./Footer.scss";
import { FontAwesomeIcon as FA } from "@fortawesome/react-fontawesome";
import { faLinkedin, faInstagram, faTelegram } from "@fortawesome/free-brands-svg-icons";

const Footer = () => {
    return (
        <footer className="footer pt-3 pb-4">
            <div className="container">
                <hr className="mt-3 pt-1 rounded" />
                <div className="row mt-1 justify-content-between">
                    <div className="col-6 col-sm-6 col-lg-3">
                        <div className="logo-box">
                            <img className="img-fluid" style={{ width: "70%" }} src={logo} alt="logo" />
                        </div>
                    </div>
                    <div className="col-12 col-sm-6 col-lg-3">
                        <strong>Contact Me</strong>
                        <ul className="mt-3">
                            <li>Call: 08086149495</li>
                            <li>Address: Lagos, Nigeria</li>
                        </ul>
                    </div>
                    <div className="col-12 col-sm-6 col-lg-3">
                        <strong className="">Connect with me:</strong>
                        <ul className="ps-0 d-flex mt-3 list-unstyled">
                            <li className="bg-dark d-flex pb-0 justify-content-center align-items-center" style={{ borderRadius: "50%", height: 50, width: 50 }}>
                                <a href="https://www.linkedin.com/in/jaypee-/" className="py-1 px-1 py-md-2 px-md-2 ">
                                    <FA className="mx-1 fa-1x" icon={faLinkedin} />
                                </a>{" "}
                            </li>
                            <li className="mx-4 bg-dark pb-0 d-flex justify-content-center align-items-center" style={{ borderRadius: "50%", height: 50, width: 50 }}>
                                <a href="https://t.me/jay9ee" className="py-1 px-1 py-md-2 px-md-2 ">
                                    <FA className="mx-1 fa-1x" icon={faTelegram} />
                                </a>{" "}
                            </li>
                            <li className="bg-dark pb-0 d-flex justify-content-center align-items-center" style={{ borderRadius: "50%", height: 50, width: 50 }}>
                                <a href="http://instagram.com/" className="py-1 px-1 py-md-2 px-md-2 ">
                                    <FA className="mx-1 fa-1x" icon={faInstagram} />
                                </a>{" "}
                            </li>
                        </ul>
                    </div>
                    <div className="col-12 col-sm-6 col-lg-3">
                        <p className="">
                            {new Date().getFullYear()}&copy; <a href="/">The Jaypee Team.</a>
                            <br />
                            All Rights Reserved.
                            <br />
                            <p style={{ display: "none" }}>We love Jaypee</p>
                        </p>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
