
const iconMenu = document.querySelector('.menu__icon');
if (iconMenu) {
  const bodyMenu = document.querySelector('.menu__body');
  iconMenu.addEventListener("click", function(params) {
    document.body.classList.toggle('_lock');
    iconMenu.classList.toggle('_active');
    bodyMenu.classList.toggle('_active');
  });
}



const isMobile = {
  Android: function () {
    return navigator.userAgent.match(/Android/i);
  },
  BlackBerry: function () {
    return navigator.userAgent.match(/BlackBerry/i);
  },
  iOS: function () {
    return navigator.userAgent.match(/iPhone|iPad|iPod/i);
  },
  Opera: function () {
    return navigator.userAgent.match(/Opera Mini/i);
  },
  Windows: function () {
    return navigator.userAgent.match(/IEMobile/i);
  },
  any: function () {
    return(isMobile.Android()||
          isMobile.BlackBerry()||
          isMobile.iOS()||
          isMobile.Opera()||
          isMobile.Windows()
    )
  }
};

if(isMobile.any()){
  document.body.classList.add('_touch');

  let menuArrows = document.querySelectorAll('.menu__arrow');
  
  if(menuArrows.length > 0){
    for (let index = 0; index < menuArrows.length; index++) {
      
      const menuArrow = menuArrows[index];
      
      menuArrow.addEventListener('click', onMenuArrowClick);
      
      function onMenuArrowClick(e) {
          menuArrow.parentElement.classList.toggle('_active-menu');        
      }
    }
  }
}else{
  document.body.classList.add('_pc');
}





const menuLinks = document.querySelectorAll('.menu__link[data-goto]');
if(menuLinks.length > 0){
  
  menuLinks.forEach(menuLink =>{
    menuLink.addEventListener('click', onMenuLinkClick);
  });

  function onMenuLinkClick(e) {
    const menuLink = e.target;

    if (menuLink.dataset.goto && document.querySelector(menuLink.dataset.goto)) {
      const gotoBlock = document.querySelector(menuLink.dataset.goto);
      // if you need fixed menu
      // const gotoBlockValue = gotoBlock.getBoundingClientRect().top + pageYOffset - document.querySelector('header').offsetHeight;
      const gotoBlockValue = gotoBlock.getBoundingClientRect().top + pageYOffset;
    

      window.scrollTo({
        top: gotoBlockValue,
        behavior: "smooth"
      });
      e.preventDefault();
    }
  }
}



let telegramNotificationButton = document.getElementById('telegram-notification');
telegramNotificationButton.addEventListener('click', function () {
  let nameInput = document.getElementById('name');
  let emailInput = document.getElementById('email');
  let messageText = document.getElementById('messageText');

  if (IsValidInput(nameInput) && IsValidInput(emailInput) && IsValidInput(messageText)) {
    let text = `name: ${nameInput.value} email: ${emailInput.value} ${messageText.value}`;
    sendOpinion(text);
  }
});

function IsValidInput(input)
{
  return input.validity.valid;
}

function sendOpinion(str) {
  var xmlHttp = new XMLHttpRequest();
  var token = "2120820400:AAEowfh5hX8IerqvBcB13u6ozdqEIfHJfeQ";
  var chat_id = 734769001;
  xmlHttp.open("GET", 'https://api.telegram.org/bot' + token
    + '/sendMessage?text=' + str
    + '&chat_id=' + chat_id, false); // false for synchronous request
  xmlHttp.send(null);
}

// const swiper = new Swiper('.swiper', {
//   // Optional parameters
//   direction: 'horizontal',
//   loop: true,

//   // // If we need pagination
//   pagination: {
//     el: '.swiper-pagination',

//     clickable: true,
//     dynamicBullets: true,

//     renderBullet: function (index, className)
//     {
//       return '<img class ="' + className + '" src="../img/quote/' + (index + 1) + '.svg" alt="">';
//     }


//   },

//   // Navigation arrows
//   navigation: {
//     nextEl: '.swiper-button-next',
//     prevEl: '.swiper-button-prev',
//   },

//   //Turn Touch grab function on PC
//   simulateTouch: true,
//   //Sensitivity of swipe
//   touchRatio: 1,
//   //Angle of working swipe
//   touchAngle: 45,
//   //Grab coursor
//   grabCursor: true,

//   //Switching with click to slide
//   slideToClicledSlide: true,

//   //Navigation with hash
//   hashNavigation:
//   {
//     //watch state of hash
//     watchState: true,
//   },

//   //keyboard control
//   keyboard:
//   {
//     //turn on/off
//     enabled: true,
//     //turn on/off only when slider in area of viewport
//     onlyInViewport: true,
//     //turn on/off control with pageUp/pageDown buttons on keyboard
//     pageUpDown: true,
//   },

//   //mouse control
//   mousewheel:
//   {
//     sensitivity: 1,
//     //the object class on which this control wheel be able to use
//     //P.S. Better to not use it if u got more then one swiper with this slider's name
//     eventsTarget: ".swiper-slide"
//   },

//   autoHeight: false,



//   centeredSlides: true,



//   autoplay:
//   {
//     //pause between play
//     delay: 1000,
//     //end on last slide
//     stopOnLastSlide: false,
//     //turn off ofter interaction
//     disableOnInteraction: false
//   },

//   speed: 1500,

//   slidesPerView: 1,

//   slidesPerGroup: 1,

//   spaceBetween: 10,
//   // Responsive breakpoints
//   breakpoints: {
//     // when window width is >= 320px
//     320: {
//       slidesPerView: 1,
//       spaceBetween: 10
//     }
//   }
// });