var img = $(".img");
var img1 = $(".img1");
var img2 = $(".img2");
var img3 = $(".img3");
var left = $(".fa-arrow-circle-left")
var right = $(".fa-arrow-circle-right")
img.addClass("hide");
img1.removeClass("hide");
left.click(function() {
  if ($(img1).hasClass("hide") == false) {
    $(img1).addClass("hide");
    $(img3).removeClass("hide");
    $(img2).addClass("hide");
  } else if ($(img2).hasClass("hide") == false) {
    $(img3).addClass("hide");
    $(img2).addClass("hide");
    $(img1).removeClass("hide");

  } else if ($(img3).hasClass("hide") == false) {
    $(img2).removeClass("hide");
    $(img1).addClass("hide");
    $(img3).addClass("hide");

  }
});

right.click(function() {
  if ($(img1).hasClass("hide") == false) {
    $(img1).addClass("hide");
    $(img2).removeClass("hide");
    $(img3).addClass("hide");
  } else if ($(img2).hasClass("hide") == false) {
    $(img1).addClass("hide");
    $(img2).addClass("hide");
    $(img3).removeClass("hide");

  } else if ($(img3).hasClass("hide") == false) {
    $(img1).removeClass("hide");
    $(img2).addClass("hide");
    $(img3).addClass("hide");

  }
});
