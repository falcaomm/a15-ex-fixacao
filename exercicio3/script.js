const maioresPaises = ["Rússia", "Canadá", "China", "EUA", "Brasil"];

for (let i = 0; i < maioresPaises.length; i++) {
    console.log(`${i + 1} - ${maioresPaises[i]}`);
}

console.log("invertido");

for(let i = maioresPaises.length -1; i >= 0; i--) {
    console.log(`${i +1} - ${maioresPaises[i]}`)
  }