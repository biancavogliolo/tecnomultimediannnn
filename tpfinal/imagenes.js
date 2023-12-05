class ManejoDeImagenes {
  constructor() {
    this.fondos = [];
    this.inicializarFondos();
  }

  inicializarFondos() {
    for (let i = 0; i < CantFotos; i++) {
      let nombreImagen = "data/imagen" + nf(i, 2) + ".jpg";
      this.fondos[i] = loadImage(nombreImagen);
      this.fondos[i].resize(600, 600);
    }
  }
}
