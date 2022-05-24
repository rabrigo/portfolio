import React from 'react';
import Laptop from '../graphics/laptop-pixabay.png';

export default function About() {
    return (
        <div>
            <div>
                <img className="laptop-pic" src={Laptop}/>
            </div>
            <p className="about-text"> 
                My name is Ronnel and I am a Software Developer. This past March, I received my certificate in Full Stack Development at the University of Washington's Coding Boot Camp. This website contains my group projects from this program. Outside of coding, I enjoy making music, filming and editing videos, and dancing.
            </p>
        </div>
    )
}
