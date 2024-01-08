
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


  var isExpanded = false;

  $(".read_more").click(function(){
      $(".about_more_area").slideToggle();
      isExpanded = !isExpanded;
      
      if(isExpanded){
          $(this).text("Show Less");
      } else {
          $(this).text("Read More");
      }
  });


  
});

//jquery area end



//java script area start

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




//ashboard area start

window.Apex = {
  chart: {
    foreColor: '#ccc',
    toolbar: {
      show: false
    },
  },
  stroke: {
    width: 3
  },
  dataLabels: {
    enabled: false
  },
  tooltip: {
    theme: 'dark'
  },
  grid: {
    borderColor: "#535A6C",
    xaxis: {
      lines: {
        show: true
      }
    }
  }
};

var spark1 = {
  chart: {
    id: 'spark1',
    group: 'sparks',
    type: 'line',
    height: 80,
    sparkline: {
      enabled: true
    },
    dropShadow: {
      enabled: true,
      top: 1,
      left: 1,
      blur: 2,
      opacity: 0.2,
    }
  },
  series: [{
    data: [25, 66, 41, 59, 25, 44, 12, 36, 9, 21]
  }],
  stroke: {
    curve: 'smooth'
  },
  markers: {
    size: 0
  },
  grid: {
    padding: {
      top: 20,
      bottom: 10,
      left: 110
    }
  },
  colors: ['#fff'],
  tooltip: {
    x: {
      show: false
    },
    y: {
      title: {
        formatter: function formatter(val) {
          return '';
        }
      }
    }
  }
}

var spark2 = {
  chart: {
    id: 'spark2',
    group: 'sparks',
    type: 'line',
    height: 80,
    sparkline: {
      enabled: true
    },
    dropShadow: {
      enabled: true,
      top: 1,
      left: 1,
      blur: 2,
      opacity: 0.2,
    }
  },
  series: [{
    data: [12, 14, 2, 47, 32, 44, 14, 55, 41, 69]
  }],
  stroke: {
    curve: 'smooth'
  },
  grid: {
    padding: {
      top: 20,
      bottom: 10,
      left: 110
    }
  },
  markers: {
    size: 0
  },
  colors: ['#fff'],
  tooltip: {
    x: {
      show: false
    },
    y: {
      title: {
        formatter: function formatter(val) {
          return '';
        }
      }
    }
  }
}

var spark3 = {
  chart: {
    id: 'spark3',
    group: 'sparks',
    type: 'line',
    height: 80,
    sparkline: {
      enabled: true
    },
    dropShadow: {
      enabled: true,
      top: 1,
      left: 1,
      blur: 2,
      opacity: 0.2,
    }
  },
  series: [{
    data: [47, 45, 74, 32, 56, 31, 44, 33, 45, 19]
  }],
  stroke: {
    curve: 'smooth'
  },
  markers: {
    size: 0
  },
  grid: {
    padding: {
      top: 20,
      bottom: 10,
      left: 110
    }
  },
  colors: ['#fff'],
  xaxis: {
    crosshairs: {
      width: 1
    },
  },
  tooltip: {
    x: {
      show: false
    },
    y: {
      title: {
        formatter: function formatter(val) {
          return '';
        }
      }
    }
  }
}

var spark4 = {
  chart: {
    id: 'spark4',
    group: 'sparks',
    type: 'line',
    height: 80,
    sparkline: {
      enabled: true
    },
    dropShadow: {
      enabled: true,
      top: 1,
      left: 1,
      blur: 2,
      opacity: 0.2,
    }
  },
  series: [{
    data: [15, 75, 47, 65, 14, 32, 19, 54, 44, 61]
  }],
  stroke: {
    curve: 'smooth'
  },
  markers: {
    size: 0
  },
  grid: {
    padding: {
      top: 20,
      bottom: 10,
      left: 110
    }
  },
  colors: ['#fff'],
  xaxis: {
    crosshairs: {
      width: 1
    },
  },
  tooltip: {
    x: {
      show: false
    },
    y: {
      title: {
        formatter: function formatter(val) {
          return '';
        }
      }
    }
  }
}

new ApexCharts(document.querySelector("#spark1"), spark1).render();
new ApexCharts(document.querySelector("#spark2"), spark2).render();
new ApexCharts(document.querySelector("#spark3"), spark3).render();
new ApexCharts(document.querySelector("#spark4"), spark4).render();


var optionsLine = {
  chart: {
    height: 328,
    type: 'line',
    zoom: {
      enabled: false
    },
    dropShadow: {
      enabled: true,
      top: 3,
      left: 2,
      blur: 4,
      opacity: 1,
    }
  },
  stroke: {
    curve: 'smooth',
    width: 2
  },
  //colors: ["#3F51B5", '#2196F3'],
  series: [{
      name: "Web design",
      data: [1, 15, 26, 20, 33, 27]
    },
    {
      name: "Figma to HTML",
      data: [3, 33, 21, 42, 19, 32]
    },
    {
      name: "XD to HTML",
      data: [0, 39, 52, 11, 29, 43]
    },
    {
      name: "AI to HTML",
      data: [0, 10, 20, 5, 35, 50]
    },
    {
      name: "PSD to HTML",
      data: [0, 30, 20, 15, 13, 23]
    }
  ],
  title: {
    text: 'Sales by month',
    align: 'left',
    offsetY: 25,
    offsetX: 20
  },
  subtitle: {
    text: 'Statistics',
    offsetY: 55,
    offsetX: 20
  },
  markers: {
    size: 6,
    strokeWidth: 0,
    hover: {
      size: 9
    }
  },
  grid: {
    show: true,
    padding: {
      bottom: 0
    }
  },
  labels: ['08/01/2023', '09/01/2023', '10/01/2023', '11/01/2023', '12/01/2023', '01/01/2024'],
  xaxis: {
    tooltip: {
      enabled: false
    }
  },
  legend: {
    position: 'top',
    horizontalAlign: 'right',
    offsetY: -20
  }
}

var chartLine = new ApexCharts(document.querySelector('#line-adwords'), optionsLine);
chartLine.render();


var options = {
  series: [27, 32, 43, 50, 23],
  chart: {
  height: 350,
  type: 'radialBar',
},
title: {
  text: 'Last month total project',
  align: 'left',
  offsetY: 25,
  offsetX: 20
},
plotOptions: {
  radialBar: {
    dataLabels: {
      name: {
        fontSize: '22px',
      },
      value: {
        fontSize: '16px',
      },
      total: {
        show: true,
        label: 'Total',
        formatter: function (w) {
          // By default this function returns the average of all series. The below is just an example to show the use of custom formatter function
          return 175
        }
      }
    }
  }
},
labels: ['Web design', 'Figma to HTML', 'XD to HTML ', 'AI to HTML','PSD to HTML'],
};

var chart = new ApexCharts(document.querySelector("#chart"), options);
chart.render();


var optionsBar = {
  chart: {
    height: 380,
    type: 'bar',
    stacked: true,
  },
  title: {
    text: 'Top search product by month',
    align: 'left',
    offsetY: 25,
    offsetX: 20
  },
  plotOptions: {
    bar: {
      columnWidth: '30%',
      horizontal: false,
    },
  },
  series: [{
    name: 'WEB DESIGN',
    data: [14, 25, 21, 17, 12, 13, 11, 19, 45, 15, 41, 17]
  }, 
  {
    name: 'FIGMA TO HTML',
    data: [60, 50, 30, 40, 43, 57, 63, 42, 40, 45, 52, 65]
  },
   {
    name: 'XD TO HTML',
    data: [11, 17, 15, 15, 21, 14, 15, 13, 34, 18, 20, 35]
  },
   {
    name: 'AI TO HTML',
    data: [11, 17, 15, 15, 21, 14, 15, 13, 34, 45, 13, 32]
  },
   {
    name: 'PSD TO HTML',
    data: [11, 17, 15, 15, 21, 14, 15, 13, 34, 10, 17, 10]
  }
],
  xaxis: {
    categories: ['2023 JAN', '2023 FEB', '2023 MAR', '2023 APR', '2023 MAY', '2023 JUN', '2023 JUL', '2023 AUG', ' 2023 SEP', '2023 OCT', '2023 NOV', '2023 DEC'],
  },
  fill: {
    opacity: 1
  },

}

var chartBar = new ApexCharts(
  document.querySelector("#barchart"),
  optionsBar
);

chartBar.render();

var optionsArea = {
  chart: {
    height: 380,
    type: 'area',
    stacked: false,
  },
  title: {
    text: 'Yearly top sales service',
    align: 'left',
    offsetY: 25,
    offsetX: 20
  },
  stroke: {
    curve: 'straight'
  },
  series: [{
      name: "Web Design",
      data: [100, 150, 200, 150, 250, 300]
    },
    {
      name: "Figma to HTML",
      data: [200, 150, 200, 500, 450, 600]
    },
    {
      name: "XD to HTML",
      data: [221, 112, 114, 152, 200, 140]
    },
    {
      name: "AI to HTML",
      data: [70, 150, 120, 110, 117, 200]
    },
    {
      name: "PSD to html",
      data: [102, 70, 140, 107, 90, 130]
    }
  ],
  xaxis: {
    categories: ['2018', '2019', '2020', '2021', '2022', '2023'],
  },
  tooltip: {
    followCursor: true
  },
  fill: {
    opacity: 1,
  },

}

var chartArea = new ApexCharts(
  document.querySelector("#areachart"),
  optionsArea
);

chartArea.render();




//display reload function start




