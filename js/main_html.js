var appVue1 = new Vue ({
  el: '#app',
  data:{
    about_us: '"Easy Files" es una página web la cual permite ordenar todo tipo de información necesaria para un trabajador del área médica.',
    about_us2: 'Además, se puede almacenar la información de otros compañeros de profesión, para facilitar el intercambio de información.'
  }
})

var words = document.getElementsByClassName('word');
var wordArray = [];
var currentWord = 0;

words[currentWord].style.opacity = 1;
for (var i = 0; i < words.length; i++) {
  splitLetters(words[i]);
}

function changeWord() {
  var cw = wordArray[currentWord];
  var nw = currentWord == words.length-1 ? wordArray[0] : wordArray[currentWord+1];
  for (var i = 0; i < cw.length; i++) {
    animateLetterOut(cw, i);
  }
  
  for (var i = 0; i < nw.length; i++) {
    nw[i].className = 'letter behind';
    nw[0].parentElement.style.opacity = 1;
    animateLetterIn(nw, i);
  }
  
  currentWord = (currentWord == wordArray.length-1) ? 0 : currentWord+1;
}

function animateLetterOut(cw, i) {
  setTimeout(function() {
    cw[i].className = 'letter out';
  }, i*80);
}

function animateLetterIn(nw, i) {
  setTimeout(function() {
		nw[i].className = 'letter in';
  }, 340+(i*80));
}

function splitLetters(word) {
  var content = word.innerHTML;
  word.innerHTML = '';
  var letters = [];
  for (var i = 0; i < content.length; i++) {
    var letter = document.createElement('span');
    letter.className = 'letter';
    letter.innerHTML = content.charAt(i);
    word.appendChild(letter);
    letters.push(letter);
  }
  
  wordArray.push(letters);
}

changeWord();
setInterval(changeWord, 4000);
























meses=["enero","febrero","marzo","abril","mayo","junio","julio","agosto","septiembre","octubre","noviembre","diciembre"];
lasemana=["Domingo","Lunes","Martes","Miércoles","Jueves","Viernes","Sábado"]
diassemana=["lun","mar","mié","jue","vie","sáb","dom"];

//Tras cargarse la página ...
window.onload = function() {

// Elementos del DOM: en cabecera de calendario 
tit=document.getElementById("titulos"); //cabecera del calendario
ant=document.getElementById("anterior"); //mes anterior
pos=document.getElementById("posterior"); //mes posterior

//iniciar calendario:
cabecera() 
}

//cabecera del calendario
function cabecera() {
         tit.innerHTML=meses[mescal]+" de "+annocal;
         mesant=mescal-1; //mes anterior
         mespos=mescal+1; //mes posterior
         if (mesant<0) {mesant=11;}
         if (mespos>11) {mespos=0;}
         ant.innerHTML=meses[mesant]
         pos.innerHTML=meses[mespos]
         } 

//Ver mes anterior
function mesantes() {
  nuevomes=new Date() //nuevo objeto de fecha
  primeromes--; //Restamos un día al 1 del mes visualizado
  nuevomes.setTime(primeromes) //cambiamos fecha al mes anterior 
  mescal=nuevomes.getMonth() //cambiamos las variables que usarán las funciones
  annocal=nuevomes.getFullYear()
  cabecera() //llamada a funcion de cambio de cabecera
  escribirdias() //llamada a funcion de cambio de tabla.
  }
//ver mes posterior
function mesdespues() {
  nuevomes=new Date() //nuevo obejto fecha
  tiempounix=primeromes.getTime() //tiempo de primero mes visible
  tiempounix=tiempounix+(45*24*60*60*1000) //le añadimos 45 días 
  nuevomes.setTime(tiempounix) //fecha con mes posterior.
  mescal=nuevomes.getMonth() //cambiamos variables 
  annocal=nuevomes.getFullYear()
  cabecera() //escribir la cabecera 
  escribirdias() //escribir la tabla
  }
//volver al mes actual
function actualizar() {
  mescal=hoy.getMonth(); //cambiar a mes actual
  annocal=hoy.getFullYear(); //cambiar a año actual 
  cabecera() //escribir la cabecera
  escribirdias() //escribir la tabla
  }

var dia1 = 'Día de los santos inocentes';
                    var agenda = ["Error",
                              "Día de los santos inocentes",
                                "Día de muertos",
                                  "Se funda la villa de San Luis Potosí, hoy ciudad capital del estado del mismo nombre",
                                  "Se establece la inquisición en México",
                                  "Beber mucha agua",
                                  "Empieza el gobierno del presidente Francisco I. Madero",
                                  "Muere en sonora \"El héroe de Nacozari\", el ferrocarrilero Jésus García Corona ",
                                  "Primer encuentro de Moctezuma con Hernán Cortés",
                                  "La villa de tulancingo es elevada a la categoría de ciudad",
                                  "Hoy será un buen día",
                                  "Nace en la ciudad de México el escritor, novelista y ensayista Carlos Fuentes",
                                  "Nace la poetisa mexicana Juana de ASbaje y Ramírez de Santillana, conocida como Sor Juana Inés de la Cruz",
                                  "Muere asesinado Ignacio Comonfort, quien fuuera presidente de México",
                                  "DÍA MUNDIAL DE LA DIABETES",
                                  "Hoy seguro fue un buen día",
                                  "Día del 16 de noviembre",
                                  "Muere Alejandro Dumas hijo, autor de la celebre novela \"Las dama de las Camelias\"",
                                  "Nace en la ciudad de San Luis Potosí, Ponciano Arriaga, abogado, periodista, orador y político liberal.",
                                  "Nace en Guamúchil, Sinaloa, Pedro Infante Cruz, cantante y actor",
                                  "Inicia el movimiento de la revolución mexicana",
                                  "Muere el pintor Mario Orozco Rivera",
                                  "Es asesinado el presidente de Estados Unidos John F. Kennedy.",
                                  "Muere el compositor mexicano José Alfredo Jiménez en la ciudad de México",
                                  "Por decreto de Porfirio Díaz, es creado en la parte oriental de la peninsula de yucatán, el territorio federal de Quintana Roo",
                                  "Día de estudio",
                                  "Muere el diseñador gráfico estadounidense Paul Rand a los 82 añs. Diseño los logotipos de IBM Wetinghouse, United Parcel Service y ABC",
                                  "Preparación para finales 1",
                                  "Un día especial",
                                  "Un día no tan especial",
                                  "Un gran dia",
                                  "Nace jorge Negrete, cantante y actor del cine mexicano. "
                             ];
            function limpiar()
            {
                document.getElementById('cuadroTexto').value ='';
            }
            function computadora(day=dia1,form='cuadroTexto')
            {
                document.getElementById(form).value = agenda[day];
            }
