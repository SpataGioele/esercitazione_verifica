import { shops } from "./data.js"

function main() {
    const map = buildMap()
    buildAllMarker(map)
}

// functions
function buildMap() {
    var map = L.map('map').setView([43.783633, 16], 5)
    L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
        maxZoom: 19,
        attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
    }).addTo(map)

    return map
}

function buildAllMarker(map) {
    for (let shop of shops) {
        var marker = L.marker([shop.latitude, shop.longitude]).addTo(map);
        marker.bindPopup(`<b>${shop.city}</b><br>${shop.address}`).openPopup();
    }
}

// listeners
document.addEventListener("DOMContentLoaded", main)