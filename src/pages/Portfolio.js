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
                Online application that allows users to create or join a lobby and compete with other players in up to 3 mini games. Created dynamic pages by routing components and passing props with React.js, using CSS animations, and using stylized colors and images. Created game lobby chat with Socket.IO. Languages and tools: React.js, Socket.IO, Adobe Photoshop
            </p>    
            <br></br>           
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
                    Social media platform that allows users to post anonymously, upvote, downvote, and respond to posts. Created templates to render 3 most recent posts. Used JavaScript to connect modular routes to front end components and MongoDB to link users to posts. Languages and tools: Node, Handlebars, Bootstrap, MongoDB
                </p>
                <br></br>
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
                    Pet adoption website using Rescue API to search locally for rescue cats and dogs. Studied API documentation to apply filters to fetch requests to allow attributes for searches. Used jQuery to obtain input field values to pass into backend requests. Languages and tools: HTML5, CSS, Javascript, jQuery, MaterializeUI
                </p>
            </li>
        </ul>
    </>
    )
}
