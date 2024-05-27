import React from "react"
import {Link} from 'react-router-dom';

export default class Navbar extends React.Component {

    render() {
        return (
            <nav className="d-flex justify-content-between flex-wrap align-items-center px-4">
                <ul className="nav col-12 col-lg-auto justify-content-between">
                    <li>
                        <Link to="/" className="nav-link text-secondary">
                            <img src="../../public/icons/Menu.png" className="icon mx-auto"></img>
                            <span>Activity</span>
                        </Link>
                    </li>
                    <li>
                        <Link to="/map" className="nav-link text-secondary">
                            <img src="../../public/icons/Location.png" className="icon mx-auto"></img>
                            <span>Map</span>
                        </Link>
                    </li>
                    <li>
                        <Link to="/timer" className="nav-link text-secondary active">
                            <img src="../../public/icons/Time.png" className="icon mx-auto"></img>
                            <span>Time</span>
                        </Link>
                    </li>
                </ul>
                <ul className="nav col-12 col-lg-auto justify-content-between">
                    <li>
                        <a href="#" className="nav-link text-secondary">
                            <img src="../../public/icons/Docs.png" className="icon mx-auto"></img>
                            <span>Notes</span>
                        </a>
                    </li>
                    <li>
                        <a href="#" className="nav-link text-secondary">
                            <img src="../../public/icons/People.png" className="icon mx-auto"></img>
                            <span>Friends</span>
                        </a>
                    </li>
                    <li>
                        <a href="#" className="nav-link text-secondary">
                            <img src="../../public/icons/Jpg.png" className="icon mx-auto"></img>
                            <span>Photos</span>
                        </a>
                    </li>
                    <li>
                        <a href="#" className="nav-link text-secondary">
                            <img className="icon" src="../../public/icons/Settings.png"></img>
                            <img className="icon" src="../../public/icons/Small_Arrow_Down.png"></img>
                        </a>
                    </li>
                </ul>
            </nav>
        )
    }
}
