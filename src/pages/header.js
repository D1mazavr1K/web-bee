import React from "react"

export default class Header extends React.Component {
    render() {
        return (
            <header className="d-flex flex-wrap justify-content-between px-4">
                <div className="d-flex align-items-center header_left mt-4">
                    <img src="../../public/icons/Back.png" className="icon d-block"></img>
                    <span><strong>User pages</strong> - Profile</span>
                </div>
                <ul className="nav col-12 col-lg-auto my-2 justify-content-center">
                    <li>
                        <a href="#" className="nav-link text-secondary">
                            <img src="../../public/icons/Chart.png" className="icon d-block mx-auto"></img>
                            <span>Statistics</span>
                        </a>
                    </li>
                    <li>
                        <a href="#" className="nav-link text-secondary">
                            <img src="../../public/icons/Calculate.png" className="icon d-block mx-auto"></img>
                            <span>Invoices</span>
                        </a>
                    </li>
                    <li>
                        <a href="#" className="nav-link text-secondary">
                            <img src="../../public/icons/Receipt.png" className="icon d-block mx-auto"></img>
                            <span>Schedule</span>
                        </a>
                    </li>
                </ul>
            </header>
        )
    }
}
