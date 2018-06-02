// scroll function to id section of page
$(function() {
  $(".js-nav a, .js-connect").click(function(e) {
    e.preventDefault();
    $("body, html").animate(
      {
        scrollTop: $($.attr(this, "href")).offset().top
      },
      750
    );
  });
});

//bootstrap scrolly
$("body").scrollspy({ target: "#navbar-example" });

// project slider
var d = document;
var wrap = d.querySelector(".wrap");
var items = d.querySelector(".items");
var itemCount = d.querySelectorAll(".item").length;
var scroller = d.querySelector(".scroller");
var pos = 0;
var transform = Modernizr.prefixed("transform");

function setTransform() {
  items.style[transform] =
    "translate3d(" + -pos * items.offsetWidth + "px,0,0)";
}

function prev() {
  pos = Math.max(pos - 1, 0);
  setTransform();
}

function next() {
  pos = Math.min(pos + 1, itemCount - 1);
  setTransform();
}

window.addEventListener("resize", setTransform);

// animation triggering
$(function() {
  var $window = $(window),
    win_height_padded = $window.height() * 1.1,
    isTouch = Modernizr.touch;

  if (isTouch) {
    $(".revealOnScroll").addClass("animated");
  }

  $window.on("scroll", revealOnScroll);

  function revealOnScroll() {
    var scrolled = $window.scrollTop(),
      win_height_padded = $window.height() * 1.1;

    // Showed...
    $(".revealOnScroll:not(.animated)").each(function() {
      var $this = $(this),
        offsetTop = $this.offset().top;

      if (scrolled + win_height_padded > offsetTop) {
        if ($this.data("timeout")) {
          window.setTimeout(function() {
            $this.addClass("animated " + $this.data("animation"));
          }, parseInt($this.data("timeout"), 10));
        } else {
          $this.addClass("animated " + $this.data("animation"));
        }
      }
    });
    // Hidden...
    $(".revealOnScroll.animated").each(function(index) {
      var $this = $(this),
        offsetTop = $this.offset().top;
      if (scrolled + win_height_padded < offsetTop) {
        $(this).removeClass("animated fadeInUp flipInX lightSpeedIn");
      }
    });
  }

  revealOnScroll();
});
