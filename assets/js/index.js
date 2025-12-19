// ^ Write your JavaScript code here

// var moonBtn = document.querySelector(".fa-moon");
// var sunBtn = document.querySelector(".fa-sun");

// //// dark light mode :  //////////

// moonBtn.addEventListener("click", function () {
//   document.documentElement.classList.add("light");
//   document.documentElement.classList.remove("dark");
// });
// sunBtn.addEventListener("click", function () {
//   document.documentElement.classList.add("dark");
//   document.documentElement.classList.remove("light");
// });

var themeBtn = document.getElementById("theme-toggle-button");
themeBtn.addEventListener("click", function () {
  if (document.documentElement.classList.contains("dark")) {
    document.documentElement.classList.add("light");
    document.documentElement.classList.remove("dark");
  } else {
    document.documentElement.classList.add("dark");
    document.documentElement.classList.remove("light");
  }
});
//////////// active nav links : ///////////////
var links = document.querySelectorAll(".nav-links a");

var sec = document.querySelectorAll("main .get-sec");

document.addEventListener("scroll", function () {
  var position = document.documentElement.scrollTop;
  for (var i = 0; i < sec.length; i++) {
    var start = sec[i].offsetTop;
    var end = sec[i].offsetHeight;
    var id = sec[i].id;
    if (position > start && position < start + end) {
      for (var z = 0; z < links.length; z++) {
        links[z].classList.remove("active");
      }
      var active = document.querySelector(
        `.container .nav-links a[href='#${id}']`
      );
      active.classList.add("active");
    }
  }
});

///////carousel////////

var next = document.getElementById("next-testimonial");
var prev = document.getElementById("prev-testimonial");
var testCard = document.querySelectorAll(".testimonial-card");
var indecators = document.querySelectorAll(".carousel-indicator");

var index = 0;
function showCarousel() {
  for (var i = 0; i < testCard.length; i++) {
    if (i >= index && i < index + 3) {
      testCard[i].style.display = "block";
    } else {
      testCard[i].style.display = "none";
    }
  }
}

next.addEventListener("click", function () {
  index++;
  if (index > testCard.length - 3) {
    index = 0;
  }
  showCarousel();
});
prev.addEventListener("click", function () {
  index--;
  if (index < 0) {
    index = testCard.length - 3;
  }
  showCarousel();
});

///////// rocket backToTop /////////////

var bacckTop = document.getElementById("scroll-to-top");

window.addEventListener("scroll", function () {
  if (this.window.scrollY > 1000) {
    bacckTop.classList.remove("opacity-0", "invisible");
    bacckTop.classList.add("opacity-1", "visible");
  } else {
    bacckTop.classList.add("opacity-0", "invisible");
    bacckTop.classList.remove("opacity-1", "visible");
  }
});
//////////////////// Gear //////////////////////
var settingIcon = document.getElementById("settings-toggle");
var slider = document.getElementById("settings-sidebar");
var closeSlider = document.getElementById("close-settings");
var nav = document.getElementById("header");
var footer = document.getElementById("footer");

function getGear() {
  settingIcon.addEventListener("click", function () {
    settingIcon.style.removeProperty("right");
    settingIcon.style.setProperty("right", "20rem");
    slider.classList.remove("translate-x-full");
  });
  closeSlider.addEventListener("click", function () {
    closeSliderBar();
  });

  for (var i = 0; i < sec.length; i++) {
    sec[i].addEventListener("click", function () {
      closeSliderBar();
    });
  }
  nav.addEventListener("click", function () {
    closeSliderBar();
  });
  footer.addEventListener("click", function () {
    closeSliderBar();
  });
  function closeSliderBar() {
    slider.classList.add("translate-x-full");
    settingIcon.style.setProperty("right", "0px");
  }
}
getGear();

////////////// Taps /////////////////
var portfolioBtn = document.querySelectorAll(
  "#portfolio-filters .portfolio-filter"
);
var portfolioItems = document.querySelectorAll(".portfolio-item");

for (var i = 0; i < portfolioBtn.length; i++) {
  portfolioBtn[i].addEventListener("click", function (e) {
    for (var z = 0; z < portfolioBtn.length; z++) {
      portfolioBtn[z].classList.remove(
        "bg-linear-to-r",
        "from-primary",
        "to-secondary"
      );
      portfolioBtn[z].classList.add("dark:bg-slate-800");
      portfolioBtn[z].classList.remove("active");
    }
    e.target.classList.add("bg-linear-to-r", "from-primary", "to-secondary");
    e.target.classList.remove("dark:bg-slate-800");
    e.target.classList.add("active");
    var check = e.target.getAttribute("data-filter");

    for (var x = 0; x < portfolioItems.length; x++) {
      var see = portfolioItems[x].getAttribute("data-category");
      if (check == "web") {
        if (see == "web") {
          portfolioItems[x].style.display = "block";
        } else {
          portfolioItems[x].style.display = "none";
        }
      } else if (check == "app") {
        if (see == "app") {
          portfolioItems[x].style.display = "block";
        } else {
          portfolioItems[x].style.display = "none";
        }
      } else if (check == "design") {
        if (see == "design") {
          portfolioItems[x].style.display = "block";
        } else {
          portfolioItems[x].style.display = "none";
        }
      } else if (check == "ecommerce") {
        if (see == "ecommerce") {
          portfolioItems[x].style.display = "block";
        } else {
          portfolioItems[x].style.display = "none";
        }
      } else {
        portfolioItems[x].style.display = "block";
      }
    }
  });
}
/////////////////////

var fonts = document.querySelectorAll(".font-option");
for (var i = 0; i < fonts.length; i++) {
  fonts[i].addEventListener("click", function (e) {
    var getFont = e.target.getAttribute("data-font");

    document.body.classList.remove(
      "font-alexandria",
      "font-tajawal",
      "font-cairo"
    );
    document.body.classList.add("font-" + getFont);
  });
}

var palette = document.querySelectorAll(".theme-palette button");

for (var i = 0; i < palette.length; i++) {
  palette[i].addEventListener("click", function (e) {
    var colorTheme = this.classList.value;
    console.log(colorTheme);
    document.body.classList.remove(
      "bg-yellow-500",
      "bg-red-500",
      "bg-secondary",
      "bg-primary",
      "bg-slate-400",
      "bg-emerald-500"
    );
    // document.body.classList.add(colorTheme)

    if (colorTheme == "bg-yellow-500") {
      document.body.classList.add("text-emerald-600");
      console.log("hhhh");
    }
  });
}
