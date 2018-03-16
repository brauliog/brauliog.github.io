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
