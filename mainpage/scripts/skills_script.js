const $ = function(id) 
{
    return document.getElementById(id);
}

$(document).ready(function() {
    let skills = [["JavaScript", "javascript.png"], ["HTML", "html.png"], ["CSS", "css.png"], ["C#", "csharp.png"], ["Python", "python.png"], ["GitHub", "github.png"],
 ["Trello", null], ["REST API", "rest.png"], ["ReactJS", "react.png"], ["Agile Development", null], ["MySQL", null]];

    for(entry in skills) {
        console.log("TEST");
        if(entry[1] !== null) {
            $("skills_list").innerHTML += "<p class='skill-item'>" + entry[0] + "<img class='skill-image' src='" + entry[1] +"></p>" 
        } else {
            $("skills_list").innerHTML += "<p class='skill-item'>" + entry[0] + "</p>"
        }
    }
})