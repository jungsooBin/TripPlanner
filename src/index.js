const mapboxgl = require("mapbox-gl");
const makeMarker = require('./marker')

mapboxgl.accessToken = 'pk.eyJ1Ijoid2l0YmVycnliZWFuIiwiYSI6ImNqaW01am5mYjAwa3Mza3A4amR5MGZlcXEifQ.MDWOW5nCUDjRqUwfR-y1Jw';

const map = new mapboxgl.Map({
  container: "map",
  center: [-74.009, 40.705], // FullStack NY coordinates; alternatively, use [-87.6354, 41.8885] for Chicago
  zoom: 12, // starting zoom
  style: "mapbox://styles/mapbox/streets-v10" // mapbox has lots of different map styles available.
});



// const markerDomEl = document.createElement("div"); // Create a new, detached DIV
// markerDomEl.style.width = "32px";
// markerDomEl.style.height = "39px";
// markerDomEl.style.backgroundImage = "url(http://i.imgur.com/WbMOfMl.png)";

makeMarker('Activity', [-74.009, 40.705]).addTo(map)