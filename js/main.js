"use strict"; // const subNavLink = document.querySelectorAll('.subnav__link'),
//       navItem = document.querySelectorAll('.nav__item');
// subNavLink.forEach( link => {
//     link.addEventListener('click', ()=> {
//         link.classList.add('active');
//     });
// });

var structureBtn = document.querySelectorAll('.structure__btn');
structureBtn.forEach(function (btn) {
  btn.addEventListener('click', function () {
    btn.classList.toggle('close');
    var structureBody = btn.parentElement.parentElement.querySelector('.structure__body');
    structureBody.classList.toggle('show');
  });
});
//# sourceMappingURL=main.js.map
