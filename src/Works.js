import React from "react";
import world_data1 from './world_countries_data1.png';
import world_data2 from './world_countries_data2.png';
import leaderboard from './leader board.png'
import './Works.css'

const works = [
    {
        description: 'world data visualization',
        images: [world_data1,world_data2],
        url: 'https://vietnoy.github.io/world_countries_data/'
    }, 
    {
        description: 'leader board',
        images: [leaderboard],
        url: 'https://vietnoy.github.io/Leaderboard/'
    }
];
let count = 0;
const worksJSX = works.map((work) => {
    count++;
    const images = work.images.map((image) => <img src={image} alt="previews of my work"></img>);
    return(
    <div className="work" key={count}>
        <p className="description">{work.description}</p>
        <p className="previews">Preview of my work</p>
        <div className="images">
            {images}
        </div>
        <div className="link">
            <a href={work.url} target="blank">Click to view my work</a>
        </div>
    </div>
)});

export const Works = () => (
    <>
        <p className="head">My Works</p>
        {worksJSX}
    </>
);