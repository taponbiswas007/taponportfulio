
$(document).ready(function(){
  $(".bars").click(function(){
    $(".bars").toggle();
    $(".cross").toggle();
    $(".nav-title").css({"opacity":"100%", "transition":".4s ease" });
    $(".menu").css({"width":"165px", "transition":".4s ease"}); 
    $(".main-content-area").css({"width":"calc(100%-165px)", "transition":".4s ease"
      
    });
    
    
  });
  $(".cross").click(function(){
    $(".bars").toggle();
    $(".cross").toggle();
    $(".nav-title").css({"opacity":"0", "transition":".3s ease"});
    $(".menu").css({"width":"60px", "transition":".4s ease"}); 
    $(".main-content-area").css({"width":"calc(100%-60px)", "transition":".4s ease"
      
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

 
//map area
$(function(){
  $('#world-map-gdp').vectorMap({
    map: 'world_mill',
    series: {
      regions: [{
        values: gdpData,
        scale: ['#C8EEFF', '#0071A4'],
        normalizeFunction: 'polynomial'
      }]
    },
    onRegionTipShow: function(e, el, code){
      el.html(el.html()+' (GDP - '+gdpData[code]+')');
    }
  });
});
    

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

var swiper = new Swiper(".mySwiper", {
  slidesPerView: 3.5,
  spaceBetween: 30,
  freeMode: true,
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
});
var swiper = new Swiper(".small-screen", {
  slidesPerView: 2.5,
  spaceBetween: 30,
  freeMode: true,
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
});
var swiper = new Swiper(".smallest-screen", {
  slidesPerView: 1.5,
  spaceBetween: 30,
  freeMode: true,
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
});







