// on crée le module slider
const slider = {
    // tableau pour stocker les images
    sliderImages: [
      'ocean.jpg',
      'ski.jpg',
      'city.jpg'
    ],
  
    // image courante
    currentImageIndex: 0,
  
    // init
    init: function(){
      // on charge les images
      slider.loadSliderImages();
      // on se met en écoute des click sur les boutons
      slider.addEvents();
    },
  
    // charger les images dans le slider
    loadSliderImages: function (){
      const sliderElement = document.querySelector('.slider');
      
      let images = '';
  
      for(const image of slider.sliderImages) {
          images += '<img class="slider__img" src="img/' + image + '">';
      }
  
      // pour debug
      console.log(images);
  
      // on pourrait directement faire :
      // pour rajouter quelque chose au bout de slider.innerHTML
      sliderElement.innerHTML += images;
  
      // on récupère la première image
      const premiereImage = document.querySelectorAll('.slider__img')[0];
      // et on lui ajoute la classe slider__img--current
      premiereImage.classList.add('slider__img--current');
    },
  
    addEvents: function(){
      const buttonsElements = document.querySelectorAll('.slider__btn');
  
      const previousButtonElement = buttonsElements[0];
      previousButtonElement.addEventListener('click', slider.handlePreviousButtonClick);
      
      const nextButtonElement = buttonsElements[1];
      nextButtonElement.addEventListener('click', slider.handleNextButtonClick);
    },
  
    // gestionnaire du click sur le bouton next
    handleNextButtonClick: function(){
  
      // gestion du click sur la dernière image, on repart à la première
      if (slider.currentImageIndex < slider.sliderImages.length - 1){
        slider.currentImageIndex++;
      }else{
        slider.currentImageIndex = 0;
      }    
  
      // supprimer tous les slider__img--current
      const currentSliderImage = document.querySelector('.slider__img--current');
      currentSliderImage.classList.remove('slider__img--current');
  
      // récupérer toutes les images et positionner la classe slider__img--current sur celui d'index slider.currentImageIndex
      const sliderImages = document.querySelectorAll('.slider__img');
      sliderImages[slider.currentImageIndex].classList.add('slider__img--current');
    },
  
    // gestionnaire du click sur le bouton previous
    handlePreviousButtonClick: function(){
      // gestion du click sur la première image, on repart à la dernière
      if (slider.currentImageIndex != 0){
        slider.currentImageIndex--;
      }else{
        slider.currentImageIndex = slider.sliderImages.length - 1;
      }    
  
      // supprimer tous les slider__img--current
      const currentSliderImage = document.querySelector('.slider__img--current');
      currentSliderImage.classList.remove('slider__img--current');
  
      // récupérer toutes les images et positionner la classe slider__img--current sur celui d'index slider.currentImageIndex
      const sliderImages = document.querySelectorAll('.slider__img');
      sliderImages[slider.currentImageIndex].classList.add('slider__img--current');
    }
  };
  
  document.addEventListener('DOMContentLoaded', slider.init);