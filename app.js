const $ = (selector) => document.querySelector(selector);

/*Ejercicios
playlist
Crear un documento html con un título que diga Mis canciones favoritas y una lista desordenada. Pedir mediante prompts por cinco canciones (una a la vez), y agregar esas canciones como ítems de la lista desordenada*/

// const tema1 = prompt('Ingrese la cancion nº uno');
// const tema2 = prompt('Ingrese la cancion nº dos');
// const tema3 = prompt('Ingrese la cancion nº tres');
// const tema4 = prompt('Ingrese la cancion nº cuatro');
// const tema5 = prompt('Ingrese la cancion nº cinco');

// const ul = $('.list');

// ul.innerHTML=`
// <li>1-${tema1}.</li>
// <li>2-${tema2}.</li>
// <li>3-${tema3}.</li>
// <li>4-${tema4}.</li>
// <li>5-${tema5}.</li>`

/*contador
Crear un documento html que muestre un número (empezando en 0) y 6 botones con los siguientes valores: -1, +1, -5, +5, -10, +10. Cuando se clickea un botón, se tiene que sumar o restar la cantidad correspondiente, y actualizar el número mostrado.*/


const x = $('p');




const btnMas1 = $('.btn-masUno');
const btnMenos1 = $('.btn-menosUno');
const btnMas5 = $('.btn-masCinco');
const btnMenos5 = $('.btn-menosCinco');
const btnMas10 = $('.btn-masDiez');
const btnMenos10 = $('.btn-menosDiez');


const suma1 = (num) => num + 1;
const suma5 = (numberX) => numberX + 5;
const suma10 = (numberX) => numberX + 10;
const resta1 = (numberX) => numberX - 1;
const resta5 = (numberX) => numberX - 5;
const resta10 = (numberX) => numberX - 10;

btnMas1.addEventListener("click", () => {
    x.innerHTML = suma1(Number(x.innerText))
})

btnMas5.addEventListener("click", () => {
    x.innerHTML = suma5(Number(x.innerText));
})

btnMas10.addEventListener("click", () => {
    x.innerHTML = suma10(Number(x.innerText))
})

btnMenos1.addEventListener("click", () => {
    x.innerHTML = resta1(Number(x.innerText))
})

btnMenos5.addEventListener("click", () => {
    x.innerHTML = resta5(Number(x.innerText))
})

btnMenos10.addEventListener("click", () => {
    x.innerHTML = resta10(Number(x.innerText))
})

/*
//solo suma una vez al numero inicial 

/*adivinanza
Crear un documento html con una adivinanza (o una pregunta) y 3 botones con posibles respuestas. Si se clickea la respuesta correcta, se debe mostrar en el documento un texto que lo indique (por ejemplo: ¡Correcto!) debajo de la adivinanza, y el botón seleccionado debe ponerse con un color de fondo verde. Si se clickea una respuesta incorrecta, se debe mostrar en el documento un texto que lo indique (por ejemplo: ¡Le erraste!) y mostrar el botón con la respuesta correcta con un color de fondo verde y los otros dos con un color de fondo rojo.*/

const cartel = $('.cartel')
const btn = $('.button')
const btnT = $('.btnT')
const btnF1 = $('.btnF1')
const btnF2 = $('.btnF2')



btnT.addEventListener("click", () => {
    btnT.classList.add("trueClass");
    btnF1.classList.add("falseClass");
    btnF2.classList.add("falseClass");
    cartel.innerHTML = `
    <div class="trueClass">
        <h3>Tu sí que sabes!!!</h3>
    </div>`
})

btnF1.addEventListener("click", () => {
    btnT.classList.add("trueClass");
    btnF1.classList.add("falseClass");
    btnF2.classList.add("falseClass");

    cartel.innerHTML = `
    <div class="falseClass">
        <h3>Falsoo!!</h3>
    </div>`
})

btnF2.addEventListener("click", () => {
    btnT.classList.add("trueClass");
    btnF1.classList.add("falseClass");
    btnF2.classList.add("falseClass");

    cartel.innerHTML = `
    <div class="falseClass">
        <h3>Falsoo!!</h3>
    </div>`
})
/////como hacer if else del click o 
/*
paleta
Crear un documento html que tenga 6 botones con un color de fondo distinto, y un div cuadrado grande. Cuando se clickea un botón, el div debe cambiar su color de fondo al mismo color de fondo que el del botón clickeado.*/

const container = $('.container')
const btnBlue = $('.blue')
const btnRed = $('.red')
const btnPink = $('.pink')
const btnOrange = $('.orange')
const btnYellow = $('.yellow')
const btnBlack = $('.black')

btnBlue.addEventListener("click", () => {
    container.style.backgroundColor = "blue"
})
btnRed.addEventListener("click", () => {
    container.style.backgroundColor = "red"
})
btnPink.addEventListener("click", () => {
    container.style.backgroundColor = "pink"
})
btnOrange.addEventListener("click", () => {
    container.style.backgroundColor = "orange"
})
btnYellow.addEventListener("click", () => {
    container.style.backgroundColor = "yellow"
})
btnBlack.addEventListener("click", () => {
    container.style.backgroundColor = "black"
})

//si uso toggle pone y saca... si uso add una vez q añade todas quda con la ultima.. cambio style!!!?????*/

/*email (sin leer)
Crear un documento html que tenga:

un título h1 que diga: Mis emails
un título h2 que diga: Bandeja de entrada
una lista desordenada con 10 ítems con lorem ipsum (4 o 5 palabras cada uno, no un párrafo entero)
Inicialmente los ítems deben estar en negrita y con color negro. Cuando se clickea uno de ellos, se debe sacarle la negrita y ponerle un color gris (simulando que el email fue leído)*/

const lia = $(".a")
const lib = $(".b")
const lic = $(".c")
const lid = $(".d")
const lie = $(".e")
const lif = $(".f")
const lig = $(".g")
const lih = $(".h")
const lii = $(".i")
const lij = $(".j")

lia.addEventListener("click", () => {
    lia.classList.toggle("leido")
})
lib.addEventListener("click", () => {
    lib.classList.toggle("leido")
})
lic.addEventListener("click", () => {
    lic.classList.toggle("leido")
})
lid.addEventListener("click", () => {
    lid.classList.toggle("leido")
})
lie.addEventListener("click", () => {
    lie.classList.toggle("leido")
})
lif.addEventListener("click", () => {
    lif.classList.toggle("leido")
})
lig.addEventListener("click", () => {
    lig.classList.toggle("leido")
})
lih.addEventListener("click", () => {
    lih.classList.toggle("leido")
})
lii.addEventListener("click", () => {
    lii.classList.toggle("leido")
})
lij.addEventListener("click", () => {
    lij.classList.toggle("leido")
})
/*
progreso
Crear un documento html con

una barra de progreso (con un div dentro de otro)
un elemento de texto que indique el progreso (p. ej. 50%)
dos botones, uno para incrementar y otro para dismininuir la barra (- y +)
cuando se apretan los botones, la barra de progreso tiene que aumentar o disminuir respectivamente y el texto que indica el porcentaje de progreso tiene que actualizarse
lo mismo tiene que pasar cuando se apreta la flecha derecha (aumentar progreso) y la flecha izquierda (disminuir progreso)
el incremento/decremento es del 10%*/

const btnMas10P = $('.btn-masDiezP');
const btnMenos10P = $('.btn-menosDiezP');
const xP = $('.estadoP');
const divP = $(".progreso");


btnMenos10P.addEventListener("click", () => {
    xP.innerHTML = resta10(Number(xP.innerText));
    divP.style.width = Number(xP.innerText) + "%"
})


btnMas10P.addEventListener("click", () => {
    xP.innerHTML = suma10(Number(xP.innerText));
    divP.style.width = Number(xP.innerText) + "%"
})



/*
modo-oscuro
Crear un documento html con un título, un párrafo y un bótón con un ícono. Centrar los elementos, cambiar los tamañas y tipografía del texto y tamaño del ícono. Hacer que el body ocupe toda la pantalla. Al clickear el botón, debe alternar entre modo oscuro y modo claro:

modo oscuro: body con color de fondo negro, texto e ícono con color blanco, ícono de sol
modo claro: body con color de fondo blanco, texto e ícono con color negro, ícono de luna*/
const page = $("#modo")
const btnTema = $(".tema")
const divBTN = $("btn-modo-cont")

btnTema.addEventListener("click", () => {
    page.classList.toggle("modoOscuro");
    if (btnTema.innerText === "🌚 Modo oscuro") {
        btnTema.innerText = "😎 Modo claro"
    }
    else {
        btnTema.innerText = "🌚 Modo oscuro"
    }

})

/*
scroll
Crear un documento html con un body de 2000px de alto. Cuando se scrollea el body, cambiar el color de fondo cada 500px, por ejemplo:

Scroll	Color de fondo
0px - 500px	red
501px - 1000px	green
1001px - 1500px	blue
1501px - 2000px	orange*/

// const redBG = $("red.BG");
// const greenBG = $("green.BG");
// const blueBG = $("blue.BG");
// const orangeBG = $("orange.BG");
// const win =$("window")
// const body = $("body")




// win .addEventListener("scroll", ()=>{

//     // const scrollear = ()=>{
//         if(body.getElement.scrollTop>500 && body.getElement.scrollTop<1000){
//          body.classList.add("red")
//         }
//         else if(body.getElement.scrollTop>1000 && body.getElement.scrollTop<1500){
//            body.classList.add("green")
//         }
//         else if(body.getElement.scrollTop>1500 && body.getElement.scrollTop<2000){
//            body.classList.add("blue")
//         }
//         else if(body.getElement.scrollTop>2000 && body.getElement.scrollTop<2500){
//             body.classList.add("orange")
//         }
//         else{
//             body.classList.add("pink")
    
//         }
//     }

//)
// window.addEventListener("scroll", scrollear=>{
//     scrollear();

//     body.style.backgroundColor="green"
// })

// window.addEventListener("scroll", scrollear=>{
//     scrollear();

//     body.style.backgroundColor="blue"
// })

// window.addEventListener("scroll", scrollear=>{
//     scrollear();
//     body.style.backgroundColor="orange"
// }) 





/*
imagenes
Crear un documento html con al menos 4 imágenes chicas (100px de alto) y una imagen grande (500px de alto). Cuando se clickean las imágenes chicas, la imagen grande se tiene que actualizar con la misma que la imagen chica clickeada.*/

const imgA =$(".imgA");
const imgB =$(".imgB");
const imgC =$(".imgC");
const imgD =$(".imgD");
const gde =$(".gde");

imgA.addEventListener("click", ()=>{
    gde.innerHTML=`<img  src="./assets/administrador-de-reuniones.png" alt="">`
})
imgB.addEventListener("click", ()=>{
    gde.innerHTML=`<img  src="./assets/buscador-de-peliculas.png" alt="">`
})
imgC.addEventListener("click", ()=>{
    gde.innerHTML=`<img  src="./assets/controlador-de-gastos.png" alt="">`
})
imgD.addEventListener("click", ()=>{
    gde.innerHTML=`<img  src="./assets/generador-de-memes.png" alt="">`
})




/*imagenes-2
Repetir el ejercicio anterior, pero en vez de cambiar la imagen grande cuando se clickean las imágenes chicas, hacerlo cuando se pasa el mouse por encima de las imágenes chicas.

peliculas
Crear un documento html con 12 imágenes de posters de películas. Buscar imágenes de películas de 3 géneros (acción, aventura, ciencia ficción, comedia, etc), 4 películas por género. Agregar al documento un botón por cada género, y un botón que diga Todas. Cuando se clickea el botón de un género, se tienen que mostrar sólo las películas correspondientes a ese género. Cuando se clickea el botón Todas se tienen que mostrar todas las películas.

pin
En un documento html crear botones con números del 0 al 9, un botón para reiniciar, un botón para borrar, y un elemento de texto.
Cuando se presionan los botones de números, se tienen que ir agregando los números en el elemento de texto. Por ejemplo, si se presiona el 1 y después el 3, se tiene que mostrar "13".
El máximo de dígitos que se pueden ingresar es 6, cuando ya hay 6 dígitos ingresados y se clickea un nuevo número, no debe pasar nada.
El botón de reiniciar debe borrar todos los dígitos del elemento de texto.
El botón de borrar debe borrar el último dígito del elemento de texto. Por ejemplo, si el pin ingresado es 2544 y se presiona la tecla borrar, debe quedar en 254.
favoritos
Crear dos contenedores, uno para imágenes y otro para favoritos. En el contenedor de imágenes, agregar al menos 10 imágenes (cualesquiera). Al clickear una imagen en el contenedor de imágenes, se debe agregar la misma imagen en el contenedor de favoritos. Al clickear una imagen en el contenedor de favoritos, se debe eliminar la imagen seleccionada de dicho contenedor.

color-aleatorio
Hacer un programa que al apretar la tecla espacio, cambie el color de fondo del body por un color aleatorio. Para eso, crear una función obtenerColorAleatorio() que devuelva un string con el formato de ejemplo rgb(0,0,0) donde los valores de r, g y b se generan aleatoriamente (con números del 1 al 255).

adivinar-numero
Crear un programa que genere un número aleatorio entre 0 y 9. Cuando se presiona un número en el teclado, el programa debe mostrar en el documento html un mensaje:

si el número seleccionado es más grande que el número aleatorio generado, debe mostrar El número es más chico
si el número seleccionado es más chico que el número aleatorio generado, debe mostrar El número es más grande
si el número seleccionado es igual al número aleatorio generado, debe mostrar Adivinaste.
El mensaje también debe incluir el número ingresado (por ejemplo, Número ingresado: 3). El mensaje debe mostrarse en un elemento del documento html, no en un alert.

Por ejemplo:

Número aleatorio: 7 (No se muestra)
Usuario presiona 3
"El número es más grande. Número ingresado: 3"
Usuario presiona 9
"El número es más chico. Número ingresado: 9"
Usuario presiona 7
"Adivinaste. Número ingresado: 7"
El documento también debe tener un botón que diga Reiniciar, que genere un nuevo número y actualice el mensaje para indicarlo (por ejemplo ¡Nueva partida! Presione un número.)*/

const tecla1 = $(".tecla1") 
const tecla2 = $(".tecla2")
const tecla3 = $(".tecla3")
const tecla4 = $(".tecla4")
const tecla5 = $(".tecla5")
const tecla6 = $(".tecla6")
const tecla7 = $(".tecla7")
const tecla8 = $(".tecla8")
const tecla9 = $(".tecla9")
const tecla0 = $(".tecla0")
const reset = $(".reset")
const msj =$(".msj")

let opcion = 0
let random = 0
const masMenos = () =>{
    if(opcion<random){
        msj.innerHTML="El número es mayor!!!!"
    }
    else if(opcion>random){
        msj.innerHTML="El número es menor!!!!"
    }
    else if (opcion===random){
        msj.innerHTML="Adivinaste!!!!  presiona ✅ para comezar"
    }
    else {
        random=Math.round(Math.random()*10*1)
        msj.innerHTML="Qué número es??"
    }
}

tecla1.addEventListener("click", () =>{
    opcion=1
    masMenos()
})
tecla2.addEventListener("click", ()=>{
    opcion=2
    masMenos()

})
tecla3.addEventListener("click", ()=>{
    opcion=3
    masMenos()

})
tecla4.addEventListener("click", ()=>{
    opcion=4
    masMenos()

})
tecla5.addEventListener("click", ()=>{
    opcion=5
    masMenos()

})
tecla6.addEventListener("click", ()=>{
    opcion=6
    masMenos()

})
tecla7.addEventListener("click", ()=>{
    opcion=7
    masMenos()

})
tecla8.addEventListener("click", ()=>{
    opcion=8
    masMenos()

})
tecla9.addEventListener("click", ()=>{
    opcion=9
    masMenos()

})
tecla0.addEventListener("click", ()=>{
    opcion=0
    masMenos()

})
reset.addEventListener("click", ()=>{
    opcion="r"
    masMenos()

})
// const adivinaste = () =>{
//     switch (random===opcion) {
//         case 1 : 
//         case 2 :
//         case 3 :
//         case 4 :
//         case 5 :
//         case 6 :
//         case 7 :
//         case 8 :
//         case 9 :
//         case 0 :
//         msj.innerHTML="Adivinaste!!!!"
//         break;
//         default masMenos()
//     }
    
    
// }

