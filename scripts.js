function cambiarModo() {
  var body_web = document.body;
  var boton = document.getElementById("boton_modo_oscuro");
  body_web.classList.toggle("dark");
  if(boton.textContent === "Modo oscuro") {
      boton.textContent = "Modo claro";
      boton.classList.remove("btn-dark");
      boton.classList.add("btn-light");
  } else {
      boton.textContent = "Modo oscuro";
      boton.classList.remove("btn-light");
      boton.classList.add("btn-dark");
  }
}

function irAMenu() {
  document.location.href = "/menu.html";
}

function irAContacto() {
  document.location.href = "/contacto.html";
}

function irAInicio() {
  document.location.href = "/index.html";
}

function irAInicioYNotificar() {
  irAInicio();
  alert("Se envió mensaje de contacto.");
}

function irADetalle() {
  document.location.href = "/detalle.html";
}