// module message :
// le module messages peut être vu comme un service générique (réutilisable)
// permettant la manipulation de message par d'autres modules de notre site.
// il propose :
// - l'ajout d'un nouveau message grâce à la méthode addMessage,
// - la suprpession de message existant grâce à la méthode removeMessages
const messages = {
    addMessage: function(content, parentElement){
      console.log("j'affiche un message : " + content + "dans : ", parentElement);
  
      const pElement = document.createElement('p');
      pElement.classList.add('message');
      pElement.textContent = content;    
  
      // on rajoute le message créé en tant que premier enfant de la carte récupérée.
      parentElement.prepend(pElement);
  
    },
    removeMessages: function(parentElement){
      console.log("je supprime les messages existants de :", parentElement);
  
      // je récupère tous les élément ayant la classe message contenus dans 
      // un élément donné
      const messagesElements = parentElement.querySelectorAll('.message');
  
      // pour chacun de ces messages
      for (const messageElement of messagesElements){
        // je le supprime
        messageElement.remove();
      }
    }
  };