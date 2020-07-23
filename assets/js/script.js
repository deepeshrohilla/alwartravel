// Shrink navbar on scroll
window.onscroll = function () { scrollFunction() };

function scrollFunction() {
  if (document.body.scrollTop > 450 || document.documentElement.scrollTop > 450) {
    document.getElementById("header").style.boxShadow = "0px 3px 16px 0px rgba(0, 0, 0, 0.1)";
    document.getElementById("header").style.backgroundColor = "#fffffff8";
    document.getElementById("search-icon").style.padding = "25px";
  } else {
    document.getElementById("header").style.boxShadow = "0px 3px 16px 0px rgba(0, 0, 0, 0)";
    document.getElementById("header").style.backgroundColor = "#ffffff";
    document.getElementById("search-icon").style.padding = "50px 30px";
  }
}

// Search Screen
var search_btn1 = document.getElementById("search-btn1")
var search_btn2 = document.getElementById("search-btn2")
var search_screen = document.getElementById("search-screen")
var close_win = document.getElementById("close-win")

search_btn1.addEventListener("click", function () {
  search_screen.style.display = "flex"
})
search_btn2.addEventListener("click", function () {
  search_screen.style.display = "flex"
})
close_win.addEventListener("click", function () {
  search_screen.style.display = "none"
})

// popup video section
function toggle() {
  var tour_video = document.querySelector(".tour-video")
  var video = document.querySelector("video")
  tour_video.classList.toggle("active")
  video.pause()
  video.currentTime = 0
}