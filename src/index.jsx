import 'bootstrap/dist/css/bootstrap.min.css'
import './styles.scss'
import ymaps from 'ymaps';

import React from 'react'
import {createRoot} from "react-dom/client";


const sleep = ms => new Promise(resolve => setTimeout(resolve, ms));
async function initMap() {
    await sleep(2000);
    return ymaps.load()
        .then(maps => {
            const map = new maps.Map('map', {
                center: [56.741114, 37.225566],
                zoom: 17
            });
            const marker = new maps.GeoObject({
                geometry: {
                    type: "Point",
                    coordinates: [56.741114, 37.225566]
                },
                properties: {
                    iconContent: 'Я здесь!',
                    hintContent: 'Да да.... я все еше живу в общежитие университета'
                }
            })
            map.geoObjects.add(marker)
            document.getElementById('rotate').remove()
        })
        .catch(error => {
            console.log('Failed to load Yandex Maps', error)
        })
}

await initMap()


function App() {
    return (
        <>
            <h1>HELLO</h1>
        </>
    )
}


const root = createRoot(document.getElementById('app'))
root.render(<App/>)
