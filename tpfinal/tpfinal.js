// Pestaña 3: Sketch.js
let pantallas = [];
let imagenes = [];
let historia = [];





function preload() {
  imagenes[0] = loadImage("imagen0.jpg");
  imagenes[1] = loadImage("imagen1.jpg");
  // ... (repite para todas las imágenes)
  imagenes[19] = loadImage("imagen19.jpg");
}

function setup() {
  size(600, 600);
  
   historia[0] = "la sirenita";
  historia[1] = "Ariel era una de las tantas hijas de Triton, \n era una de las mas curiosas de todas,\n siempre soñando con ir a la superficie."; //imagen 1
  historia[2] = "A medida que Ariel crecía, su curiosidad lo hacía con ella,\n y a los 17 decidió que subiría a la superficie \n  a saciar todas sus dudas.";// imagen 2 
  historia[3] = "Ariel subió a la superficie,\n la alegría de ver todo la superaba por lo que empezó a cantar,\n lo que ella no sabía es que había a pocos metros un grupo de hombres\n dispuestos a hacer todo por volver a escuchar esa voz,\n y debajo de ella una bruja más que dispuesta a arrebatársela.\n ¿qué hará Ariel, se quedará un rato más en la superficie (A)\n o volverá al fondo del mar(B)?"; //imagen 3
  historia[4] = "Ursula, la bruja,\n intercepta a Ariel para proponerle un trato,\n ella le daría piernas por 1 día a cambio de su voz,\n Ariel acepta el trato\n y le da su voz a Ursula sin saber a lo que se enfrentaba"; // imagen 4
  historia[5] = "Ursula le roba la voz a Ariel,\n dejándola muda pero cumpliendo con su parte del trato,\n le da sus piernas";//imagen 5
  historia[6] = "Ursula se convierte en humana,\n más que dispuesta a probar lo que su nueva voz podía hacer\n y sale a la superficie"; //imagen 6
  historia[7] = "Ursula comienza a cantar\n y ahí es cuando Eric, nuestro príncipe, oye nuevamente esa voz que tanto lo había cautivado,\n decide pedirle matrimonio\n a la hermosa dama portadora de dicha voz"; // imagen 7
  historia[8] = "Comienza la ceremonia de la boda,\n Ariel estaba observando todo desde el mar ¿ qué es lo que le pasará a Ariel, se enojará(A) o no hará nada(B)?"; // imagen 8
  historia[9] = " una gaviota con un espejo en su pico\n  muestra su verdadera apariencia,\n haciendo que el príncipe se de cuenta\n de quien era la persona con la que se estaba por casar"; //imagen 9
  historia[10] = "Eric se da cuenta que la voz de su verdadero amor reside en el collar que Ursula traía puesto,\n por lo cual decide arréstarselo y lanzarlo al mar"; //imagen 9.5
  historia[11] = "Ariel recupera su hermosa voz\n y decide salir a la superficie en busca de su príncipe"; // imagen 10
  historia[12] = "se dan un gran beso de amor verdadero y deciden casarse";//imagen 11
  historia[13] = " se casan y viven felices para siempre. FIN"; // imagen 12 
  historia[14] = "Ariel observaba toda la ceremonia enojada desde el mar,\n por lo que decide tomar venganza…"; //imagen 14
  historia[15] = "Ariel decide secuestrar a su gran amor al fondo,\n del océano, pero lo que ella no recordó,\n es que él era un simple humano, por lo que Eric fallece ahogado. FIN"; // imagen 15
  historia[16] = "Ariel estaba en la roca cantando,\n pero ignoraba la presencia de un barco al acecho,\n por lo cual se distrajo y fue secuestrada"; //imagen 7
  historia[17] = "Ariel fue arrastrada en una red de pescador\n hasta la cubierta del barco"; // imagen 16
  historia[18] = " estaba tirada en la cubierta del barco,\n como si fuese uno de los peces que esos pescadores habían arrebatado del mar,\n no había forma de escapar"; //imagen 17
  historia[19] = "Ariel fue puesta en una bañera para que no muriera,\n ya que pronto sería trasladada a su nuevo hogar,\n y sus captores obtendrían muchísimo dinero por ella"; //imagen 18
  historia[20] = "Ariel fue trasladada a su nuevo hogar, \nel acuario, donde fue expuesta a los turistas hasta el día de su muerte. FIN";// imagen 19

 // Crear instancias de la clase Pantalla y agregarlas al arreglo pantallas
  pantallas.push(
    new Pantalla(0, "", [new Boton(530, 530, 100, 1)])
  );
  pantallas.push(
    new Pantalla(1, historia[1], [new Boton(530, 530, 100, 2)])
  );
  pantallas.push(
    new Pantalla(2, historia[2], [new Boton(530, 530, 100, 3)])
  );
  pantallas.push(
    new Pantalla(3, historia[3], [new Boton(530, 530, 70, 4), new Boton(420, 530, 70, 16)])
  );
  pantallas.push(
    new Pantalla(4, historia[4], [new Boton(530, 530, 100, 5)])
  );
  pantallas.push(
    new Pantalla(5, historia[5], [new Boton(530, 530, 100, 6)])
  );
  pantallas.push(
    new Pantalla(6, historia[6], [new Boton(530, 530, 100, 7)])
  );
  pantallas.push(
    new Pantalla(7, historia[7], [new Boton(530, 530, 100, 8)])
  );
  pantallas.push(
    new Pantalla(8, historia[8], [new Boton(300, 530, 70, 14), new Boton(530, 530, 100, 9)])
  );
  pantallas.push(
    new Pantalla(9, historia[9], [new Boton(530, 530, 100, 10)])
  );
  pantallas.push(
    new Pantalla(10, historia[10], [new Boton(530, 530, 100, 11)])
  );
  pantallas.push(
    new Pantalla(11, historia[11], [new Boton(530, 530, 100, 12)])
  );
  pantallas.push(
    new Pantalla(12, historia[12], [new Boton(530, 530, 100, 13)])
  );
  pantallas.push(
    new Pantalla(13, historia[13], [new Boton(530, 530, 100, 20)])
  );
  pantallas.push(
    new Pantalla(14, historia[14], [new Boton(530, 530, 100, 15)])
  );
  pantallas.push(
    new Pantalla(15, historia[15], [new Boton(530, 530, 100, 20)])
  );
  pantallas.push(
    new Pantalla(16, historia[16], [new Boton(530, 530, 100, 17)])
  );
  pantallas.push(
    new Pantalla(17, historia[17], [new Boton(530, 530, 100, 18)])
  );
  pantallas.push(
    new Pantalla(18, historia[18], [new Boton(530, 530, 100, 19)])
  );
  pantallas.push(
    new Pantalla(19, historia[19], [new Boton(530, 530, 100, 20)])
  );
  pantallas.push(
    new Pantalla(20, "", [new Boton(300, 300, 200, 0)])
  );
}

function draw() {
  textFont(fuente);
  fill(255);
  tint(150);

  pantallas[estado].draw();
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
