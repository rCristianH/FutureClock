setInterval(function obtHora() 
{
  var hora = new Date();
  document.getElementById("horas").innerHTML = hora.getHours();
  document.getElementById("minutos").innerHTML = hora.getMinutes();
  document.getElementById("segundos").innerHTML = hora.getSeconds();
}, 
1000,);

