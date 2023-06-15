const hamburger = document.querySelector("#hamburger");
const navMenu = document.querySelector("#nav-menu");

hamburger.addEventListener("click", function () {
  hamburger.classList.toggle("hamburger-active");
  navMenu.classList.toggle("hidden");
});

// click window to close hamburger
window.addEventListener("click", function (e) {
  if (e.target != hamburger && e.target != navMenu) {
    hamburger.classList.remove("hamburger-active");
    navMenu.classList.add("hidden");
  }
});

// blur

// const blurAll = document.querySelector("#blur-hover");
// const blurHover = document.querySelector(".blur-hover");
// const notBlur = document.querySelectorAll("#not-blur");
// const notBlurArray = Array.from(notBlur);

// notBlur.forEach((element) => {
//   blurAll.addEventListener("mouseover", function (e) {});
//   // blurAll.classList.add("blur-hover-active");
//   // for (let i = 0; i < notBlurArray.length; i++) {
//   //   notBlurArray[i].classList.add("blur-hover-active");
//   // }
// });

// blurAll.addEventListener("mouseover", function (e) {
//   blurAll.classList.add("blur-hover-active");
// });

// blurAll.addEventListener("mouseover", function () {
//   notBlur.forEach((element) => {
//     element.classList.add("blur-hover-active");
//   });
//   notBlur.forEach(function (element) {
//     element.addEventListener("mouseover", function () {
//       // Menghapus kelas "targeted" dari semua elemen <div> sebelumnya
//       notBlur.forEach(function (e) {
//         e.classList.remove("blur-hover-active");
//       });

//       // Menambahkan kelas "targeted" ke elemen yang dihover
//       element.classList.remove("blur-hover-active");
//     });
//   });
// });
