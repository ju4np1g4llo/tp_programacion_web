var appVue1 = new Vue ({
  el: '#app',
  data:function() {
return {
    about_us: '"Easy Files" es una página web la cual permite ordenar todo tipo de información necesaria para un trabajador del área médica.',
    about_us2: 'Además, se puede almacenar la información de otros compañeros de profesión, para facilitar el intercambio de información.'
  };
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


























meses=["Enero","Febrero","Marzo","Abril","Mayo","Junio","Julio","Agosto","Septiembre","Octubre","Noviembre","Diciembre"];
lasemana=["Domingo","Lunes","Martes","Miércoles","Jueves","Viernes","Sábado"]
diassemana=["Lun","Mar","Mié","Jue","Vie","Sáb","Dom"];
window.onload = function() {
hoy=new Date(); 
diasemhoy=hoy.getDay(); 
diahoy=hoy.getDate(); 
meshoy=hoy.getMonth(); 
annohoy=hoy.getFullYear(); 
tit=document.getElementById("titulos"); 
ant=document.getElementById("anterior"); 
pos=document.getElementById("posterior"); 
f0=document.getElementById("fila0");
pie=document.getElementById("fechaactual");
pie.innerHTML+=lasemana[diasemhoy]+", "+diahoy+" de "+meses[meshoy]+" de "+annohoy;
document.buscar.buscaanno.value=annohoy;
mescal = meshoy; 
annocal = annohoy 
cabecera() 
primeralinea()
escribirdias()
}
function cabecera() {
         tit.innerHTML=meses[mescal]+" de "+annocal;
         mesant=mescal-1; 
         mespos=mescal+1; 
         if (mesant<0) {mesant=11;}
         if (mespos>11) {mespos=0;}
         ant.innerHTML=meses[mesant]
         pos.innerHTML=meses[mespos]
         } 
function primeralinea() {
         for (i=0;i<7;i++) {
             celda0=f0.getElementsByTagName("th")[i];
             celda0.innerHTML=diassemana[i]
             }
         }

function escribirdias() {
         primeromes=new Date(annocal,mescal,"1") 
         prsem=primeromes.getDay() 
         prsem--; 
         if (prsem==-1) {prsem=6;}
         diaprmes=primeromes.getDate() 
         prcelda=diaprmes-prsem; 
         empezar=primeromes.setDate(prcelda) 
         diames=new Date() 
         diames.setTime(empezar); 
         
         for (i=1;i<7;i++) { 
             fila=document.getElementById("fila"+i);
             for (j=0;j<7;j++) {
                 midia=diames.getDate() 
                 mimes=diames.getMonth()
                 mianno=diames.getFullYear()
                 celda=fila.getElementsByTagName("td")[j];
                 celda.innerHTML=midia;
                 celda.style.backgroundColor="white";
                 celda.style.color="black";
                 if (j==6) { 
                    celda.style.color="red";
                  }
                 if (mimes!=mescal) { 
                    celda.style.color="grey";
                    }
                 
                 if (mimes==meshoy && midia==diahoy && mianno==annohoy ) { 
                    celda.style.backgroundColor="#f0b19e";
                    celda.innerHTML="<cite title='Fecha Actual'>"+midia+"</cite>";
                    }
                 
                 midia=midia+1;
                 diames.setDate(midia);
                 }
             }
         }

function mesantes() {
         nuevomes=new Date() 
         primeromes--; 
         nuevomes.setTime(primeromes) 
         mescal=nuevomes.getMonth() 
         annocal=nuevomes.getFullYear()
         cabecera() 
         escribirdias() 
         }

function mesdespues() {
         nuevomes=new Date() 
         tiempounix=primeromes.getTime() 
         tiempounix=tiempounix+(45*24*60*60*1000)  
         nuevomes.setTime(tiempounix) 
         mescal=nuevomes.getMonth() 
         annocal=nuevomes.getFullYear()
         cabecera() 
         escribirdias() 
         }

function actualizar() {
         mescal=hoy.getMonth(); 
         annocal=hoy.getFullYear();  
         cabecera() 
         escribirdias() 
         }

function mifecha() {
        
         mianno=document.buscar.buscaanno.value; 
         
         listameses=document.buscar.buscames;
         opciones=listameses.options;
         num=listameses.selectedIndex
         mimes=opciones[num].value;
         
         if (isNaN(mianno) || mianno<1) { 
            
            alert("El año no es válido:\n debe ser un número mayor que 0")
            }
         else { 
              mife=new Date(); 
              mife.setMonth(mimes); 
              mife.setFullYear(mianno);
              mescal=mife.getMonth(); 
              annocal=mife.getFullYear();
              cabecera() 
              escribirdias() 
              }
         }