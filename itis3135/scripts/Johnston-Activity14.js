$(document).ready(function() {
    // set onclick functions
    $("a").click(function() {
        // fetch respective json file
        getJSON($(this).attr('title') + ".json");
    })
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
            $("main > h1").html(data.speakers[0].title);
            $("main > h2").html(data.speakers[0].month);
            $("main > h3").html(data.speakers[0].speaker);
            $("main > img").attr("src", data.speakers[0].image);
            $("main > p").html(data.speakers[0].text);
        }
    })
}