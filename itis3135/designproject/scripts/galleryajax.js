$(document).ready(function () {
    // onload fetch json file
    $.getJSON("gallery.json", function(data) {
        // loop through json array
        $.each(data, function() {
            $.each(this, function(key, value) {
                // for each entry, append new section
                $("#figures").append(
                    "<section class= '" + value.section + "'><figure class= '" + value.figure + 
                    "'><a href= '" + value.image + "' class= '" + value.figure + "' data-lightbox='vecta' data-title= '"
                     + value.data_title + "'><img src= '" + value.image + "' alt= '" + value.data_title + "'></a><figcaption>"
                      + value.data_title + "</figcaption></figure></section>"
                );
            })
        })
    })
})