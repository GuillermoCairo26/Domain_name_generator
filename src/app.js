/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

window.onload = function() {
  function domainGenerator() {
    let pronoun = ["the", "our"];
    let adj = ["great", "big"];
    let noun = ["jogger", "racoon"];
    let domain = [".com", ".uy"];
    let domainGenerated = [];

    for (var i = 0; i < pronoun.length; i++) {
      for (var j = 0; j < adj.length; j++) {
        for (var k = 0; k < noun.length; k++) {
          for (var l = 0; l < domain.length; l++) {
            domainGenerated.push(pronoun[i] + adj[j] + noun[k] + domain[l]);
          }
        }
      }
    }

    let domainIndex = Math.floor(Math.random() * domainGenerated.length);
    let randomDomain = domainGenerated[domainIndex];
    return randomDomain;
  }

  let domainText = document.getElementById("nuevo_dominio");
  let btnGenerator = document.getElementById("boton_nuevo");

  btnGenerator.addEventListener("click", function() {
    domainText.innerHTML = domainGenerator();
  });
};
