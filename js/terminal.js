var before = document.getElementById("before");
var liner = document.getElementById("liner");
var command = document.getElementById("typer"); 
var textarea = document.getElementById("texter"); 
var terminal = document.getElementById("terminal");

var git = 0;
var pw = false;
let pwd = false;
var commands = [];

setTimeout(function() {
  loopLines(banner, "", 80);
  textarea.focus();
}, 100);

window.addEventListener("keyup", enterKey);

textarea.value = "";
command.innerHTML = textarea.value;

function enterKey(e) {
  if (e.keyCode == 181) {
    document.location.reload(true);
  }

  if (pw) {
    let et = "*";
    let w = textarea.value.length;
    command.innerHTML = et.repeat(w);

    if (textarea.value === password) {
      pwd = true;
    }

    if (pwd && e.keyCode == 13) {
      loopLines(secret, "color2 margin", 120);
      command.innerHTML = "";
      textarea.value = "";
      pwd = false;
      pw = false;
      localStorage.setItem('admin', true);
      liner.classList.remove("password");
    } else if (e.keyCode == 13) {
      addLine("Mauvais Mot de Passe", "error", 0);
      command.innerHTML = "";
      textarea.value = "";
      pw = false;
      liner.classList.remove("password");
    }
  } else {
    if (e.keyCode == 13) {
      commands.push(command.innerHTML);
      git = commands.length;
      addLine("term:~$ " + command.innerHTML, "no-animation", 0);
      commander(command.innerHTML.toLowerCase());
      command.innerHTML = "";
      textarea.value = "";
    }
    if (e.keyCode == 38 && git != 0) {
      git -= 1;
      textarea.value = commands[git];
      command.innerHTML = textarea.value;
    }
    if (e.keyCode == 40 && git != commands.length) {
      git += 1;
      if (commands[git] === undefined) {
        textarea.value = "";
      } else {
        textarea.value = commands[git];
      }
      command.innerHTML = textarea.value;
    }
  }
}

function commander(cmd) {
  let adm = localStorage.getItem('admin');
  switch (cmd.toLowerCase()) {

    case "hack":
      if (adm === "true") {
        addLine("Hack en cours...", "color2 margin", 0);
        hackSite();
        break;
      } else {
        addLine("Vous n'avez pas les droits d'administrateur", "error", 0);
        break;
      }
    
    case "ip":
      if (adm === "true") {
        addLine("Votre IP est 98.22.432.11", "color2 margin", 0);
        break;
      } else {
        addLine("Vous n'avez pas les droits d'administrateur", "error", 0);
        break;
      }

    case "help":
      if (adm === "true") {
        loopLines(hiddenHelp, "color2 margin", 80);
        break;
      } else {
        loopLines(help, "color2 margin", 80);
        break;
      }
    case "nothing":
        loopLines(nothing, "color2 margin", 80);
        break;
    case "password":
      loopLines(passwordText, "color2 margin", 80);
      pw = true;
      break;
    case "history":
      addLine("<br>", "", 0);
      loopLines(commands, "color2", 80);
      addLine("<br>", "command", 80 * commands.length + 50);
      break;
    case "clear":
      setTimeout(function() {
        terminal.innerHTML = '<a id="before"></a>';
        before = document.getElementById("before");
      }, 1);
      break;
    default:
      addLine("<span class=\"inherit\">Commande inconnue. Tape <span class=\"command\">'help' </span>pour la liste des commandes.</span>", "error", 100);
      break;
  }
}

function newTab(link) {
  setTimeout(function() {
    window.open(link, "_blank");
  }, 500);
}

function addLine(text, style, time) {
  var t = "";
  for (let i = 0; i < text.length; i++) {
    if (text.charAt(i) == " " && text.charAt(i + 1) == " ") {
      t += "&nbsp;&nbsp;";
      i++;
    } else {
      t += text.charAt(i);
    }
  }
  setTimeout(function() {
    var next = document.createElement("p");
    next.innerHTML = t;
    next.className = style;
    before.parentNode.insertBefore(next, before);
  }, time);
}

function loopLines(name, style, time) {
  name.forEach(function(item, index) {
    addLine(item, style, index * time);
  });
}


