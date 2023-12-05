// Pestaña 3: Sketch.js
let Historia;
let pantallas;
let imagenes;
let textos;
let botones;


function setup() {
  size(600, 600);
  textos = new textos ();
  imagenes = new imagenes();
  pantallas = new pantallas ();
  botones = new botones ();
}

function draw() {
    background(0);
   textos.mostrarTexto(1);
  textFont(fuente);
  fill(255);
  tint(150);

}

function preload() {
  for (let n = 0; n < 19; n++) {
    img[n] = loadImage('libraries/img/i' + n + '.jpg');
  }
  textos = loadStrings('libraries/textos.txt');
}

function mousePressed() {
  pantallas[estado].buttons.forEach(button => button.onClick());
}

function flecha() {
  fill(142, 88, 44);
  strokeWeight(5);
  stroke(0);
  line(520, 510, 545, 530);
  line(520, 550, 545, 530);
}
