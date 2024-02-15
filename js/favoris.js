const favoris = {
    // j'ai besoin que les favoris soient actifs dès l'affichage de la page
    // je vais donc créer une functionnalité qui va le lancer dès la fin du chargement de la page
    init: function(){
        console.log("je démarre les favoris");
        // ici je veux ajouter des eventListener à tout les boutons
        // et ça dès la fin du chargement de la page
        const test = document.getElementById("test-favoris");
        test.addEventListener("click", favoris.handleClick);

        // et d'autre eventListener
    },
    /******************** HANDLES ***********************/
    handleClick: function(event){
        event.preventDefault();
        console.log("Tu m'a cliqué");

        // TODO : afficher un message dans l'article parent
        // j'ai le bouton sur lequel on a cliqué
        const buttonClicked = event.currentTarget;
        // je cherche son parent <article>
        // sauf que si on fait un querySelector, on ne cherche que dans les enfants
        // pour chercher dans les parents, on part du bouton et on utilise .closest()
        const parentArticle = buttonClicked.closest('article.card');
        // console.log(parentArticle);
        messages.addMessage("vous devez être connectés pour gérer vos favoris", parentArticle);
        
    }
}
// cette fonctionnalité se lance immédiatement
//! même si la page n'a pas fini de se charger
// on ne le verra pas ici, mais cela pose des soucis quand la page HTML est trop grande
// ou quand des éléments sont ajoutés par du JS
// favoris.init(); // pas bonne solution

// il faut donc attendre que l'évènement de fin de chargement de la page se lance
// * évènement ??? de quel évènement on parle ?
// on va s'abonner à l'évènement "DOMContentLoaded" de document
document.addEventListener("DOMContentLoaded", favoris.init);