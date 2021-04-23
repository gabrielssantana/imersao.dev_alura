var card0 = {
    name: "Teté Dev",
    image: "'../../public/images/tete.jpg'",
    attributes: {
        Ataque: 3,
        Defesa: 8,
        Habilidade: 10
    }
}

var card1 = {
    name: "Seu Dedé",
    image: "'../../public/images/dede.jpg'",
    attributes: {
        Ataque: 10,
        Defesa: 3,
        Habilidade: 8
    }
}

var card2 = {
    name: "Dona Denize",
    image: "'../../public/images/denize.jpg'",
    attributes: {
        Ataque: 5,
        Defesa: 7,
        Habilidade: 10
    }
}

var card3 = {
    name: "Magic Bielzin",
    image: "'../../public/images/gabriel.jpg'",
    attributes: {
        Ataque: 7,
        Defesa: 10,
        Habilidade: 6
    }
}

var card4 = {
    name: "Bucho Zelador",
    image: "'../../public/images/zelador.jpg'",
    attributes: {
        Ataque: 0,
        Defesa: 0,
        Habilidade: 0
    }
}

var card5 = {
    name: "Guel, O Miguel",
    image: "'../../public/images/miguel.jpg'",
    attributes: {
        Ataque: 4,
        Defesa: 3,
        Habilidade: 6
    }
}

var card6 = {
    name: "Carraco Malboro",
    image: "'../../public/images/denilson.jpg'",
    attributes: {
        Ataque: 3,
        Defesa: 5,
        Habilidade: 7
    }
}

var card7 = {
    name: "Débora Leite Condensado",
    image: "'../../public/images/debora.jpg'",
    attributes: {
        Ataque: 3,
        Defesa: 8,
        Habilidade: 10
    }
}

var card8 = {
    name: "Fabio da Débora",
    image: "'../../public/images/fabio.jpg'",
    attributes: {
        Ataque: 6,
        Defesa: 8,
        Habilidade: 5
    }
}

var card9 = {
    name: "Dona Mara",
    image: "'../../public/images/amara.jpg'",
    attributes: {
        Ataque: 10,
        Defesa: 10,
        Habilidade: 10
    }
}

var playerPoints = 0

var machinePoints = 0

var machineCard

var playerCard

var cards = [card0, card1, card2, card3, card4, card5, card6, card7, card8, card9]

refreshScoreboard()
refreshCardsQuantities()

function refreshCardsQuantities() {
  var cardsQuantitiesDiv = document.getElementById("cardsQuantities")
  var html = "Quantidade de cartas no jogo: " + cards.length
  cardsQuantitiesDiv.innerHTML = html
  
}

function refreshScoreboard() {
  var scoreboardDiv = document.getElementById("scoreboard")
  var html = "Jogador " + playerPoints + " / " + machinePoints + " Máquina"
  scoreboardDiv.innerHTML = html
}

function raffleCard() {
    var machineCardNumber = parseInt(Math.random() * cards.length)
    machineCard = cards[machineCardNumber]
    cards.splice(machineCardNumber, 1)

    var playerCardNumber = parseInt(Math.random() * cards.length)
    playerCard = cards[playerCardNumber]
    cards.splice(playerCardNumber, 1)
  
    document.getElementById('btnRaffle').disabled = true
    document.getElementById('btnPlay').disabled = false

    showPlayerCard()
    refreshCardsQuantities()
}

function showPlayerCard() {
    var playerCardDiv = document.getElementById("playerCard")
    var frame = '<img src="../../public/images/card-super-trunfo-transparent-ajustado.png" style=" width: inherit; height: inherit; position: absolute;">';
    playerCardDiv.style.backgroundImage = `url(${playerCard.image})`
    var name = `<p class="cardSubtitle">${playerCard.name}</p>`
    var textOptions = ""

    for (var attribute in playerCard.attributes) {
        textOptions += "<input type='radio' name='attribute' value='" + attribute + "'>" + attribute + " " + playerCard.attributes[attribute] + "<br>"
    }

    var html = "<div id='options' class='cardStatus'>"

    playerCardDiv.innerHTML = frame + name + html + textOptions + '</div>'
}

function getSelectedAttribute() {
    var attributeRadio = document.getElementsByName('attribute')
    for (var i = 0; i < attributeRadio.length; i++) {
        if (attributeRadio[i].checked) {
            return attributeRadio[i].value
        }
    }
}

function play() {
    var resultDiv = document.getElementById("result")
    var selectedAttribute = getSelectedAttribute()

    if (playerCard.attributes[selectedAttribute] > machineCard.attributes[selectedAttribute]) {
        resultHTML = '<p class="finalResult">Venceu!</p>'
        playerPoints++
    }
  else if (playerCard.attributes[selectedAttribute] < machineCard.attributes[selectedAttribute]) {
        resultHTML = '<p class="finalResult">Perdeu!</p>'
        machinePoints++
    }
  else {
        resultHTML = '<p class="finalResult">Empatou!</p>'
    }
  
  if (cards.length == 0){
    alert("Fim de jogo!")
      if(playerPoints > machinePoints) {
        resultHTML = '<p class="finalResult">Você Venceu!</p>'
      }
    
      else if(playerPoints == machinePoints) {
        resultHTML = '<p class="finalResult">Empate!</p>'
      }
    
      else {
        resultHTML = '<p class="finalResult">Você Perdeu!</p>'
      }
  }
  
  else {
    document.getElementById("btnNextMatch").disabled = false
  }

    resultDiv.innerHTML = resultHTML
    document.getElementById("btnPlay").disabled = true
  
    showMachineCard()
    refreshScoreboard()
}

function showMachineCard() {
    var machineCardDiv = document.getElementById("machineCard")
    var frame = '<img src="../../public/images/card-super-trunfo-transparent-ajustado.png" style=" width: inherit; height: inherit; position: absolute;">';
    machineCardDiv.style.backgroundImage = `url(${machineCard.image})`
    var name = `<p class="cardSubtitle">${machineCard.name}</p>`
    var textOptions = ""

    for (var attribute in machineCard.attributes) {
        textOptions += "<p type='text' name='attribute' value='" + attribute + "'>" + attribute + " " + machineCard.attributes[attribute] + "<br>"
    }

    var html = "<div id='options' class='cardStatus --spacing'>"

    machineCardDiv.innerHTML = frame + name + html + textOptions + '</div>'
}

function nextMatch() {
  var cardsDiv = document.getElementById("cards")
  
  cardsDiv.innerHTML = `<div id="playerCard">
                        <img src="../../public/images/card-super-trunfo-transparent-ajustado.png" style=" width: inherit; height: inherit; position: absolute;">
                        <h3></h3>
                    </div> <div id="machineCard" class="card"><img
                            src="../../public/images/card-super-trunfo-transparent-ajustado.png" style=" width: inherit; height: inherit; position: absolute;"></div>`
  
  document.getElementById("btnRaffle").disabled = false
  document.getElementById("btnPlay").disabled = true
  document.getElementById("btnNextMatch").disabled = true
  
  var resultDiv = document.getElementById("result")
  resultDiv.innerHTML = ""
  
  
}