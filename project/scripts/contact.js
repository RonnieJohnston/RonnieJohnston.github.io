$(document).ready(function() {
    // load json file
    $.getJSON("contact.json",function(data){
        // loop through json array
        $.each(data, function(){
            // loop through attributes
            $.each(this, function(key, value){
                // append proper attributes into contact page
                $("#contactinfo").append(
                   "Name: " + value.name + "<br>" +
                    "Email: " + value.email + "<br>" +
                    "Phone: " + value.phone + "<br>" +
                    "Discord: " + value.discord
                    );
            })
        })
        
    });
});