$(document).ready(function(){
    $.getJSON("../facultyList.json",function(data) {
        $.each(data, function() {
            $.each(this, function(value) {
                $("#faculty").append(
                    "<img src=" + "'" + value.image + "'>" +
                    "<h2>" + value.full_name + "</h2>" +
                    "<h3>" + value.department + "<br><p>" + value.bio + "</p></h3>"
                )
            })
        })
    })
});
