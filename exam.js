document.addEventListener("DOMContentLoaded", function() {
  var names = ["Yaakov", "John", "Jen", "Jason", "Paul", "Frank", "Larry", "Paula", "Laura", "Jim"];

  var helloSpeaker = {
    speak: function (name) {
      return "Hello " + name;
    }
  };

  var byeSpeaker = {
    speak: function (name) {
      return "Goodbye " + name;
    }
  };

  var outputList = document.getElementById("output");

  for (var i = 0; i < names.length; i++) {
    var firstLetter = names[i].charAt(0).toLowerCase();
    var message;

    if (firstLetter === 'j') {
      message = byeSpeaker.speak(names[i]);
    } else {
      message = helloSpeaker.speak(names[i]);
    }

    console.log(message);

    // Crée un élément <li> et ajoute-le à la liste
    var listItem = document.createElement("li");
    listItem.textContent = message;
    outputList.appendChild(listItem);
  }
});
