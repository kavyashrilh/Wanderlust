//     mapboxgl.accessToken=mapToken;

//     const map = new mapboxgl.Map({
//         container: 'map', // container ID
//         center: listing.geometry.coordinates, // starting position [lng, lat]. Note that lat must be set between -90 and 90
//         zoom: 9 // starting zoom
//     });
    
// const marker= new mapboxgl.Marker({color:"red"})
//         .setLngLat(listing.geometry.coordinates)
//         .setPopup( new mapboxgl.Popup({offset: 25})
//     .setHTML(`<h4>${listing.title}</h4><p>Exact location will be provided after booking!</p>`)
//     )
//         .addTo(map);
        
mapboxgl.accessToken = mapToken;

// Create map
const map = new mapboxgl.Map({
    container: 'map',
    center: listing.geometry.coordinates,
    zoom: 9
});

// Create custom marker element FIRST
const markerElement = document.createElement('div');

markerElement.className = 'custom-marker';

markerElement.innerHTML = '<i class="fa-solid fa-house"></i>';

// Add marker
const marker = new mapboxgl.Marker({
    element: markerElement,
    anchor: 'bottom',
    offset: [0, -10]
})
.setLngLat(listing.geometry.coordinates)
.setPopup(
    new mapboxgl.Popup({ offset: 25 })
    .setHTML(`
        <h4>${listing.title}</h4>
        <p>Exact location will be provided after booking!</p>
    `)
)
.addTo(map);