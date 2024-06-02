const images = [
  "img/image1.jpg",
  "img/image2.jpg",
  "img/image3.jpg",
  "img/image4.jpg",
  "img/image5.jpg",
];
const randomimg = Math.floor(Math.random() * 10) % 5;
const backgroundimage = document.getElementById("backgroundimage");
backgroundimage.src = images[randomimg];
