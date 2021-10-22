let num1: string = document.getElementById("num1");
let btn = document.getElementById("btn");

btn.addEventListener("click", () => {
  let numUno: number = Number(num1.value);
  switch (numUno) {
    case 1:
      console.log("medalla de oro");
      break;
    case 2:
      console.log("medalla de plata");
      break;
    case 3:
      console.log("medalla de bronce");
      break;
    default:
      console.log("gracias por participar");
  }
});
