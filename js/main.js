let entry = document.querySelector('.header-button'),
    linkHelp = document.querySelector('.header-help'),
    popUPHelp = document.querySelector('.header-help__popUP'),
    body = document.querySelector('body'),
    popUp = document.querySelector('.popUp'),
    mobilePayment = document.getElementsByClassName('payment-block__text__mobile'),
    mobilePaymentText = document.getElementsByClassName('payment-block__text'),
    popUpClose = document.querySelector('.popUp-close');

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

// for (i = 0; i < mobilePayment.length; i++) {
//   mobilePayment[i].addEventListener('click', toggleItem, false);

// }
// function toggleItem() {
//   var itemClass = this.parentNode.className;
//   for (i = 0; i < mobilePaymentText.length; i++) {
//     mobilePaymentText[i].className = 'accordionItem close';
//   }
//   if (itemClass == 'accordionItem close') {
//       this.parentNode.className = 'accordionItem open';
//   }
// }



var arrayElem = [];

for (var i = 0; i < mobilePayment.length; i++){
  arrayElem.push(mobilePayment[i]);
  mobilePayment[i].addEventListener('click', function(e){
    let index = arrayElem.indexOf(e.target);
    if (mobilePaymentText[index].className == "payment-block__text" || mobilePaymentText[index].className == "payment-block__text payment-block__text__right" || mobilePaymentText[index].className == "payment-block__text payment-block__text__left"){
      mobilePaymentText[index].classList.add('open');
    } else {
      mobilePaymentText[index].classList.remove('open');
    }
      
     console.log(index);
  });
}