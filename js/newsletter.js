console.log("on s'occupe de la fonctionnalité newsletter ici");

////////////////////////////////
// OUVERTURE / FERMETURE DU BLOC NEWSLETTER
////////////////////////////////
const newsletterMenuElement = document.querySelector('#newsletter-menu');
const newsletterCloseElement = document.querySelector('.newsletter__close');

newsletterMenuElement.addEventListener('click', handleNewsletterButtonClick);
newsletterCloseElement.addEventListener('click', handleNewsletterButtonClick);

// - dans le gestionnaire d'évènement :
function handleNewsletterButtonClick(event){
  // on bloque le comportement par défaut du click sur un lien (la navigation)
  event.preventDefault();

  // on gère maintenant cet évènement comme on le souhaite.
  console.log("c'est parti, je réagis");

  //    - récupérer l'élément de l'interface que l'on souhaite modifier (le bloc newsletter),
  const newsletterElement = document.querySelector('.newsletter');
  console.log(newsletterElement);

  //    - le modifier (ici, sa classe).
  newsletterElement.classList.toggle('newsletter--on');
}

////////////////////////////////
// SOUMISSION DU FORMULAIRE NEWSLETTER
////////////////////////////////
const forbiddenDomains = [
  '@yopmail.com',
  '@yopmail.fr',
  '@yopmail.net',
  '@cool.fr.nf',
  '@jetable.fr.nf',
  '@courriel.fr.nf',
  '@moncourrier.fr.nf',
  '@monemail.fr.nf',
  '@monmail.fr.nf',
  '@hide.biz.st',
  '@mymail.infos.st',
];


// ici, on cible un élément de type form (qui est une balise form)
// et qui est descendant d'un élément qui porte la classe nesletter.
const newsletterFormElement = document.querySelector('.newsletter form');

newsletterFormElement.addEventListener('submit', handleNewsletterFormSubmit);

function handleNewsletterFormSubmit(event){

  console.log('je gère la soumission');

  const newsletterElement = document.querySelector('.newsletter');

  // on commence par supprimer l'élément message potentiellement existant
  messages.removeMessages(newsletterElement);

  const newsletterFieldElement = document.querySelector('.newsletter__field');

  console.log(newsletterFieldElement);

  const newsletterFieldValue = newsletterFieldElement.value;

  console.log(newsletterFieldValue);

  // plan d'action :
  // - je récupère l'input et plus particulièrement la valeur qu'il contient
  // - j'essaie de déterminer si l'adresse saisie est correcte, c'est à dire qu'elle ne concerne
  //   pas une extension précisée dans le tableau forbiddenDomains,
  //   pour cela on va :
  //   - parcourir le tableau des extensions interdites,
  //   - pour chaque extension :
  //      - si l'adresse e-mail correspond à l'extension courante, on sait qu'il y a un probleme
  //      - sinon, on continue
  //   - une fois l'ensemble du tableau parcouru, on saura si l'adresse saisie est valide ou pas
  //   - on pourra agir en conséquence

  // par défaut, on considère que l'adresse saisie est valide
  let isValidEmail = true;
  for (const currentForbiddenDomain of forbiddenDomains){    
    console.log(currentForbiddenDomain);
    // si l'adresse correspond à une extension invalide, on la marque (l'addresse) invalide.
    if (newsletterFieldValue.includes(currentForbiddenDomain)){
      isValidEmail = false;
    }
  }

  // en sorite de boucle, on pourra consulter notre 'marqueur' (drapeau, flag)
  // et agir en conséquence  
  if (isValidEmail){
    console.log('tout est ok');
  }else{
    // le comprtement par défaut de la soumission d'un formulaire est d'envoyer les données
    // du formulaire vers la page page courante (ou la page correspondant à l'attribut action du formulaire)
    // ici, ce n'est oas ce que je veux, je bloque ce comportement
    event.preventDefault();

    console.log("j'averti l'utilisateur d'un problème");

    // objectif
    // ajouter un paragraphe d'alerte possédant la classe message au début du bloc newsletter

    // plan d'action
    // - créer un element paragraphe
    // - lui ajouter la classe message
    // - lui ajouter le contenu du message
    // - récupérer l'élément qui porte la class newsletter
    // - ajouter l'élément créé à l'élément récupéré.

    // mise en oeuvre
    messages.addMessage('Les adresses jetables ne sont pas admises', newsletterElement);
  }

  // Note :
  // la boucle for of est plus pratique, elle nous évite à avoir à géré nous même
  // les index permettant le parcours d'un tableau et la récupération de l'élément courant à chaque tour de boucle
  /*
  for (let index = 0; index < forbiddenDomains.length; index++){
    const currentForbiddenDomain = forbiddenDomains[index];
  }
  */



}