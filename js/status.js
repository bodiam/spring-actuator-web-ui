$(document).ready(function () {
    $('.ui.accordion').accordion({
        exclusive: false
    });
});

$.get("/actuator/info", function(data) {
    console.log("APP" + data.app.name);
    $("#application-name").html(data.app.name);
    $("#application-description").html(data.app.description);
    $("#application-version").html(data.app.version);
    $("#application-icon").attr('class', data.app.icon);
});

$.get("/actuator/health", function(data) {
    // Render health results
    var tmpl = $.templates("#status"); // Get compiled template
    var html = tmpl.render(data);      // Render template using data - as HTML string
    $("#result").html(html);           // Insert HTML string into DOM

    // Hide loading bar
    $('#status-loading').hide();

    // Show error box
    if(data.status !== "UP") {
        var errors = [];

        $.each(data.details, function(key, value) {
            if(value.status === "DOWN") {
                errors.push(key);
            }
        });

        var errorsTmpl = $.templates("#health-errors"); // Get compiled template
        var errorsHtml = errorsTmpl.render({"errors": errors});

        $("#application-errors-details").html(errorsHtml);
        $("#application-errors").removeClass('hidden');
    }
});
