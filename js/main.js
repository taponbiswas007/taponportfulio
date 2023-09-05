
$(document).ready(function(){
  $(".bars").click(function(){
    $(".bars").toggle();
    $(".cross").toggle();
    $(".nav-title").css({"display":"block" });
    $(".menu").css({"width":"250px", "transition":".4s ease"}); 
    $(".main-content-area").css({"width":"calc(100%-250px)", "transition":".4s ease"
      
    }); 
    
  });
  $(".cross").click(function(){
    $(".bars").toggle();
    $(".cross").toggle();
    $(".nav-title").css({"display":"none"});
    $(".menu").css({"width":"100px", "transition":".4s ease"}); 
    $(".main-content-area").css({"width":"calc(100%-100px)", "transition":".4s ease"
      
    });  
  
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

const numb1 = document.querySelector(".html");
const numb2 = document.querySelector(".css");
const numb3 = document.querySelector(".js");
const numb4 = document.querySelector(".bootstrap");

let counter = 0;

const interval = setInterval(() => {
  if (counter === 95) {
    clearInterval(interval);
  } else {
    counter += 1;
    numb1.textContent = counter + "%";

   
    if (counter <= 93) {
      numb2.textContent = counter + "%";
    }
  
    if (counter <= 66) {
      numb3.textContent = counter + "%";
    }
   
    if (counter <= 89) {
      numb4.textContent = counter + "%";
    }
   
  }
}, 31);

AOS.init();






