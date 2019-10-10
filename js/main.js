let entry = document.querySelector('.header-button'),
    linkHelp = document.querySelector('.header-help'),
    popUPHelp = document.querySelector('.header-help__popUP'),
    popUPHelpMini = document.querySelector('.header-help__popUP__mini'),
    popUPHelpMiniClose = document.querySelector('.header-help__popUP__mini__close'),
    body = document.querySelector('body'),
    popUp = document.querySelector('.popUp'),
    mobilePayment = document.querySelectorAll('.payment-block__text__mobile h1'),
    mobilePaymentText = document.querySelectorAll('.payment-block__text'),
    headerHelpMobile = document.getElementsByClassName('header-help__mini')[0],
    popUpClose = document.querySelector('.popUp-close');

headerHelpMobile.addEventListener('click', function(){
  popUPHelpMini.classList.add("checkOutRight");
  popUPHelpMiniClose.addEventListener('click', function(){
    popUPHelpMini.classList.remove("checkOutRight");
    popUPHelpMini.classList.add("OutRight");
    setTimeout(function(){
      popUPHelpMini.classList.remove("OutRight");
      }, 300);
  })
});


entry.addEventListener('click', function(){
    popUp.classList.add('open');
    
});

popUpClose.addEventListener('click', function(){
    popUp.classList.remove('open');
});

linkHelp.addEventListener('mouseover', function(){
    popUPHelp.classList.add('open');
});

linkHelp.addEventListener('mouseout', function(){
    popUPHelp.classList.remove('open');
});

let arrayElem = [];

for (var i = 0; i < mobilePayment.length; i++){
  arrayElem.push(mobilePayment[i]);
  mobilePayment[i].addEventListener('click', function(e){
    let index = arrayElem.indexOf(e.target);
    if (mobilePaymentText[index].className == "payment-block__text" || mobilePaymentText[index].className == "payment-block__text payment-block__text__right" || mobilePaymentText[index].className == "payment-block__text payment-block__text__left"){
      mobilePaymentText[index].classList.add('open');
    } else {
      mobilePaymentText[index].classList.remove('open');
    }
  });
}