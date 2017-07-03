// Déclaration des variables
var ordi;
var joueur;
var scoreJoueur = 0;
var scoreOrdi = 0;
var sound;

//***********************************fonctions******************************

//ffonction qui permet de jouer du son !!!!!
function playAudio(sound) {

  sound.play();
}

// fonction lorsque le joueur à perdu un point !!!!!!
function perdu() {
  alert("tu as perdu !");
  scoreOrdi += 1;
  playAudio(document.getElementById("myAudio2"));
  document.getElementById("score").innerHTML = "Moi : " + scoreJoueur + "  -  " + scoreOrdi + " : ordi";


}

// fontion lorsque le joueur gagne un point !!!!!!!

function win() {
  alert("tu as gagné !");
  scoreJoueur += 1;
  playAudio(document.getElementById("myAudio"));
  document.getElementById("score").innerHTML = "Moi : " + scoreJoueur + "  -  " + scoreOrdi + " : ordi";


}


// fonction lorsque le jeu se lance !!!!!!

function LancerJeu() {
  document.getElementById("jeu").style.display = 'flex';
  document.getElementById("boutonjeu").style.display = 'none';
  document.getElementById("back").style.backgroundImage = "url('../img/fond2.jpg')";
  document.getElementById("back").style.backgroundPosition = "center";
}

// fonction lorsque le jeu se finit !!!!

function ArreterJeu() {
  document.getElementById("jeu").style.display = 'none';
  document.getElementById("boutonjeu").style.display = 'block';
  document.getElementById("back").style.backgroundImage = "url('../img/fond.jpg')"
  document.getElementById("back").style.backgroundPosition = "top";
}

// fonction jouer avec comme variable joueur (pierre, feuille ou ciseaux)
function Jouer(joueur) {




  var ordi = Math.random();

  if (ordi >= 0 && ordi < 0.33) {
    ordi = "pierre";
  } else if (ordi >= 0.33 && ordi < 0.66) {
    ordi = "ciseaux";
  } else {
    ordi = "papier";
  }

  if (ordi == joueur) {
    alert("Egalite");
  } else {

    switch (joueur) {
      case "pierre":
        if (ordi == "papier") {
          perdu();
          alert("L'ordi avait choisit " + ordi);
        } else {
          win();
          alert("L'ordi avait choisit " + ordi);

        }
        break;



      case "ciseaux":
        if (ordi == "pierre") {
          perdu();
          alert("L'ordi avait choisit " + ordi);
        } else {
          win();
          alert("L'ordi avait choisit " + ordi);

        }
        break;


      case "papier":
        if (ordi == "ciseaux") {
          perdu();
          alert("L'ordi avait choisit " + ordi);
        } else {
          win();
          alert("L'ordi avait choisit " + ordi);

        }
        break;

      default:
        alert("N'essaye pas de me troller !");

    }

  }

// si le joueur perd le jeu

  if (scoreOrdi >= 3) {

    alert("LOOSER !");
    scoreJoueur = 0;
    scoreOrdi = 0;
    ArreterJeu();
    document.getElementById("score").innerHTML = "Moi : " + scoreJoueur + "  -  " + scoreOrdi + " : ordi";




  }

  // si le joueur gagnele jeu

  if (scoreJoueur >= 3) {

    alert("winner !");
    scoreJoueur = 0;
    scoreOrdi = 0;
    ArreterJeu();
    document.getElementById("score").innerHTML = "Moi : " + scoreJoueur + "  -  " + scoreOrdi + " : ordi";




  }
}
