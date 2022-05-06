$(document).ready(function () {
    // onload fetch json file
    $.getJSON("faq.json", function(data) {
        // loop through json array
        $.each(data, function() {
            $.each(this, function(key, value) {
                // for each entry, append new section
                $("#panels").append(
                    value.data
                );
            })
        })
    })
})