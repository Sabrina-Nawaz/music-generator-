jQuery(document).ready(function($) {
    $(".btnFunction").click(function() {
        window.location = $(this).data("href");
    });
});