let countingResult = 0;

//CREAZIONE ELEMENTI

//creazione del container generale
let generalContainer = document.createElement("div");
generalContainer.id = "generalContainer";
generalContainer.classList.add("general-container");
document.body.append(generalContainer);

//creazione del container che conterrà il counter
let counterContainer = document.createElement("div");
counterContainer.id = "counterContainer";
counterContainer.classList.add("container");
generalContainer.append(counterContainer);

//creazione del container che conterrà il risultato in basi diverse
let baseContainer = document.createElement("div");
baseContainer.id = "baseContainer";
baseContainer.classList.add("container");
generalContainer.append(baseContainer);

//creazione del titolo
let title = document.createElement("h1");
title.innerHTML = "Simple Counter";
title.classList.add("title");
generalContainer.prepend(title);

//creazione div somma
let plus = document.createElement("div");
plus.innerHTML = "+";
plus.id = "plus";
plus.classList.add("ar-symbols");
counterContainer.append(plus);

//creazione spazio per risultato
let res = document.createElement("p");
res.innerHTML = countingResult;
res.classList.add("res");
plus.after(res);

//creazione div differenza
let minus = document.createElement("div");
minus.innerHTML = "-";
minus.id = "minus";
minus.classList.add("ar-symbols");
res.after(minus);

//creazione tasto reset
let reset = document.createElement("button");
reset.innerHTML = "RESET";
reset.id = "reset";
reset.classList.add("reset-button");
counterContainer.after(reset);

// Creazione contenitore per risultato in base 2
let resBinContainer = document.createElement("div");
resBinContainer.classList.add("converted-container");
// Valore in base due del risultato
let resBin = document.createElement("p");
resBin.innerHTML = countingResult.toString(2);
resBin.classList.add("converted-res");
resBinContainer.append(resBin);
// Label del container
let resBinLabel = document.createElement("p");
resBinLabel.classList.add("converted-labels");
resBinLabel.innerHTML = "Binario";
//Inserimento elementi
resBinContainer.append(resBin);
resBin.after(resBinLabel);
baseContainer.append(resBinContainer);

// Creazione contenitore per risultato in base 8
let resOctContainer = document.createElement("div");
resOctContainer.classList.add("converted-container");
//Creazione elemento per risultato in base 8
let resOct = document.createElement("p");
resOct.innerHTML = countingResult.toString(8);
resOct.classList.add("converted-res");
// Label del container
let resOctLabel = document.createElement("p");
resOctLabel.innerHTML = "Ottale";
resOctLabel.classList.add("converted-labels");
// Inserimento elementi
resOctContainer.append(resOct);
resOct.after(resOctLabel);
resBinContainer.after(resOctContainer);

// Creazione contenitore per risultato in base 16
let resHexContainer = document.createElement("div");
resHexContainer.classList.add("converted-container");
//Creazione elemento per risultato in base 16
let resHex = document.createElement("p");
resHex.innerHTML = countingResult.toString(16);
resHex.classList.add("converted-res");
// Label del container
let resHexLabel = document.createElement("p");
resHexLabel.innerHTML = "Esadecimale";
resHexLabel.classList.add("converted-labels");
// Inserimento elementi
resHexContainer.append(resHex);
resHex.after(resHexLabel);
resOctContainer.after(resHexContainer);

//FUNZIONI

//creazione funzione per convertire il risultato in binario, ottale ed esadecimale
let resConverted = function () {
  resBin.innerHTML = countingResult.toString(2);

  resOct.innerHTML = countingResult.toString(8);

  resHex.innerHTML = countingResult.toString(16);
};

// funzione che aggiorna il risultato del contatore
let resUpdater = function (num) {
  res.innerHTML = num;
  resConverted();
};

let resetter = function () {
  countingResult = 0;
  res.innerHTML = countingResult;
  resConverted();
};

//GESTORI EVENTI

//assegnazione gestori

//gestione evento click su operatori matematici
counterContainer.addEventListener("click", function (event) {
  if (event.target.getAttribute("id") == plus.id) {
    ++countingResult;
  } else if (event.target.getAttribute("id") == minus.id) {
    if (countingResult > 0) {
      --countingResult;
    } else {
      countingResult = 0;
    }
  }
  resUpdater(countingResult);
});

//gestione eventi su tasto reset
reset.addEventListener("click", resetter);
