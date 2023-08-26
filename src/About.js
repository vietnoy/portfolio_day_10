import React, { Component } from "react";
import './About.css';

class Author extends Component {
    constructor(props) {
        super(props);
        this.state = {
            sentence: this.myInfo(),
            displaySentence: ""
        };
    }

    componentDidMount() {
        this.effect();
    }

    myInfo() {
        const fullName = `${this.props.firstName} ${this.props.middleName} ${this.props.lastName}`;
        return `Hello, my name is ${fullName} and I am studying ${this.props.major} at ${this.props.school}. I am a ${this.props.job}.`;
    }

    effect() {
        const { sentence } = this.state;
        let count = 0;
        const interval = setInterval(() => {
            if (count < sentence.length) {
                this.setState({
                    displaySentence: this.state.displaySentence + sentence.charAt(count)
                })
                count++;
            } else {
                clearInterval(interval);
            }
        }, 100);
    }

    render() {
        return (
            <>
                <p className="hello">Hey there!</p>
                <p className="content">{this.state.displaySentence}</p>
            </>
        );
    }
}

export const About = () => (
    <Author
        firstName="Do"
        middleName="Vinh"
        lastName="Khang"
        job="web developer"
        school="Hanoi University of Science and Technology"
        major="Computer Science"
    />
);


