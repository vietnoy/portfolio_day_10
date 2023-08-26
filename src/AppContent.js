import React, {Component} from "react";
import { About } from "./About.js";
import { Contacts } from "./Contacts.js";
import { Works } from "./Works.js";
import './AppContent.css'

class App extends Component {
    constructor(props) {
        super(props);
        this.aboutRef = React.createRef();
        this.worksRef = React.createRef();
        this.contactsRef = React.createRef();
        this.state = {
            mode: 'light',
            about: {
                backgroundColor: 'white',
                color: 'black'
            },
            works: {
                backgroundColor: 'white',
                color: 'black'
            },
            contacts: {
                backgroundColor: 'white',
                color: 'black'
            } ,
        };
    }

    componentDidMount() {
        const options = {
            threshold: 0.9
        };

        const AboutObserver = new IntersectionObserver((entries) => {
            entries.forEach((entry) => {
                if (entry.isIntersecting) {
                    this.setState({about: {
                        backgroundColor: 'black',
                        color: 'white'
                    }});
                }
                else {
                    this.setState({about: {
                        backgroundColor: 'white',
                        color: 'black'
                    }});
                }
            });
        }, options);

        if (this.aboutRef.current) {
            AboutObserver.observe(this.aboutRef.current);
        }

        const ContactsObserver = new IntersectionObserver((entries) => {
            entries.forEach((entry) => {
                if (entry.isIntersecting) {
                    this.setState({contacts: {
                        backgroundColor: 'black',
                        color: 'white'
                    }});
                }
                else {
                    this.setState({contacts: {
                        backgroundColor: 'white',
                        color: 'black'
                    }});
                }
            });
        }, options);

        if(this.contactsRef.current) {
            ContactsObserver.observe(this.contactsRef.current);
        }

        const WorksObserver = new IntersectionObserver((entries) => {
            entries.forEach((entry) => {
                if (entry.isIntersecting) {
                    this.setState({works: {
                        backgroundColor: 'black',
                        color: 'white'
                    }});
                }
                else {
                    this.setState({works: {
                        backgroundColor: 'white',
                        color: 'black'
                    }});
                }
            });
        }, {threshold: 0.67});

        if(this.worksRef.current) WorksObserver.observe(this.worksRef.current);
    }

    render() {
        return (
            <div className="app">
            <header>
                <p className="title">Portfolio</p>
                <div className="navi_bar">
                    <a href="#about" style={this.state.about} className="nav">About Me</a>
                    <a href="#works" style={this.state.works} className="nav">My Works</a>
                    <a href="#contacts" style={this.state.contacts} className="nav">Contacts</a>
                </div>
            </header>
            <main>
                <div ref={this.aboutRef} id="about"><About /></div>
                <div ref={this.worksRef} id="works"><Works /></div>
                <div ref={this.contactsRef} id="contacts"><Contacts /></div>
            </main>
            </div>
        )
    }
};

export {App};