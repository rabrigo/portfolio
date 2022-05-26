import React from 'react'
import Furiendr from '../screenshots/furiendr.png'
import Ponder from '../screenshots/ponder.png'
import BrowserParty from '../screenshots/browser-party.png'

export default function Portfolio() {
    return (
    <>
        <ul className="portfolio">
        <li>
            <h3>Browser Party</h3>
            <a href="https://browser-party.herokuapp.com/">
                <img className="portfolio-pics" src={BrowserParty} />
            </a>
            <p>
                <a href="https://github.com/kingnolds/Browser-Party">https://github.com/kingnolds/Browser-Party</a> <br></br>
                <a href="https://browser-party.herokuapp.com">https://browser-party.herokuapp.com</a> <br></br>
                <br></br>
                This is an online application that allows users to create or join lobbies, chat with other players, and compete against them in up to 3 mini games. My work for this project consisted of styling the interface and making it mobile responsive, connecting React components, and confirming that backend information was rendering on the client side.
                <br></br>
                <br></br> 
                Languages and tools: React.js, Socket.IO, Adobe Photoshop
            </p>           
        </li>
            <li>
                <h3>Ponder</h3>
                <a href="https://pacific-ravine-12135.herokuapp.com/">
                    <img className="portfolio-pics" src={Ponder} />
                </a>
                <p>
                    <a href="https://github.com/Chrisle206/ponder">https://github.com/Chrisle206/ponder</a> <br></br>
                    <a href="https://pacific-ravine-12135.herokuapp.com">https://pacific-ravine-12135.herokuapp.com</a> <br></br>
                    <br></br>
                    Ponder is a social media platform that allows users to post anonymously, upvote, downvote, and respond to posts. I worked with Handlebars to create templates to refactor our workflow. Using JavaScript, I connected modular routes to front end components and created the upvote/downvote limit.
                    <br></br> 
                    <br></br> 
                    Languages and tools: Node, Handlebars, Bootstrap, MongoDB
                </p>
            </li>
            <li>
                <h3>Furiendr</h3>
                <a href="https://mweyer.github.io/First-Group-Project/">
                    <img className="portfolio-pics" src={Furiendr} />
                </a>
                <p>
                    <a href="https://github.com/mweyer/First-Group-Project">https://github.com/mweyer/First-Group-Project</a> <br></br>
                    <a href="https://mweyer.github.io/First-Group-Project">https://mweyer.github.io/First-Group-Project</a> <br></br>
                    <br></br>
                    This is a rescue pet adoption website using RescueGroup.org's API to search locally for pets. I studied API documentation to apply filters to fetch requests to allow attributes for searches. Using jQuery, I was able to obtain input values and pass them into backend requests. 
                    <br></br> 
                    <br></br> 
                    Languages and tools: HTML5, CSS, Javascript, jQuery, MaterializeUI
                </p>
            </li>
        </ul>
    </>
    )
}
