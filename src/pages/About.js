import React from 'react';
import Laptop from '../graphics/laptop-pixabay.png';

export default function About() {
    return (
        <div className="about">
            <div>
                <img className="laptop-pic" src={Laptop}/>
            </div>
            <p className="about-text"> 
            My name is Ronnel and I am a Software Developer. In March of 2022, I received my certificate in Full Stack Development. This page contains my group projects from the coding boot camp I completed. Some of the technologies I enjoyed delving into include: JavaScript, HTML, CSS, Node, and React. During this program, I discovered my knack for developing smooth functionality and interfaces. You can see it throughout my apps on the project page. Outside of programming, I enjoy making music, videography, and dancing.
            </p>
        </div>
    )
}
