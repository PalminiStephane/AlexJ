// Ordre d'exécution - 1 - on déclare notre module
const comments = {
  
    // Ordre d'exécution - 7 - l'ensemble des instruction de la méthode handleRatingClick
    // ATTENTION : ces instruction ne seront exécutées qu'après el clic sur un élément rating,
    // pas immédiatement au chargemetn de la page.
    handleRatingClick: function(event){
      
      console.log('ca clique sur le rating');
  
      // on récupère la checkbox cliquée
      const clickedCheckbox = event.currentTarget;
      console.log(clickedCheckbox);
  
      // on récupère son état (checké ou pas)
      const isChecked = clickedCheckbox.checked;
      console.log(isChecked);
  
      // on récupère la valeru correspondant à la case cochée
      const rating = clickedCheckbox.value;
      console.log(rating);
      console.log(typeof(rating));
  
      // Plan d'action - 1ere méthode :
      // - on récupère l'ensemble des commentaires :
      // - pour chacun :
      //   - si son rating correspond
      //     - si isChecked est vrai :
      //       - on l'affiche (display ou une classe)
      //     - sion :
      //       - on le masque (display ou une classe)
  
      const reviewsElements = document.querySelectorAll('.review');
  
      for (const reviewElement of reviewsElements){
        // Pour accéder à la valeur de l'attribut de données data-rating
        // j'accède à la propriété dataset puis à sa propriété rating 
        // -> reviewElement.dataset.rating
        const reviewRating = reviewElement.dataset.rating;
        
        if (reviewRating === rating){
          if (isChecked){
            // on l'affiche (le commentaire)
            reviewElement.classList.remove('review--hidden');
          }else{
            // on le masque  (le commentaire)
            reviewElement.classList.add('review--hidden');
          }
        }      
      }
  
      // Plan d'action - 2eme méthode :
      // - on récupère l'ensemble des commentaires qui ont le rating voulu :
      // - pour chacun :
      //     - si isChecked est vrai :
      //       - on l'affiche (display ou une classe)
      //     - sion :
      //       - on le masque (display ou une classe)
  
      // En javascript, on peut utiliser les littéraux de gabarit (template string)
      // pour interpoler (injecter) la valeur de variables dans des chaînes de caractères.
      
      /*
      const selector = `[data-rating="${rating}"]`;
      const commentsWithTheRightRatingElements = document.querySelectorAll(selector);
  
      for (const commentWithTheRightRatingElement of commentsWithTheRightRatingElements){
          if (isChecked){
            // on l'affiche (le commentaire)
            commentWithTheRightRatingElement.classList.remove('review--hidden');
          }else{
            // on le masque  (le commentaire)
            commentWithTheRightRatingElement.classList.add('review--hidden');
          }      
      }
      */
    },
  
    // Ordre d'exécution - 5 - l'ensemble des instruction de la méthode listenEvents
    listenEvents: function() {
      const ratingElements = document.querySelectorAll('input[name="rating"]');
  
      for (const ratingElement of  ratingElements){
        // Ordre d'exécution - 6 - on demande l'exécution de la méthode handleRatingClick
        // au clic sur un ratingElement
        ratingElement.addEventListener('click', comments.handleRatingClick);
      }
  
    },
    // Ordre d'exécution - 3 - l'ensemble des instruction de la méthode init
    init: function(){
      console.log("initialisation du module comments");
      // Ordre d'exécution - 4 - on exécute al méthode listenEvents
      comments.listenEvents();
    }
  };
  
  // Ordre d'exécution - 2 - on demande l'exécution de la méthode init
  // du module comments lorsque le DOM est prêt.
  document.addEventListener('DOMContentLoaded', comments.init);