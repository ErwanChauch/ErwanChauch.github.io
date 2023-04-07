let dailyWord = 'abala'
let currentRow = 1
let currentLetterCount = 1
let currentGuess=[]

function listenToTyping() {
  document.addEventListener('keydown', function(event) {
    const key = event.key;
    if (key === 'Enter') { // Si l'utilisateur fait 'Entree'
      if(currentLetterCount==6){
        tryWord()
        console.log('test');
        currentRow++
        currentLetterCount=1
      }
      else{
        console.log('pas assez de lettres')
      }
    }
    else if (key === 'Backspace' && currentLetterCount > 1) { // Retour arrière
      currentLetterCount -= 1;
      document.querySelector(`.row${currentRow} > .box${currentLetterCount}`).innerText = "";
      console.log(currentLetterCount)
      currentGuess.pop()
    }
    else if (/^[a-zA-Z]$/.test(key) && currentLetterCount <= 5) { // Autres lettres
      document.querySelector(`.row${currentRow} > .box${currentLetterCount}`).innerText = key.toUpperCase();
      currentLetterCount++
      console.log(currentLetterCount)
      
    }
  })
}

function tryWord(){
  if(currentGuess.join()==dailyWord){
    alert('Victoire')
  }
  
}
listenToTyping()


