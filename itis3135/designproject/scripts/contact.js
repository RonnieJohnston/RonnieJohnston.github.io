$(document).ready(function() {
    $.getJSON("contact.json",function(data){
        $.each(data, function(){
            $.each(this, function(key, value){
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