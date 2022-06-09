setInterval(function obtHora() 
{
  var hora = Date();
  let re = /[0-9]{1,2}:[0-9]{1,2}:[0-9]{1,2}/;
  output = hora.match(re);
  var division = output[0].split(":");
  document.getElementById("horas").innerHTML = division[0];
  document.getElementById("minutos").innerHTML = division[1];
  document.getElementById("segundos").innerHTML = division[2];
}, 
1000,);

