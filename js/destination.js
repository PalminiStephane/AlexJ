// module destination :
// le module destination est un module spécialisé dans la gestion des fonctionnalité de notre application
// liées aux destination.
// Ce module utilise les services proposés par le module générique messages.

const destination = {

    // un module peut, en plus de ses méthodes, posséder des propriétés.
    // on peut voir une propriété comme une variable propre à un module
    errorMessage: "Vous devez être connecté pour géré vos favoris !",
  
    // on définit les méthodes de notre module
    // on appelle méthode une fonction rangée dans un objet
    init: function() {
      console.log("ici, j'initialise mon module (par exemple en posant des écouteurs d'évènement)");
  
      // je récuère l'ensemble les button like
      const likeButtons = document.querySelectorAll('.btn__like');
  
      // pour chacun d'eux
      for (const likeButton of likeButtons){
        // j'écoute le click et je répond en exécutant le handler handlelikeButtonClick
        // handlelikeButtonClick fait parti du module destination, on indique donc : 
        // destination.handlelikeButtonClick
        likeButton.addEventListener('click', destination.handlelikeButtonClick);
      }
    },
    // gestionnaire d'évènement click sur les boutons like
    handlelikeButtonClick: function(event) {
      console.log('ca clique');
  
      // on récupère le bouton sur lequel le clic s'est produit
      const clickedButtonElement = event.currentTarget;
      
      // on récupère le plus proche ancêtre du bouton cliqué qui possède la classe card
      const destinationElement = clickedButtonElement.closest('.card');
  
      messages.removeMessages(destinationElement);
      
      console.log(clickedButtonElement);
  
      messages.addMessage(destination.errorMessage, destinationElement);    
    }
  };
  
  // l'évènement DOMContentLoaded survient quand le DOM (Document Object Model) est prêt
  document.addEventListener('DOMContentLoaded', destination.init);
  
  // equivalent à :
  // ici, on appelle la méthode init du module destination
  // pour exécuter les instruction permettant d'initialiser notre module
  // destination.init();
  
  