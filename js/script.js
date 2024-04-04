import { shops, models, prices } from "./data.js"

function main() {
    const map = buildMap()
    buildAllMarker(map)
    buildChart("myChart")
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

function buildChart(canvasId) {
    const conf = chartConfig()
    const ctx = document.getElementById(canvasId);

    new Chart(ctx, {
            type: 'bar',
            data: {
            labels: conf.labels,
            datasets: conf.datasets
        },
        options: {
            scales: {
                y: {
                    beginAtZero: true
                }
            }
        }
    });

}

function chartConfig() {
    const conf = {
        labels: models,
        datasets: [
            {
                label: '#prices',
                data: prices,
                borderWidth: 1
            }
        ]
    }
    
    return conf
}

// listeners
document.addEventListener("DOMContentLoaded", main)