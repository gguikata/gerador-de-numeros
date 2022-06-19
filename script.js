function aleatorio() {
  min = Math.ceil(minValue());
  max = Math.floor(maxValue());
  if (min > max) {
    window.alert("Número mínimo é maior que o número máximo");
    return;
  } else
    document.getElementById("resultado").innerHTML = Math.floor(
      Math.random() * (max - min + 1) + min
    );
}
function minValue() {
  const minimo = document.getElementById("min").value;
  return minimo;
}
function maxValue() {
  const maximo = document.getElementById("max").value;
  return maximo;
}

function clean() {
  document.getElementById("resultado").innerHTML = "";
}
function decimal() {
  min = Math.ceil(minValue());
  max = Math.floor(maxValue());
  let deci = Math.random() * (max - min + 1) + min;
  if (min > max) {
    window.alert("Número mínimo é maior que o número máximo");
    return;
  } else document.getElementById("resultado").innerHTML = deci.toFixed(4);
}
