const ratings = document.querySelectorAll(".rating");
const ratingsContainer = document.querySelector(".ratings-container");
const sendBtn = document.querySelector("#send");
const panel = document.querySelector("#panel");

let selectedRating = "Please Give Any Feedback";

ratingsContainer.addEventListener("click", (e) => {
  if (e.target.parentNode.classList.contains("rating")) {
    removeActive();
    e.target.parentNode.classList.add("active");
    selectedRating = e.target.parentNode.querySelector("small").innerHTML;
  }
});

sendBtn.addEventListener("click", () => {
  panel.innerHTML = `<p class="heart">💜</p>
    <strong>Thank You!</strong><br>
    Feedback: ${selectedRating}`;
});

function removeActive() {
  for (let i = 0; i < ratings.length; i++) {
    ratings[i].classList.remove("active");
  }
}
