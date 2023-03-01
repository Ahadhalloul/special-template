// set local storage (first check )
let storedColor = localStorage.getItem("color");
if (storedColor !== null) {
  document.documentElement.style.setProperty("--main-color", storedColor);
  document.querySelectorAll(".colors li").forEach((el) => {
    if (el.dataset.color === storedColor) {
      el.classList.add("active");
    }
  });
}
//
//////// setting box /////////
//get setting-box and icon elements for toggle the class open when click on icon
let settBox = document.querySelector(".setting-box");
let settIcon = document.querySelector(".setting-icon");
settIcon.onclick = function () {
  settBox.classList.toggle("open");
  settIcon.firstElementChild.classList.toggle("fa-spin"); //add spin to i to rotate font awosome(fa-spin)
};

//change the main color from setting when i click
let colors = document.querySelectorAll(".colors li");
colors.forEach((el) => {
  // loop to all li colors add click event on them
  el.addEventListener("click", function (e) {
    //set the new color value in the main color property of (root) from data-color
    document.documentElement.style.setProperty(
      "--main-color",
      e.target.dataset.color
    );
    //set the new color value in local storage
    localStorage.setItem("color", e.target.dataset.color);
    //loop again to remove active class from all then add active class to the target element
    colors.forEach((el) => {
      el.classList.remove("active");
    });
    e.target.classList.add("active");
  });
});
//
//
//
//////// landing page  /////////
//get landing page element to change background imgs after time
let landPage = document.querySelector(".landing-page");
let imgArray = ["1.jpg", "2.jpg", "3.jpg", "4.jpg"];

let backgroundChange = setInterval(() => {
  let randNum = Math.floor(Math.random() * imgArray.length);
  landPage.style.backgroundImage = "url(../imgs/" + imgArray[randNum] + ")";
}, 7000);

// clearInterval(backgroundChange);    used to stop the interval function
