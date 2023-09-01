
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

$('.html-circle').addClass('filled');
});