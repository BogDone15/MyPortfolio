document.addEventListener("DOMContentLoaded", function (event) {
 let letter = document.querySelectorAll('.letter');

 letter.forEach((el, i) => {
  setTimeout(() => {
   el.classList.add('show');
  }, (i + 1) * 75);
 });

 letter.forEach(item => {
  item.addEventListener('mouseover', function() {
   item.classList.add('animText');
   item.classList.add('animated');

   setTimeout(() => {
    item.classList.remove('animText');
    item.classList.remove('animated');
   }, 1000);
  })
 });
});
 