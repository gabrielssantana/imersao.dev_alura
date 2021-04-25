var secret_number = parseInt(Math.random() * 10)
var attempts = 3

while(attempts > 0){
  
  var user_number = parseInt(prompt('Digite um número entre 0 e 10.'))
  
  if (secret_number == user_number){
    alert('Acertou!')
    break
  }

  else if(user_number > secret_number) {
    alert('O número secreto é menor.')
    attempts = attempts - 1
  }

  else if (user_number < secret_number) {
    alert('O número secreto é maior.')
    attempts = attempts - 1
  }
}

if (user_number != secret_number){
  alert('Errou. O número secreto era ' + secret_number)
 }