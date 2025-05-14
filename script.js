document.addEventListener("DOMContentLoaded", function () {
  const form = document.getElementById('carbon-form');
  if (!form) return;

  form.addEventListener('submit', function (e) {
    e.preventDefault();

    const transporte = document.getElementById('transporte').value;
    const distancia = parseFloat(document.getElementById('distancia').value);

    const fatores = {
      carro: 0.192,
      onibus: 0.105,
      moto: 0.094
    };

    const co2 = (fatores[transporte] * distancia).toFixed(2);

    document.getElementById('resultado').innerText =
      `Você emite aproximadamente ${co2} kg de CO₂ por semana usando ${transporte}.`;
  });
});
