// Déclaration des variables
var ordi;
var joueur;
var scoreJoueur = 0;
var scoreOrdi = 0;
var sound;
var pseudo;



//***********************************fonctions******************************
//

/**
 * document - speed of carousel from bootstrap
 *

 * @return {type}           no return
 */

$(document).ready(function() {
  // Activate Carousel
  $("#myCarousel").carousel({
    interval: 1
  });


});


//ffonction qui permet de jouer du son !!!!!
//


/**
 * playAudio - play a sound who is in index.html
 *
 * @param  {type} sound file .mp3
 * @return {type}       no return
 */
function playAudio(sound) {

  sound.play();
}





/**
 * reset - when a round is finished, all the player choices and the carousel is visible
 *
 * @return {type}  no return
 */
function reset() {
  document.getElementById("ciseauxjoueur").style.display = 'flex';
  document.getElementById("papierjoueur").style.display = 'flex';
  document.getElementById("pierrejoueur").style.display = 'flex';
  document.getElementById("myCarousel").style.display = 'flex';
  document.getElementById("choiceordi").src = "";

}



/**
 * comparer - when the round is fished, if a score is more of 3, the game stop
 *
 * @return {type}  no return
 */
function comparer() {
  if (scoreOrdi == 3) {

    alert("LOOSER !");
    scoreJoueur = 0;
    scoreOrdi = 0;
    ArreterJeu();
    document.getElementById("score").innerHTML = pseudo + " : " + scoreJoueur + "  -  " + scoreOrdi + " : ordi";




  }

  // si le joueur gagnele jeu

  if (scoreJoueur == 3) {

    alert("winner !");
    scoreJoueur = 0;
    scoreOrdi = 0;
    ArreterJeu();
    document.getElementById("score").innerHTML = pseudo + " : " + scoreJoueur + "  -  " + scoreOrdi + " : ordi";




  }
}



// fonction lorsque le joueur à perdu un point !!!!!!
/**
 * perdu - when a player loose a round.
 *
 * @return {type}  no return
 */

function perdu() {
  document.getElementById("back").style.backgroundImage = "url('img/pailette.gif')";

  setTimeout(function() {
    document.getElementById("score").innerHTML = "You loose !";
    document.getElementById("back").style.backgroundImage = "";
  }, 2000)
  setTimeout(function() {
    scoreOrdi += 1;
    playAudio(document.getElementById("myAudio2"));
    document.getElementById("score").innerHTML = pseudo + " : " + scoreJoueur + "  -  " + scoreOrdi + " : ordi";
    comparer();
  }, 3000)

}


/**
 * egalite - when the choice ordi is the same as the choice of player
 *
 * @return {type}  no return
 */
function egalite() {
  document.getElementById("back").style.backgroundImage = "url('img/pailette.gif')";

  setTimeout(function() {
    document.getElementById("score").innerHTML = "Egalite !";
    document.getElementById("back").style.backgroundImage = "";
  }, 2000)
  setTimeout(function() {
    document.getElementById("score").innerHTML = pseudo + " : " + scoreJoueur + "  -  " + scoreOrdi + " : ordi";
    comparer();
  }, 3000)

}



/**
 * win - when a player win a round
 *
 * @return {type}  no return
 */
function win() {
  document.getElementById("back").style.backgroundImage = "url('img/pailette.gif')";

  setTimeout(function() {
    document.getElementById("score").innerHTML = "You win !";
    document.getElementById("back").style.backgroundImage = "";
  }, 2000)

  setTimeout(function() {
    scoreJoueur += 1;
    playAudio(document.getElementById("myAudio"));
    document.getElementById("score").innerHTML = pseudo + " : " + scoreJoueur + "  -  " + scoreOrdi + " : ordi";
    comparer();
  }, 3000)




}






/**
 * LancerJeu - when you enter your username and you want to play the game
 *
 * @return {type}  no return
 */
function LancerJeu() {
  pseudo = document.getElementById("pseudo").value;
  document.getElementById("jeu").style.display = 'flex';
  document.getElementById("back").style.justifyContent = 'flex-start';
  document.getElementById("game").style.display = 'none';
  document.getElementsByTagName("form")[0].style.display = 'none';
  document.getElementById("boutonjeu").style.display = 'none';
  document.getElementsByTagName("h1")[0].innerHTML = "Bonjour " + pseudo;
  document.getElementById("versus").style.display = 'flex';

}



/**
 * ArreterJeu - when a player has 3 point, the site is reloaded
 *
 * @return {type}  no return
 */
function ArreterJeu() {
  // document.getElementById("jeu").style.display = 'none';
  // document.getElementById("boutonjeu").style.display = 'block';
  // document.getElementById("back").style.backgroundImage = "url('img/fond.jpg')"
  // document.getElementById("back").style.backgroundPosition = "top";
  window.location.reload()
}


// fonction jouer avec comme variable joueur (pierre, feuille ou ciseaux)
/**
 * Jouer - determine and compare the player choie and the computer choice
 *  script
 * @param  {type} joueur can be : pierre, feuille or ciseaux
 * @return {type}        no return
 */

function Jouer(joueur) {


  if (joueur == "pierre") {
    document.getElementById("ciseauxjoueur").style.display = 'none';
    document.getElementById("papierjoueur").style.display = 'none';
  } else if (joueur == "papier") {
    document.getElementById("ciseauxjoueur").style.display = 'none';
    document.getElementById("pierrejoueur").style.display = 'none';
  } else {
    document.getElementById("papierjoueur").style.display = 'none';
    document.getElementById("pierrejoueur").style.display = 'none';
  }


  var ordi = Math.random();

  if (ordi >= 0 && ordi < 0.33) {
    ordi = "pierre";
    document.getElementById("myCarousel").style.display = 'none';
    document.getElementById("choiceordi").src = "img/pierre.png";

  } else if (ordi >= 0.33 && ordi < 0.66) {
    ordi = "ciseaux";
    document.getElementById("myCarousel").style.display = 'none';
    document.getElementById("choiceordi").src = "img/ciseaux.png";

  } else {
    ordi = "papier";
    document.getElementById("myCarousel").style.display = 'none';
    document.getElementById("choiceordi").src = "img/feuille.png";

  }




  if (ordi == joueur) {
    egalite();
  } else {

    switch (joueur) {
      case "pierre":
        if (ordi == "papier") {
          perdu();
          // alert("L'ordi avait choisit " + ordi);
        } else {
          win();
          // alert("L'ordi avait choisit " + ordi);

        }
        break;



      case "ciseaux":
        if (ordi == "pierre") {
          perdu();
          // alert("L'ordi avait choisit " + ordi);
        } else {
          win();
          // alert("L'ordi avait choisit " + ordi);

        }
        break;


      case "papier":
        if (ordi == "ciseaux") {
          perdu();
          // alert("L'ordi avait choisit " + ordi);
        } else {
          win();
          // alert("L'ordi avait choisit " + ordi);

        }
        break;

      default:
        alert("N'essaye pas de me troller !");

    }



  }


  // si le joueur perd le jeu

  setTimeout(reset, 3000);


}
