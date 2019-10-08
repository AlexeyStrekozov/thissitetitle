let entry = document.querySelector('.header-button'),
    linkHelp = document.querySelector('.header-help'),
    popUPHelp = document.querySelector('.header-help__popUP'),
    body = document.querySelector('body'),
    popUp = document.querySelector('.popUp'),
    popUpClose = document.querySelector('.popUp-close'),
    img = document.querySelectorAll('.payment-block__img');

entry.addEventListener('click', function(){
    popUp.classList.add('open');
})

popUpClose.addEventListener('click', function(){
    popUp.classList.remove('open');
})

linkHelp.addEventListener('mouseover', function(){
    popUPHelp.classList.add('open');
})

linkHelp.addEventListener('mouseout', function(){
    popUPHelp.classList.remove('open');
})



var Visible = function (target) {
    // Все позиции элемента
    var targetPosition = {
        top: window.pageYOffset + target.getBoundingClientRect().top,
        left: window.pageXOffset + target.getBoundingClientRect().left,
        right: window.pageXOffset + target.getBoundingClientRect().right,
        bottom: window.pageYOffset + target.getBoundingClientRect().bottom
      },
      // Получаем позиции окна
      windowPosition = {
        top: window.pageYOffset,
        left: window.pageXOffset,
        right: window.pageXOffset + document.documentElement.clientWidth,
        bottom: window.pageYOffset + document.documentElement.clientHeight
      };
  
    if (targetPosition.bottom > windowPosition.top && // Если позиция нижней части элемента больше позиции верхней чайти окна, то элемент виден сверху
      targetPosition.top < windowPosition.bottom && // Если позиция верхней части элемента меньше позиции нижней чайти окна, то элемент виден снизу
      targetPosition.right > windowPosition.left && // Если позиция правой стороны элемента больше позиции левой части окна, то элемент виден слева
      targetPosition.left < windowPosition.right) { // Если позиция левой стороны элемента меньше позиции правой чайти окна, то элемент виден справа
      // Если элемент полностью видно, то запускаем следующий код
      console.clear();
      console.log('Вы видите элемент :)');
    } else {
      // Если элемент не видно, то запускаем этот код
      console.clear();
    };
  };
  
  // Запускаем функцию при прокрутке страницы
  window.addEventListener('scroll', function() {
    Visible (img[1]);
  });
  
  // А также запустим функцию сразу. А то вдруг, элемент изначально видно
  Visible (img[1]);