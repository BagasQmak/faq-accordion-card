let boxImg = document.querySelector(".box-img");
let faqElements = document.querySelector(".faq-elements");
let faqElement = document.querySelectorAll(".faq-element");
let questions = document.querySelectorAll(".question");
let questionParagraphs = document.querySelectorAll("question-paragraph");
let iconArrow = document.querySelectorAll("icon-arrow");
let answer = document.querySelectorAll(".answer");

faqElement.forEach(function (faqEl) {
  faqEl.addEventListener("click", function (e) {
    if (e.target.className === "question")
      e.target.firstElementChild.classList.toggle("active");
    e.target.lastElementChild.classList.toggle("rotate");
    e.target.nextElementSibling.style.display == "block";
  });
});
