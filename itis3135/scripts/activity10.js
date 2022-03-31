$(document).ready(function() {


    // preload the image for each link
    $("#image_list a").each( (index, link) => {
        const image = new Image();
        image.src = link.href;
    })
    // set up the event handlers for each link
    $("#image_list a").click( evt => {
        const link = evt.currentTarget;
        $("#image").attr("src", link.href);
        $("#caption").text(link.title);
        // prevent default action
        evt.preventDefault();
    })


// move the focus to the first link
$("li:first-child a").focus();
}); // end ready