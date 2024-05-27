import 'bootstrap/dist/css/bootstrap.min.css'
import './styles.scss'
import ymaps from 'ymaps';


const sleep = ms => new Promise(resolve => setTimeout(resolve, ms));
async function initMap() {
    await sleep(2000);
    //очень хотелось подольше посмотреть на прелоадер карты
    let map = ymaps.load()
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
        });
    return map
}

const map = await initMap()
