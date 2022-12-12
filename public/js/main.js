jQuery(document).ready(function ($) {
  $(".btnFunction").click(function () {
    window.location = $(this).data("href");
  });
});

jQuery(document).ready(function ($) {
  $("#play").click(function () {
    window.location = $(this).data("href");
  });
});
