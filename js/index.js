$(document).ready(function() {

    var showPublication = function(data) {
        $(".collapse.show").each(function(e, v) {
            $(this).collapse('hide');

        });

        $(data).collapse('show');
    }
    $("#publications").on("click", ".card-header", function(event) {
        var href = $(this).attr('idCollapse');
        showPublication(href);
    });

});
