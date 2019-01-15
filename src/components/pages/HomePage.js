import React, { Component } from "react";
import { BrowserRouter, Route, Link } from "react-router-dom";
import ReactGA from "react-ga";
import MoreI4cCard from "./../modules/MoreI4cCard";
import ButtonLink from "./../modules/ButtonLink";
import NavBar from "./../modules/NavBar";

class HomePage extends Component {
    
    render() {
        
        return (
            <section>
                <NavBar />
                <h1>Welcome To HomePage</h1>
                <BrowserRouter>
                    <>
                    <MoreI4cCard CardText = "This is some text" CardHeading = "This is a heading" CardImage = "http://writingexercises.co.uk/images2/randomimage/pipe-sculpture.jpg" />
                    <ButtonLink href="#" text={"link"}/>
                    <ButtonLink href="google.com" color={"green"} text="link2"/>
                    <ButtonLink href="react.com" color={"red"} text="link3"/>
                    </>
                </BrowserRouter>
            </section>
        );
    }
}

export default HomePage