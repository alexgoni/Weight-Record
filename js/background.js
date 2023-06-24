const images = [
  'url("./src/mainimage1.jpg")',
  'url("./src/mainimage2.jpg")',
  'url("./src/mainimage3.jpg")',
];

const chosenImage = images[Math.floor(Math.random() * images.length)];

document.body.style.backgroundImage = `linear-gradient(rgba(0, 0, 0, 0.3), rgba(0, 0, 0, 0.1)), ${chosenImage}`;
