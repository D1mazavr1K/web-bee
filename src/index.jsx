import 'bootstrap/dist/css/bootstrap.min.css'
import './styles.scss'

import {createRoot} from "react-dom/client"
import {BrowserRouter, Route, Routes} from 'react-router-dom';
import React, {useEffect, useState} from "react"

import Header from "./pages/header"
import Navbar from "./pages/navbar"
import Activity from "./pages/activity"
import {Map} from "./pages/map"
import {Timer} from "./pages/timer"


function App() {
    const [timeOnSite, setTimeOnSite] = useState(0)

    useEffect(() => {
        const intervalId = setInterval(() => {
            setTimeOnSite(prevTime => prevTime + 1000)
        }, 1000)
        return () => clearInterval(intervalId)
    }, [])


    return (
        <>
            <Header/>
            <Navbar/>
            <Routes>
                <Route path="/" element={<Activity/>}/>
                <Route path="/map" element={<Map/>}/>
                <Route path="/timer" element={<Timer time={timeOnSite} />}/>
            </Routes>
        </>
    )
}


const root = createRoot(document.getElementById('app'))
root.render(
    <BrowserRouter>
        <App/>
    </BrowserRouter>
)
