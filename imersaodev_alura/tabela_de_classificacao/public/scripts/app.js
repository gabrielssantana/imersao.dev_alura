//Variables

var player0 = {
    name: "Paulo",
    victories: 0,
    ties: 0,
    defeats: 0,
    points: 0
  }
  
  var player1 = {
    name: "Rafa",
    victories: 0,
    ties: 0,
    defeats: 0,
    points: 0
  }
  
  var players = [player0, player1]
  
  //Code
  
  player0.points = pointsCalculator(player0)
  player1.points = pointsCalculator(player1)
  printPlayers(players)
  
  //Functions
  
  function printPlayers(players){
    var html = ''
    for(var i = 0; i < players.length; i++){
      html += '<tr><td>' + players[i].name + '</td>'
      html += '<td>' + players[i].victories + '</td>'
      html += '<td>' + players[i].ties + '</td>'
      html += '<td>' + players[i].defeats + '</td>'
      html += '<td>' + players[i].points + '</td>'
      html += "<td><button onClick='addVictory(" + i + ")'>Vitória</button></td>"
      html += "<td><button onClick='addTie(" + i + ")'>Empate</button></td>"
      html += "<td><button onClick='addDefeat(" + i + ")'>Derrota</button></td></tr>"
    }
    var playersTable = document.getElementById('playersTable')
   playersTable.innerHTML = html
  }
  
  function pointsCalculator(player){
    var points = player.victories * 3 + player.ties
    return points
  }
  
  function addVictory(i){
    var player = players[i]
    player.victories++
    player.points = pointsCalculator(player)
    printPlayers(players)
  }
  
  function addTie(i){
    player = players[i]
    player.ties++
    player.points = pointsCalculator(player)
    printPlayers(players)
  }
  
  function addDefeat(i){
    player = players[i]
    player.defeats++
    printPlayers(players)
  }
  