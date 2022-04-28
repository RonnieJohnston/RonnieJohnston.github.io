$(document).ready(function() {
    // run getJSON function to update content
    getJSON("about.json");
}); // end ready

// locate and display data from json file
function getJSON(file) {
    $.ajax( {
        //  use parameter for filepath
        url: file,
        dataType: "Text",
        success: function(file) {
            // set html elements to display data
            let data = $.parseJSON(file);
            $("main > figure > img").attr("src", data.aboutinfo[0].image);
            $("main > figure > figcaption").html(data.aboutinfo[0].full_name);
            $("main > p").html(data.aboutinfo[0].description);
        }
    })
}