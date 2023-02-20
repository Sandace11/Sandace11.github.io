let geoJSONData;
var map = L.map('map').setView([28, 84], 13);

// Detect if website is running on mobile broswer
if (document.documentElement.clientWidth < 500) {
    map.locate({setView: true, maxZoom: 16});

    function onLocationFound(e) {
        var radius = e.accuracy;
    
        L.marker(e.latlng).addTo(map)
            .bindPopup("You are within " + radius + " meters from this point").openPopup();
    
        L.circle(e.latlng, radius).addTo(map);
    }

    function onLocationError(e) {
        alert(e.message);
    }
    
    map.on('locationerror', onLocationError);
    
    map.on('locationfound', onLocationFound);
}


L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
    maxZoom: 19,
    attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
}).addTo(map);

const jsonFetch = async () => {
    const res = await fetch('./mapShaperExport2.json');
    const json = await res.json();
    return json;
}

var myStyle = {
    "stroke": true,
    "color": "#ff7800",
    "fill": true,
    "fillOpacity": 0.01,
    "weight": 2,
    "opacity": 0.8
};



const geojson = jsonFetch().then((geojsonFeature) => {
    // var geoDatalayer = L.geoJSON().addTo(map);
    // geoDatalayer.addData(geojsonFeature);
    L.geoJSON(geojsonFeature, {
        style(feature) {
            return myStyle;
        },

        onEachFeature,

        pointToLayer(feature, latlng) {
            return L.circleMarker(latlng, {
                radius: 8,
                fillColor: '#ff7800',
                color: '#000',
                weight: 1,
                opacity: 1,
                fillOpacity: 0.8
            });
        }
    }).addTo(map);
});

function onEachFeature(feature, layer) {
    let popupContent = `
    <p>District : ${feature.properties.DISTRICT} </p>
    <p>Palika Name : ${feature.properties.GaPa_NaPa} </p>
    <p>Type : ${feature.properties.Type_GN} </p>
    <p>Province : ${feature.properties.Province} </p>
    `;
    if (feature.properties) {
        layer.bindPopup(popupContent);
    }
}
