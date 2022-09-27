window.onload = () => {
  let places = staticLoadPlaces();
  renderPlaces(places);
};

function staticLoadPlaces() {
  return [
    {
      name: 'Magnemite',
      location: {
          lat: 53.5951350,
          lng: 10.0002448,
        }
    }
  ];
}

function renderPlaces(places) {
  let scene = document.querySelector('a-scene');

  places.forEach((place) => {
    let latitude = place.location.lat;
    let longitude = place.location.lng;

    let model = document.createElement('a-entity');
    model.setAttribute('gps-entity-place', `latitude: ${latitude}; longitude: ${longitude};`);
    model.setAttribute('gltf-model', './assets/magnemite/scene.gltf');
    model.setAttribute('rotation', '0 100 0');
    model.setAttribute('animation-mixer', '');
    model.setAttribute('scale', '0.25 0.25 0.25');

    model.addEventListener('loaded', () => {
      window.dispatchEvent(new CustomEvent('gps-entity-place-loaded'))
    });

    scene.appendChild(model);
  });
}