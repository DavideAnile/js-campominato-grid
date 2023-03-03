/* 

Consegna
L'utente clicca su un bottone che genererà una griglia di gioco quadrata.
Ogni cella ha un numero progressivo, da 1 a 100.
Ci saranno quindi 10 caselle per ognuna delle 10 righe.
Quando l'utente clicca su ogni cella, la cella cliccata si colora di azzurro 
ed emetto un messaggio in console con il numero della cella cliccata.

*/

/* 
-creo variabili che mi servono per manipolazione DOM
-genero evento al click del bottone
? SE il valore selezionato è "1"
   °il valore della variabile cellNumber è 10 * 10
   °numero colonne e numero righe ha valore 10
   °sottotitolo ha valore "modalità facile"
:? ALTRIMENTI SE il valore selezionato è "2"
    °il valore della variabile cellNumber e 9 * 9
    °numero colonne e numero righe ha valore 9
    °sottotitolo ha valore "modalità intermedia"
:ALTRIMENTI
    °il valore della variabile cellNumber ha valore 7 * 7
    °numero colonne e numero righe ha valore 9
    °sottotitolo ha valore "modalità difficile" 
- creo un ciclo for per generare quadrati all'interno della griglia      
- aggiungo evento click alla cella creata
    °colora quella cella di azzurro con metodo .toggle
    °stampa in console il numero della cella cliccata


*/


// -creo variabili che mi servono per manipolazione DOM
const playButtonEl = document.getElementById("play-button")
const titolo = document.getElementById("titolo")
const gridContainerEl = document.getElementById("grid-container")
const opzioniEl = document.getElementById("opzioni")
let sottotitolo = document.createElement("div")
let cellNumber;
let squareDimensions;








//-genero evento al click del bottone
playButtonEl.addEventListener("click",  function(){
    
    
// reset al click 
    sottotitolo.innerText = " ";
    gridContainerEl.innerHTML = " ";


//? SE il valore selezionato è "1"
    if(opzioniEl.value == 1){
        cellNumber = 10 * 10
        squareDimensions = 10
        sottotitolo.innerText = "MODALITA' FACILE"
  
//:? ALTRIMENTI SE il valore selezionato è "2"        
    } else if (opzioniEl.value == 2){
        cellNumber = 9 * 9
        squareDimensions = 9
        sottotitolo.innerText = "MODALITA' INTERMEDIA"

// ALTRIMENTI       
    } else {
        cellNumber = 7 * 7
        squareDimensions = 7
        sottotitolo.innerText = "MODALITA' DIFFICILE"
        
    }

 // mostro titolo e sottotitolo   
    sottotitolo.classList.add("sottotitolo")
    titolo.append(sottotitolo)
    titolo.style.display = "flex"



// - creo un ciclo for per generare quadrati all'interno della griglia      
for(let i = 1; i <= cellNumber;i++){

//genero quadrato con callback funzione
    let newEl = createElement(i, squareDimensions)
    
    gridContainerEl.append(newEl)

//- aggiungo evento click al quadrato creato    
    newEl.addEventListener("click", function(){
      
//°colora quella cella di azzurro aggiungendo una classe con metodo .toggle        
        newEl.classList.toggle("lightblue")

//°stampa in console il numero della cella cliccata        
        console.log(parseInt(newEl.innerText))
    });


}

});
    
    
   
    
    





/*___________________FUNZIONI_________________*/





function createElement (text, numeroColonne){

    let square = document.createElement("div");
    square.classList.add("square");
    square.style.width = `calc(100% / ${numeroColonne})`;
    square.style.height = `calc(100% / ${numeroColonne})`;
    square.innerText = text
    
    return square;

}


