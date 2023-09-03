
$(document).ready(function(){
  $(".bars ,.cross").click(function(){
    $(".bars").toggle();
    $(".cross").toggle();
    $(".menu").slideToggle();
  });

  animateWords($(".my-description").text().trim().split(" "));


function animateWords(words) {
  let i = 0;
  const paragraph = $(".my-description");
  paragraph.empty();

  function addWord() {
    if (i < words.length) {
      paragraph.append(`<span>${words[i]}</span> `);
      i++;
      setTimeout(addWord, 500); // Adjust the delay (in milliseconds) as needed
    }
  }

  addWord();

}


});

const numb1 = document.querySelector(".progress-value");
const numb2 = document.querySelector(".html-progress-value");
const numb3 = document.querySelector(".css-progress-value");
const numb4 = document.querySelector(".cssbar");
const numb5 = document.querySelector(".js-progress-value");
const numb6 = document.querySelector(".jsbar");
const numb7 = document.querySelector(".bootstrap-progress-value");
const numb8 = document.querySelector(".bootstrapbar");
let counter = 0;

const interval = setInterval(() => {
  if (counter === 95) {
    clearInterval(interval);
  } else {
    counter += 1;
    numb1.textContent = counter + "%";

    if (counter <= 95) {
      numb2.textContent = counter + "%";
    }
    if (counter <= 90) {
      numb3.textContent = counter + "%";
    }
    if (counter <= 90) {
      numb4.textContent = counter + "%";
    }
    if (counter <= 66) {
      numb5.textContent = counter + "%";
    }
    if (counter <= 66) {
      numb6.textContent = counter + "%";
    }
    if (counter <= 90) {
      numb7.textContent = counter + "%";
    }
    if (counter <= 90) {
      numb8.textContent = counter + "%";
    }
  }
}, 31);




