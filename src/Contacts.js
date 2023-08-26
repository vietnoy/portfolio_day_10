import React from "react";
import './Contacts.css';

export const Contacts = (props) => (
    <>
        <p className="cont">My Contacts</p>
        <div className="icon">
            <a href={props.facebook}><i className="fa fa-facebook"></i></a>
            <a href={props.github}><i className="fa fa-github"></i></a>
            <a href={props.insta}><i className="fa fa-instagram"></i></a>
        </div>
        <p className="thanks">
            Thanks for spending time looking through my Portfolio.
        </p>
    </>
)