const menutoggle = document.querySelector(".menuToggle");
const navigation = document.querySelector(".navigation");
menutoggle.onclick = function () {
  navigation.classList.toggle("open");
};


const list = document.querySelectorAll(".list");

function funcAction() {
  list.forEach((item) => item.classList.remove("active"));
  this.classList.add("active");
}

list.forEach((item) => item.addEventListener("click", funcAction));
