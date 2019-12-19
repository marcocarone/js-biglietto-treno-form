var btnGenera = document.getElementById("genera");
btnGenera.addEventListener("click",
  function() {
    var inputNomeCognome = document.getElementById("input-nome");
    var nomeCognome = inputNomeCognome.value;
    var inputKm = document.getElementById("input-km");
    var chilometri = inputKm.value;
    var inputEta = document.getElementById("input-eta");
    var eta = inputEta.value;
    var tipologiaSconto = "Tarriffa Standard";
    var costoUnChilometro = 0.21;
    // stabilisco il costo del biglietto in riferimento ai km inseriti dall'utente
    var costoBiglietto = chilometri * costoUnChilometro;
    // stabilisco gli sconti
    var scontoVenti = (costoBiglietto * 20) / 100;
    var scontoQuaranta = (costoBiglietto * 40) / 100;
    if (eta == "Minorenne") {
      costoBiglietto = costoBiglietto - scontoVenti;
      tipologiaSconto = "Sconto minorenne";

    } else if (eta == "Over65") {
      costoBiglietto = costoBiglietto - scontoQuaranta;
      tipologiaSconto = "Sconto Silver";

    }

    document.getElementById("costo-biglietto").innerHTML = costoBiglietto.toFixed(2);
    document.getElementById("nome-passeggero").innerHTML = nomeCognome;
    document.getElementById("tipologia-sconto").innerHTML = tipologiaSconto;

  }
);
