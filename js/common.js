document.addEventListener("DOMContentLoaded", function () {
  var elems = document.querySelectorAll(".carousel");
  var instances = M.Carousel.init(elems);
  var elems = document.querySelectorAll('.sidenav');
  var instances = M.Sidenav.init(elems);
  var cursor = $("cursor");

  localStorage.setItem('admin', false);
  cursor.style.left = "0px";
  
  VanillaTilt.init(document.querySelectorAll(".card-ph"), {
    reverse:true
  });
});

function $(elid) {
  return document.getElementById(elid);
}

function divShow() {
  document.getElementById("contact-container").style.display = "block";
}

function divHide() {
  document.getElementById("contact-container").style.display = "none";
}

function nl2br(txt) {
  return txt.replace(/\n/g, "");
}

function typeIt(from, e) {
  e = e || window.event;
  var w = $("typer");
  var tw = from.value;
  if (!pw) {
    w.innerHTML = nl2br(tw);
  }
}

function moveIt(count, e) {
  e = e || window.event;
  var keycode = e.keyCode || e.which;
  if (keycode == 37 && parseInt(cursor.style.left) >= 0 - (count - 1) * 10) {
    cursor.style.left = parseInt(cursor.style.left) - 10 + "px";
  } else if (keycode == 39 && parseInt(cursor.style.left) + 10 <= 0) {
    cursor.style.left = parseInt(cursor.style.left) + 10 + "px";
  }
}

function alert(txt) {
  console.log(txt);
}


onkeydown = onkeyup = function(e){
    e = e || event;
    if (e.keyCode == 117) {
      grayscale();
    }
}

function grayscale() {
  document.documentElement.className = 'filtered';
}

function hackSite() {
  requestFullScreen(document.documentElement);
  document.getElementById('bd').innerHTML= '<iframe src="https://matias.ma/nsfw/"></iframe>';
}

function requestFullScreen(element) {
  var requestMethod = element.requestFullScreen || element.webkitRequestFullScreen || element.mozRequestFullScreen || element.msRequestFullScreen;
  if (requestMethod) { 
      requestMethod.call(element);
  } else if (typeof window.ActiveXObject !== "undefined") { 
      var wscript = new ActiveXObject("WScript.Shell");
      if (wscript !== null) {
          wscript.SendKeys("{F11}");
      }
  }
}

function changeTitle(){
  document.getElementById('tle').innerHTML = 'Léon et Guardia chez Matthieu';
  document.getElementById('ple').innerHTML = `
  Depuis le début de nos études de patissier chez Mathieu School nous avons entrepris 529239 projets,
  dans différents groupes. Mais nous sommes au sein du même groupe depuis le projet 423423. N'hésitez pas à aller voir
  nos projets dans la section Projets ou vous ennuyer avec le terminal ci-dessous.
  `;
}

function getAdmin() {
  return console.log(password);
}

var password = "admin";

nothing = [
  "<br>",
  '<span class="color2">Cette commande ne fait rien.. Ça sert à rien d\'essayer..</span>',
  "<br>",
];

help = [
  "<br>",
  '<span class="command">nothing</span>          Ne fait rien',
  '<span class="command">history</span>           Voir votre historique de commandes',
  '<span class="command">help</span>               Afficher toutes les commandes',
  '<span class="command">clear</span>              Clear le terminal',
  '<span class="command">password</span>       Mot De Passe',
  "<br>",
];

hiddenHelp = [
  "<br>",
  '<span class="command">nothing</span>          ?',
  '<span class="command">history</span>           Voir votre historique de commandes',
  '<span class="command">help</span>               Afficher toutes les commandes',
  '<span class="command">clear</span>              Clear le terminal',
  '<span class="command">ip</span>                   Affiche votre IP 😱',
  "<br>",
]

banner = [
  '<span class="color2">Tape </span> <span class="command">\'help\'</span> <span class="color2">pour voir toutes les commandes.</span>',
];

sudo = [
  '<span class="color2">Haha, etre admin, c\'est pas si facile que ça. 🤣</span>',
];

passwordText = [
  "<br>",
  '<span class="color2">Entrez le mot de passe:</span>',
  "<br>",
]

secret = [
  "<br>",
  '<span class="color2">Bien joué, vous avez trouvé le mot de passe !</span>',
  '<span class="color2">Vous avez maintenant accès aux commandes admin.</span>',
  "<br>",
]