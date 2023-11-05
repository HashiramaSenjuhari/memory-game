const cardArray = [
  {
    name:'jiraya',
    img: 'img/jiraya.jpeg'
  },
  {
    name:'naruto',
    img: 'img/naruto-hari.jpg'
  },
  {
    name:'konan',
    img: 'img/konan card.jpeg'
  },
  {
    name:'sasuke',
    img: 'img/sasuke.jpeg'
  },
  {
    name:'tobi',
    img: 'img/tobi.png'
  },
  {
    name:'tobirama',
    img: 'img/tobirama.jpg'
  },
  {
    name:'kakashi',
    img: 'img/kakashi.png'
  },
  {
    name:'hashirama senju',
    img: 'img/hashirama senju.jpeg'
  },
  {
    name:'jiraya',
    img: 'img/jiraya.jpeg'
  },
  {
    name:'naruto',
    img: 'img/naruto-hari.jpg'
  },
  {
    name:'konan',
    img: 'img/konan card.jpeg'
  },
  {
    name:'sasuke',
    img: 'img/sasuke.jpeg'
  },
  {
    name:'tobi',
    img: 'img/tobi.png'
  },
  {
    name:'tobirama',
    img: 'img/tobirama.jpg'
  },
  {
    name:'kakashi',
    img: 'img/kakashi.png'
  },
  {
    name:'hashirama senju',
    img: 'img/hashirama senju.jpeg'
  },
]

cardArray.sort(()=>0.5-Math.random())
// console.log(cardArray)

const gridDisplay = document.getElementById('container')
// console.log(gridDisplay)

cardChosen = []
cardChosenID = []
cardsWon = []

function createBoard(){
  for(i=0;i<16;i++){
    const card = document.createElement('img')
    card.setAttribute('src','img/naruto-backCard.jpg')
    card.setAttribute('id',i)
    card.addEventListener('click',flipCard)
    // console.log(card,i)
    gridDisplay.appendChild(card)
  }
}
createBoard()

function checkMatch(){
  // console.log('you have clicked two cards')
  const cards = document.querySelectorAll('img')
  const optionOne = cardChosenID[0]
  const optionTwo = cardChosenID[1]
  if(optionOne == optionTwo){
    cards[optionOne].setAttribute('src','')
    cards[optionTwo].setAttribute('src','')
  }
  if (cardChosen[0] == cardChosen[1]){
    // alert('you found a match')
    cards[optionOne].setAttribute('src','')
    cards[optionTwo].setAttribute('src','')
    cards[optionOne].removeEventListener('click',flipCard)
    cards[optionTwo].removeEventListener('click',flipCard)
    cardsWon.push(cardChosen)
  }
  else
  {
    cards[optionOne].setAttribute('src','img/naruto-backCard.jpg')
    cards[optionTwo].setAttribute('src','img/naruto-backCard.jpg')
  }
  
cardChosen = []
cardChosenID = []
if(cardsWon.length == cardArray.length/2){
  document.getElementById('result').textContent = 'You are the champion'
}
}

function flipCard(){
  const cardId = this.getAttribute('id')
  // console.log(cardArray[cardId].name)
  cardChosen.push(cardArray[cardId].name)
  cardChosenID.push(cardId)
  console.log(cardChosenID)
  // console.log('clicked',cardId)
  // console.log(cardChosen)
  this.setAttribute('src',cardArray[cardId].img)
  if(cardChosen.length ===2){
    setTimeout(checkMatch,500)
  }
}

// music
// Function to toggle play/pause
function toggleAudio() {
  var audioElement = document.getElementById('player');
  var soundOn = document.getElementById('play');
  var soundOff = document.getElementById('pause');
  var mute = document.getElementById('pause-p')
  var unmute = document.getElementById('play-p')

  if (audioElement.paused) {
    audioElement.play();
    soundOn.style.display = 'inline';  // Show the "play" image
    soundOff.style.display = 'none';   // Hide the "pause" image
    unmute.style.display = 'none';
    mute.style.display = 'inline';
  } else {
    audioElement.pause();
    soundOn.style.display = 'none';    // Hide the "play" image
    soundOff.style.display = 'inline'; // Show the "pause" image
    mute.style.display = 'none';
    unmute.style.display = 'inline';
  }
}

// Auto-play the audio when the page loads (initiated by user interaction)
window.addEventListener('load', function () {
  toggleAudio();  // Start the audio playback
});