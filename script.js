// Timeout
// Stampiamo dopo 1,5,10 secondi l'orario corrente in questo formato:
// "Ora" : "Minuti"

// Possiamo scrivere 3 timeout diversi, oppure come bonus usiamo un array con i tempi [1,5,10].forEach

const myHours = () => {
  const date = new Date();
  const hours = date.getHours();
  const minutes = date.getMinutes();
  const seconds = date.getSeconds();
  console.log(`${hours} : ${minutes} : ${seconds}`);
};
setTimeout(myHours, 1000);
setTimeout(myHours, 5000);
setTimeout(myHours, 10000);

// Bonus, con forEach

const displayTime = () => {
  const hours = new Date().getHours();
  const minutes = new Date().getMinutes();
  const seconds = new Date().getSeconds();
  console.log(`${hours} : ${minutes} : ${seconds}`);
};

const time = [1, 5, 10];
time.forEach((el) => {
  setTimeout(() => displayTime(), el * 1000);
});

// Interval
// 1 - Fare il console.log analogo a quello mostrato su time.is
// Prendiamo l'esercizo 1 di Interval e stampiamo la data nel body usando document.body.innerHTML = "..."
// 2 - dato un array [42, 23, 1, 7, 12, 99] estraiamo ogni secondo, come se fosse un tombola, un numero. Cancelliamo l'interval quando avremo pescato tutti i numeri possibili. tip: Contiamo quante volte abbiamo fatto partire l'intervallo

// 1-

const myClock = () => {
  // console.clear commentato perché blocca l'esecuzione degli esercizi precedenti
  console.clear();
  const hours = new Date().getHours();
  const minutes = new Date().getMinutes();
  const seconds = new Date().getSeconds();
  //   Fare il console.log analogo a quello mostrato su time.is
  console.log(`${hours}:${minutes}:${seconds}`);
  //   Prendiamo l'esercizo 1 di Interval e stampiamo la data nel body usando document.body.innerHTML = "..."
  document.body.innerHTML = `<h1> ${hours}:${minutes}:${seconds} </h1>`;
};
setInterval(myClock, 1000);

// 2 -
