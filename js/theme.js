// Objectif 
// Mémoriser le thème choisi par l'utilisateur durant sa navigation sur trip O'dvisor

// Plan d'action
// - mémoriser le thème choisi au click sur le bouton (en choisissant un lieu de stockage adapté : localStorage)
// - au chargement de la page, appliquer le bon thème.

// Objectif 
// Gérer les thèmes de couleurs

// Plan d'action
// - récupérer les bouton de l'UI permettant le changement de couleur,
// - écouter le click sur ces boutons,
// - répondre dans un gestionnaire d'évènement en venant modifier les classes du body
// - mémorisation du thème couleur courant


const theme = {

    // classe css à appliquer pour passer en dark mode
    darkClass: 'theme-dark',
  
    // référence vers l'élément body du DOM
    bodyElement: null,
  
    // quand on appelle cette fonction, le thème change
    // si thème sombre -> on passe en thème clair (suppression de la classe theme-dark)
    // si thème clair -> on passe en thème sombre (ajout de la classe theme-dark)
    changeTheme: function(){
        // on récupère le body (qui est l'élément qu'on veut modifier)
        // on pourrait utiliser document.getElementsByTagName('body'), mais ça va nous
        // retourner un tableau (vu qu'il y a un S à getElementS !)
        // const body = document.querySelector('body');
  
        // pour debug :
        //console.log(body);
  
        // on peut accéder à la liste des classes avec body.classList 
  
        // si body a la classe theme sombre
        // if(body.classList.contains('theme-dark')) {
        //     // on passe en theme clair = on retire la classe theme-dark à body
        //     body.classList.remove('theme-dark');
        // } else {
        //     // on passe en theme sombre = on ajoute la classe theme-dark à body
        //     body.classList.add('theme-dark');
        // }
            
        // toggle est l'équivalent du if/else ci-dessus :
        // ça permet d'inverser un état
        theme.bodyElement.classList.toggle(theme.darkClass);
    },
  
    // sauvegarde du thème dans le local storage
    saveToLocalStorage: function(){
  
      // on vérifie en accédant au DOM si on est en dark mode ou pas
      // const body = document.querySelector('body');
      // ou :
      // const body = document.body;
  
      let isDarkMode = false;
      if (theme.bodyElement.classList.contains(theme.darkClass)){
        isDarkMode = true;
      }
  
      // on stocke l'information dans le localStorage
      const isDarkModeJSON = JSON.stringify(isDarkMode);
      localStorage.setItem('isDarkMode', isDarkModeJSON);
    },
  
    // chargement depuis le localStorage
    loadFromLocalStorage: function(){
  
      // lire l'élément isDarkMode du localStorage
      const isDarkModeJSON = localStorage.getItem('isDarkMode');
      const isDarkMode = JSON.parse(isDarkModeJSON);
  
      // si isDarkMode vaut vrai, appliquer la classe theme.darkClass sur le body
      if (isDarkMode){
        // const body = document.querySelector('body');
        theme.bodyElement.classList.add(theme.darkClass);
      }
    },
  
    // gestionnaire d'évènement du click sur le bouton clair / sombre
    handleSwitchButtonClick: function(){
      theme.changeTheme();
      theme.saveToLocalStorage();
    },
  
    // sauvegarde du thème couleur en localStorage
    saveColorThemeToLocalStorage: function (colorTheme){
      localStorage.setItem('colorTheme', colorTheme);
    },
  
    // chargement du thème couleur depuis le localStorage
    loadColorThemeFromLocalStorage: function() {
      const colorTheme = localStorage.getItem('colorTheme');
  
      // si un thème a été mémorisé
      if (colorTheme) {
        // on applique ce thème couleur
        theme.changeColorTheme(colorTheme);
      }
    },
  
    // traitement du changement effectif de thème
    changeColorTheme: function(colorTheme){
      // on accède directement à theme.bodyElement car on a récupéré al référence à cet élément du DOM
      // dans la méthode init :
      
      // theme.bodyElement = document.querySelector('body');
  
      // on supprime les classes liées au thème de couleur sur le body
      theme.bodyElement.classList.remove("theme-red", "theme-blue", "theme-green");
  
      // on applique la nouvelle classe
      theme.bodyElement.classList.add(colorTheme);
  
      // récupérer le logo
      const logoImageElement = document.querySelector('.logo__image');
  
      // construire le chemin vers l'image à utiliser
      const imageUrl = "img/logo-" + colorTheme +".png";
      console.log(imageUrl);
  
      // définir l'image comme source de l'élément img
      logoImageElement.src = imageUrl;
    },
  
    // gestionnaire d'évènement du click sur un bouton de changement de couleur
    handleThemeColorClick: function(event){
      console.log('click color');
  
       // je récupère la classe à appliquer (il s'agit de l'id du bouton cliqué)
       const clickedButton = event.currentTarget;
       console.log(clickedButton);
   
       const colorThemeClass = clickedButton.id;
       console.log(colorThemeClass);
  
       theme.changeColorTheme(colorThemeClass);   
       theme.saveColorThemeToLocalStorage(colorThemeClass);   
    },
  
    // méthode permettant la pose d'évènements
    listenEvents: function (){
      const switchButton = document.getElementById('theme-switch');
      switchButton.addEventListener('click', theme.handleSwitchButtonClick);
  
      // on récupère les éléments qui ont la classe theme-button
      const themeButtonsElements = document.querySelectorAll('.theme-button');
      console.log(themeButtonsElements);
  
  
      // pour chacun d'eux
      for (let index = 0 ; index < themeButtonsElements.length ; index++){
        const currentThemeButton = themeButtonsElements[index];      
        // on ajoute un écouteur d'évènement et on assigne un gestionnaire d'évenement
        currentThemeButton.addEventListener('click', theme.handleThemeColorClick);
      }
    },
  
    // méthode d'initialisation du module
    init: function(){
      
      theme.bodyElement = document.querySelector('body');
  
      // on se met en écoute d'évènements
      theme.listenEvents();
  
      // on applique le thème dark si besoin
      theme.loadFromLocalStorage();
  
      // on applique le thème couleur
      theme.loadColorThemeFromLocalStorage();
    }
  };
  
  document.addEventListener('DOMContentLoaded', theme.init);
  // theme.init();