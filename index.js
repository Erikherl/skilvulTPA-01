let imageGames = document.getElementById("image-games")

imageGames.addEventListener('click', function(event){
    let randomNumber = Math.floor(Math.random() * 5)
    imageGames.style.backgroundSize = "cover"
    imageGames.style.fontWeight = "bolder"
    
    imageGames.style.height="9rem"
    switch (randomNumber) {
      case 0:{
        imageGames.style.backgroundImage = "url(./assets/games/Cat.jpg)"
        break;
      }
      case 1:{
        imageGames.style.backgroundImage = "url(./assets/games/Cat2.jpg)"
        break;
      }
      case 2:{
        imageGames.style.backgroundImage = "url(./assets/games/Cat3.jpg)"
        break;
      }
      case 3:{
        imageGames.style.backgroundImage = "url(./assets/games/Cat4.jpg)"
        break;
      }
      case 4:{
        imageGames.style.backgroundImage = "url(./assets/games/Cat5.jpg)"
        break;
      }
      default:{
  
      }
    }
  }
)

let gotop = document.getElementById("top-button");

window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    gotop.style.display = "block";
  } else {
    gotop.style.display = "none";
  }
}

function topFunction() {
  document.body.scrollTop = 0; 
  document.documentElement.scrollTop = 0; 
}
