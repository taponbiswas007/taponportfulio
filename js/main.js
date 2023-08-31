var photos = ['js/images/apartment.png','js/images/house.png','js/images/office.png','js/images/villa.png',];
var img = document.querySelector('.catagory img');
var i = 0;
function next(){
    if(i<photos.length-1){
    i++;
    img.src=photos[i];
    }else{
        i=0;
        img.src=photos[i];
    }
    
}
function prev(){
    if(i>0){
    i--;
    img.src=photos[i];
    }else{
        i=photos.length-1;
        img.src=photos[i];
    }
    
}
 // property item swiper //

var swiper = new Swiper(".mySwiper-01", {
    slidesPerView: 1.5,
    spaceBetween: 30,
    centeredSlides: true,

  });

  // featured item swiper //


  var swiper = new Swiper(".mySwiper", {
    slidesPerView: 1,
    spaceBetween: 30,
    centeredSlides: true,
    rewind: true,
    navigation: {
      nextEl: ".btn-next",
      prevEl: ".btn-prev",
    },
  });
