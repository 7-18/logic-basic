const btn1 = document.getElementById("btn1");
const btn2 = document.getElementById("btn2");
const btn3 = document.getElementById("btn3");
const btn4 = document.getElementById("btn4");
const alertMessage = document.querySelector(".alert");
const closeMessage = document.querySelector(".closeBtn");
const message = document.querySelector(".message");

isInteger = () => {
  num1 = document.querySelector("#num1").value;
  num2 = document.querySelector("#num2").value;
  if (num1 <= 0 || num2 <= 0) {
    alert("Sólo se permiten números enteros positivos");
  } else {
    return true;
  }
};

lessThan = () => {
  num1 = document.querySelector("#num1").value;
  num2 = document.querySelector("#num2").value;
  numMin = Math.min(num1, num2);
  return (
    Show(),
    (message.innerHTML = `El menor de ${num1} y ${num2} es
    <br>
    <b style="font-size: 20px">${numMin}</b>`)
  );
};

equality = () => {
  num1 = document.querySelector("#num1").value;
  num2 = document.querySelector("#num2").value;
  equal = Object.is(num1, num2);
  is_Or_Not = equal == true ? "SÍ" : "NO";
  return (
    Show(),
    (message.innerHTML = `Los números ${num1} y ${num2} <b style="font-size: 20px">${is_Or_Not}</b> son iguales.`)
  );
};

exchange = () => {
  num1 = document.querySelector("#num1").value;
  num2 = document.querySelector("#num2").value;
  num1 = Number(num2) + Number((num2 = num1));
  num1 = Number(num1) - Number(num2);
  return (
    Show(),
    (message.innerHTML = `Anteriormente el 1er Número Positivo y el 2do Número Positivo ingresados eran: <b style="font-size: 20px">${
      document.querySelector("#num1").value
    } y ${document.querySelector("#num2").value}</b>
    <br>
    Ahora el 1er Número Positivo ingresado es: <b style="font-size: 20px">${num1}</b>
    <br>
    Y el 2do Número Positivo ingresado es: <b style="font-size: 20px">${num2}</b>`)
  );
};

addition = () => {
  num1 = document.querySelector("#num1").value;
  num2 = document.querySelector("#num2").value;
  num1 = num1 - -num2;
  return (
    Show(),
    (message.innerHTML = `La suma de ${document.querySelector("#num1").value}
     y ${document.querySelector("#num2").value} 
     es igual a
     <br>
     <b style="font-size: 20px">${num1}</b>`)
  );
};

function Show() {
  alertMessage.classList.remove("hide");
  alertMessage.classList.add("show");
  alertMessage.classList.add("showAlert");
}

closeMessage.addEventListener("click", () => {
  alertMessage.classList.add("hide");
  alertMessage.classList.remove("show");
  alertMessage.classList.remove("showAlert");
});

btn1.addEventListener("click", () => {
  isInteger() == true ? lessThan() : false;
});

btn2.addEventListener("click", () => {
  isInteger() == true ? equality() : false;
});

btn3.addEventListener("click", () => {
  isInteger() == true ? exchange() : false;
});

btn4.addEventListener("click", () => {
  isInteger() == true ? addition() : false;
});
