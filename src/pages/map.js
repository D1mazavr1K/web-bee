import React from "react"
import ymaps from "ymaps"

export function Map() {

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

            })
            .catch(error => {
                console.log('Failed to load Yandex Maps', error)
            })
    }

    initMap().then(() => {
        let preloader = document.getElementById('rotate')
        if (preloader) {
            preloader.remove()
        }
    })

    return (
        <main className="container-fluid bg_div py-4 px-4 d-flex justify-content-center align-items-center">
            <div className="bg_white">
                <div id="map">
                </div>
                <div id="rotate"></div>
            </div>
        </main>
    )

}
